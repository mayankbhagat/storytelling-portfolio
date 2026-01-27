"use client";

import { ArrowUpRight, Scale, Search, Mic, Activity } from "lucide-react";
import { motion } from "framer-motion";

const ProjectAnimation = ({ type }: { type: string }) => {
    switch (type) {
        case "lawyer":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-blue-900/10">
                    {/* Scale Icon Pulse */}
                    <div className="relative">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute inset-0 bg-blue-500/30 blur-xl rounded-full"
                        />
                        <Scale size={64} className="text-blue-400 relative z-10" />
                    </div>
                    {/* Floating Nodes */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute h-2 w-2 rounded-full bg-blue-400/50"
                            initial={{ x: 0, y: 0, opacity: 0 }}
                            animate={{
                                x: Math.cos(i * 1.2) * 100,
                                y: Math.sin(i * 1.2) * 100,
                                opacity: [0, 1, 0]
                            }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                        />
                    ))}
                </div>
            );
        case "search":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-emerald-900/10">
                    <div className="relative">
                        {/* Radar Ripples */}
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute inset-0 rounded-full border border-emerald-500/30"
                                initial={{ scale: 1, opacity: 1 }}
                                animate={{ scale: 3, opacity: 0 }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                            />
                        ))}
                        <Search size={48} className="text-emerald-400 relative z-10" />
                    </div>
                </div>
            );
        case "voice":
            return (
                <div className="absolute inset-0 flex items-center justify-center gap-1 bg-purple-900/10">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-3 rounded-full bg-purple-500/80"
                            animate={{ height: [20, 60, 20] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1, repeatType: "mirror" }}
                        />
                    ))}
                    <Mic size={32} className="absolute text-white/20 bottom-8" />
                </div>
            );
        case "health":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-red-900/10 overflow-hidden">
                    {/* EKG Line */}
                    <svg viewBox="0 0 500 100" className="w-full h-32 stroke-red-500 stroke-2 fill-none">
                        <motion.path
                            d="M0 50 L180 50 L200 10 L220 90 L240 50 L500 50"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </svg>
                    <Activity size={48} className="absolute text-red-500/50" />
                </div>
            );
        default:
            return null;
    }
}

const projects = [
    {
        id: 1,
        title: "AI Lawyer",
        description: "Engineer a legal assistant using Generative AI concepts. Achieved 85%+ clause retrieval accuracy using dense vector search. Orchestrated a memory-augmented pipeline and RAG workflows incorporating LangChain and Hugging Face LLMs, reducing hallucination rate in context-aware legal conversations by 20% and improving user satisfaction.",
        tags: ["Python", "LangChain", "Hugging Face", "FAISS", "RAG", "Streamlit"],
        link: "https://legallaw-ai.streamlit.app/",
        animType: "lawyer"
    },
    {
        id: 2,
        title: "Rojgar Boat",
        description: "The website is a React.js-based frontend that provides users with an interactive interface for job search and discovery. It integrates an AI search engine to enhance query relevance and result understanding, while MongoDB serves as the backend database. Features full text search and filtering.",
        tags: ["Next.js", "MongoDB", "Tailwind", "Node.js", "Express", "React.js"],
        link: "https://rojgar-boat.vercel.app/",
        animType: "search"
    },
    {
        id: 3,
        title: "Pipo : AI based voice assistant",
        description: "Developed multilingual voice assistant for real-time automation tasks with implementation of ASR and TTS systems achieving 1.2s response latency.Integrated commands for system-level achieving overall 92% accuracy with multimodals( BERT, SpaCy, GPT-2 ).",
        tags: ["Python", "Machine Learning", "Automation", "ASR", "TTS", "BERT"],
        link: "https://github.com/mayankbhagat/PIPO-AI-VOICE-ASSISTTANT",
        animType: "voice"
    },
    {
        id: 4,
        title: "Hospitality and Health Hub",
        description: "Composed Java Swing-based HMS with MySQL backend supporting CRUD, appointment scheduling, and patient data management. Streamlined database structure for faster multi-user access and reduced query latency.",
        tags: ["Java", "MySQL", "CRUD", "Appointment Scheduling"],
        link: "https://drive.google.com/drive/folders/1QeYCfATV2YZDme4vaTu18VUHcJFI7l3k-",
        animType: "health"
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative z-20 w-full px-6 py-24 md:px-12 lg:px-24">
            {/* Background elements for depth */}
            <div className="absolute inset-0 bg-linear-to-b from-[#121212] via-[#0a0a0a] to-[#000000]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[24px_24px] opacity-20" />

            <div className="relative mx-auto max-w-7xl">
                <div className="mb-16 border-b border-white/10 pb-8">
                    <h2 className="bg-linear-to-r from-white to-white/60 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">Originals</h2>
                    <p className="mt-4 text-lg text-white/60">Selected works and experiments.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative flex h-112 flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/10"
                        >
                            {/* Animation Background Layer */}
                            <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-500 group-hover:opacity-60">
                                <ProjectAnimation type={project.animType} />
                            </div>

                            {/* Gradient Overlay for text readability */}
                            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

                            {/* Content (Title & Tags) - Always Visible */}
                            <div className="relative z-20 p-8 transition-transform duration-500 group-hover:-translate-y-2">
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Short Description */}
                                <p className="mt-3 text-white/70 line-clamp-2 md:line-clamp-3 group-hover:opacity-0 transition-opacity duration-300">
                                    {project.description}
                                </p>
                            </div>

                            {/* Link Arrow - Clickable */}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute right-6 top-6 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/70 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-white hover:bg-white hover:text-black hover:rotate-45"
                                title="View Deployment"
                            >
                                <ArrowUpRight size={20} />
                            </a>

                            {/* Full Description Popup / Overlay */}
                            <div className="absolute inset-x-0 bottom-0 z-20 translate-y-full bg-[#0a0a0a]/95 p-8 text-white backdrop-blur-xl transition-transform duration-500 ease-in-out group-hover:translate-y-0 border-t border-white/10">
                                <h4 className="mb-2 text-lg font-bold text-purple-300">Overview</h4>
                                <p className="text-sm leading-relaxed text-white/80">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-32 text-center border-t border-white/5 pt-8">
                    <p className="text-white/40 text-sm">© {new Date().getFullYear()} Mayank Bhagat</p>
                </div>
            </div>
        </section>
    );
}

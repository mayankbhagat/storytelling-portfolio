"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, ExternalLink, Trophy } from "lucide-react";

const publications = [
    {
        title: "PIPO: AI-Based Voice Assistant",
        conference: "AI Global Conference 2025 (Sponsored by IEEE)",
        description: "Presents a lightweight, Python-based desktop voice assistant integrating Whisper STT, mBERT for intent classification, SpaCy for NLP processing, and GPT-based response generation. The system supports multimodal input (voice and text), real-time command execution, and desktop automation with high intent-classification accuracy (94%). Experimental results demonstrate improved efficiency, conversational flow, and performance compared to existing Python-based voice assistants.",
        link: "https://drive.google.com/file/d/18R_c3sAJd4kK4fierxcEK25TpPuIeGAq/view?usp=sharing",
        tags: ["Voice AI", "NLP", "mBERT", "Whisper STT"]
    }
];

const achievements = [
    {
        title: "SIH Finalist",
        organization: "Smart India Hackathon 2025",
        description: "Spearheaded a team of 6 and Ranked in top 45 teams among 950+ teams. Problem Statement: SIH25045 — CropSure (Agritech-based Yield Monitoring Solution)"
    },
    {
        title: "IBM Cloud Certification",
        organization: "IBM Private Limited",
        description: "Acquired a Cloud Computing Certificate from IBM Private Limited and Recognized for exceptional contribution to the Watsonx.ai generative AI deployment project."
    },
    {
        title: "Microsoft Azure Certification",
        organization: "Microsoft",
        description: "Acquired a Cloud Computing Certificate from Microsoft DP-900 for Azure Fundamentals."
    },
    {
        title: "Applied Machine Learning using Python",
        organization: "Michigan University",
        description: "Received a certificate for completing the Applied Machine Learning using Python course with score of 98%."
    }
];

export default function Achievements() {
    return (
        <section id="achievements" className="relative z-20 w-full px-6 py-24 md:px-12 lg:px-24 bg-[#121212] overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-900/10 blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 bg-linear-to-r from-white to-white/60 bg-clip-text text-center text-5xl font-black tracking-tighter text-transparent md:text-7xl"
                >
                    Recognition
                </motion.h2>

                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Publications Column */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-10 flex items-center gap-4 border-b border-white/10 pb-4"
                        >
                            <BookOpen className="text-purple-400" size={32} />
                            <h3 className="text-3xl font-bold text-white">Publications</h3>
                        </motion.div>

                        <div className="space-y-8">
                            {publications.map((pub, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-purple-500/30 hover:bg-white/10"
                                >
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {pub.tags.map(tag => (
                                            <span key={tag} className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h4 className="mb-2 text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                        {pub.title}
                                    </h4>
                                    <p className="mb-4 text-sm font-medium text-white/50">{pub.conference}</p>
                                    <p className="text-white/70 leading-relaxed mb-6">{pub.description}</p>

                                    <a href={pub.link} className="inline-flex items-center gap-2 text-sm font-bold text-white transition-opacity hover:opacity-80">
                                        Read Paper <ExternalLink size={14} />
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements Column */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-10 flex items-center gap-4 border-b border-white/10 pb-4"
                        >
                            <Trophy className="text-yellow-500" size={32} />
                            <h3 className="text-3xl font-bold text-white">Honors & Awards</h3>
                        </motion.div>

                        <div className="relative border-l border-white/10 ml-3 space-y-12 py-4">
                            {achievements.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative pl-12"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border border-white/20 bg-[#121212] flex items-center justify-center">
                                        <div className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                                    </div>

                                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                    <p className="mb-2 text-sm font-mono text-yellow-500/80">{item.organization}</p>
                                    <p className="text-white/60 leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

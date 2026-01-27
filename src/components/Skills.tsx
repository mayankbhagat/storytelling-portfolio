"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const skillsData = [
    {
        category: "Machine Learning & AI",
        gradient: "from-purple-500 to-indigo-500",
        skills: [
            { name: "Machine Learning", desc: "Predictive algorithms & statistical models" },
            { name: "Deep Learning", desc: "Multi-layered neural architectures" },
            { name: "LLMs", desc: "Large Language Models & foundation models" },
            { name: "Neural Networks", desc: "Brain-inspired computing systems" },
            { name: "CNN", desc: "Convolutional Neural Networks for vision" },
            { name: "RAG Systems", desc: "Retrieval-Augmented Generation flows" }
        ]
    },
    {
        category: "Frameworks & Architectures",
        gradient: "from-emerald-500 to-teal-500",
        skills: [
            { name: "TensorFlow", desc: "End-to-end ML platform" },
            { name: "PyTorch", desc: "Dynamic research-to-production framework" },
            { name: "Keras", desc: "High-level neural network API" },
            { name: "LangChain", desc: "Framework for LLM applications" },
            { name: "Hugging Face", desc: "Transformers & Spaces ecosystem" },
            { name: "EfficientNet", desc: "Optimization-focused CNN architecture" },
            { name: "YOLOv8", desc: "Real-time object detection SOTA" }
        ]
    },
    {
        category: "Languages",
        gradient: "from-blue-500 to-cyan-500",
        skills: [
            { name: "Python", desc: "Primary language for AI & Data Science" },
            { name: "C++", desc: "High-performance system optimization" },
            { name: "Java", desc: "Robust enterprise application logic" },
            { name: "SQL", desc: "Structured query language for data" },
            { name: "HTML", desc: "Semantic web markup structure" },
            { name: "CSS", desc: "Modern styling & visual presentation" }
        ]
    },
    {
        category: "Libraries & Tools",
        gradient: "from-orange-500 to-amber-500",
        skills: [
            { name: "Git", desc: "Version control & collaboration" },
            { name: "Docker", desc: "Containerization & deployment" },
            { name: "FAISS", desc: "Efficient similarity search" },
            { name: "Streamlit", desc: "Rapid data app prototyping" },
            { name: "OpenCV", desc: "Computer vision library" },
            { name: "NLTK", desc: "Natural Language Toolkit" },
            { name: "Scikit-learn", desc: "Standard ML algorithms library" },
            { name: "Pandas", desc: "Data manipulation & analysis" },
            { name: "NumPy", desc: "Numerical computing foundation" }
        ]
    },
    {
        category: "Cloud Services",
        gradient: "from-sky-500 to-indigo-500",
        skills: [
            { name: "IBM Cloud", desc: "Enterprise cloud solutions" },
            { name: "Azure", desc: "Microsoft cloud infrastructure" },
            { name: "AWS", desc: "Amazon Web Services ecosystem" }
        ]
    },
    {
        category: "NLP & Speech",
        gradient: "from-pink-500 to-rose-500",
        skills: [
            { name: "Speech-to-Text", desc: "Audio to text conversion" },
            { name: "Text-to-Speech", desc: "Synthesizing spoken audio" },
            { name: "pyttsx3", desc: "Offline text-to-speech library" },
            { name: "SpeechRecognition", desc: "Library for speech audio data" },
            { name: "Multilingual NLP", desc: "Cross-language processing models" }
        ]
    }
];

export default function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    return (
        <section id="skills" className="relative z-20 w-full px-6 py-24 md:px-12 lg:px-24 bg-[#121212]">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.1),transparent_40%)]" />

            <div className="relative mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 bg-linear-to-r from-white to-white/60 bg-clip-text text-center text-5xl font-black tracking-tighter text-transparent md:text-7xl"
                >
                    Technical Arsenal
                </motion.h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {skillsData.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10"
                        >
                            {/* Colorful Glow Effect on Hover */}
                            <div className={`absolute -inset-0.5 rounded-3xl bg-linear-to-br ${group.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`} />

                            <div className="relative z-10 flex-1">
                                <h3 className="mb-6 text-xl font-bold tracking-wide text-white/90">{group.category}</h3>

                                <div className="flex flex-wrap gap-3">
                                    {group.skills.map((skill, i) => (
                                        <div
                                            key={i}
                                            className="relative"
                                            onMouseEnter={() => setHoveredSkill(skill.name)}
                                            onMouseLeave={() => setHoveredSkill(null)}
                                        >
                                            <div className="relative cursor-default overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                                {skill.name}
                                            </div>

                                            {/* Floating Tooltip */}
                                            <AnimatePresence>
                                                {hoveredSkill === skill.name && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: 5, scale: 0.9 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="absolute bottom-full left-1/2 mb-3 w-48 -translate-x-1/2 rounded-xl border border-white/20 bg-[#0a0a0a]/90 px-3 py-2 text-center text-xs text-white shadow-2xl backdrop-blur-md z-50"
                                                    >
                                                        {skill.desc}
                                                        {/* Triangle pointer */}
                                                        <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-white/20 bg-[#0a0a0a]/90" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

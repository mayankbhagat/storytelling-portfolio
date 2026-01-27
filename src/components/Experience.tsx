"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Experience() {
    const experiences = [
        {
            company: "Infosys Springboard",
            role: "Machine Learning Intern",
            period: "Nov 2025 – Jan 2026",
            description: [
                "Led a team of 5 to develop CliniScan, an AI-based lung abnormality detection system for radiologists.",
                "Built a multi-label chest X-ray classification pipeline using EfficientNet-B0 CNN on 18,000+ VinBigData DICOM images.",
                "Achieved strong clinical performance with Macro F1 = 0.85, Micro F1 = 0.89, and Macro AUC-ROC = 0.92.",
                "Implemented lesion localization using YOLO (Ultralytics) achieving mAP@0.5 = 0.84.",
                "Integrated Grad-CAM visualization and deployed a real-time inference pipeline."
            ],
            link: "https://huggingface.co/spaces/mayankbhagat/Cliniscan"
        },
        {
            company: "IBM India Pvt. Ltd.",
            role: "Summer Industrial Internship – Generative AI",
            period: "May 2025 – Jul 2025",
            description: [
                "Implemented enterprise-grade Generative AI pipelines using IBM Watsonx.ai, improving reliability by 27%.",
                "Compiled and optimized RAG workflows integrating LLMs, increasing retrieval precision by 18%.",
                "Designed custom prompts and optimized context windows, reducing token usage by 22%.",
                "Developed MediBot, an AI-powered medical triage chatbot using RAG, achieving 92%+ routing accuracy.",
                "Enhanced medical response safety by integrating retrieval-backed knowledge base, improving factual consistency by 35%."
            ]
        }
    ];

    return (
        <section id="experience" className="relative z-20 w-full px-6 py-24 md:px-12 lg:px-24">
            {/* Background elements */}
            <div className="absolute inset-0 bg-linear-to-b from-[#121212] via-[#0a0a0a] to-[#121212]" />

            <div className="relative mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 bg-linear-to-r from-white to-white/60 bg-clip-text text-center text-6xl font-black tracking-tighter text-transparent md:text-8xl"
                >
                    Experience
                </motion.h2>

                <div className="relative space-y-24 before:absolute before:left-[19px] before:top-0 before:h-full before:w-[2px] before:bg-linear-to-b before:from-transparent before:via-purple-500/50 before:to-transparent md:before:left-1/2 md:before:-translate-x-1/2">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}
                        >
                            {/* Dot */}
                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/30 bg-[#121212] shadow-[0_0_20px_rgba(168,85,247,0.3)] md:left-1/2 md:-translate-x-1/2">
                                <div className="h-3 w-3 rounded-full bg-purple-500" />
                            </div>

                            {/* Content Card */}
                            <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                <div className={`flex flex-col gap-1 mt-2 mb-6 ${index % 2 === 0 ? '' : 'md:items-end'}`}>
                                    <span className="text-lg font-medium text-purple-300">{exp.company}</span>
                                    <span className="text-sm text-white/40 font-mono">{exp.period}</span>
                                </div>

                                <ul className={`space-y-3 text-white/70 text-sm leading-relaxed ${index % 2 === 0 ? '' : 'md:items-end'}`}>
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex gap-3">
                                            {index % 2 === 0 && <span className="mt-1.5 h-1.5 w-1.5 min-w-[6px] rounded-full bg-purple-500/50" />}
                                            <span>{item}</span>
                                            {index % 2 !== 0 && <span className="mt-1.5 hidden h-1.5 w-1.5 min-w-[6px] rounded-full bg-purple-500/50 md:block" />}
                                        </li>
                                    ))}
                                </ul>

                                {/* Custom Japanese Style Button for Infosys */}
                                {exp.link && (
                                    <div className={`mt-8 flex ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                                        <a
                                            href={exp.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative flex h-20 w-64 items-center justify-center overflow-hidden rounded-xl border border-white/20 shadow-2xl transition-transform hover:scale-105"
                                        >
                                            {/* Background Image */}
                                            <div className="absolute inset-0 z-0">
                                                <Image
                                                    src="/japanese_wave.png"
                                                    alt="Japanese Wave"
                                                    fill
                                                    className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                                                />
                                                <div className="absolute inset-0 bg-purple-900/30 mix-blend-overlay" />
                                            </div>

                                            {/* Content */}
                                            <div className="relative z-10 flex items-center gap-3 font-bold text-white drop-shadow-md">
                                                <span className="text-lg tracking-widest uppercase">Open Live</span>
                                                <ExternalLink className="group-hover:animate-bounce" />
                                            </div>

                                            {/* Shine Effect */}
                                            <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-linear-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

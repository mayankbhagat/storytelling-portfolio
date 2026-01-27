"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <section id="about" className="relative z-20 w-full bg-[#121212] px-6 py-24 md:px-12 lg:px-24">
            <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-24">
                {/* Visual / Typography Side */}
                <div className="flex-1">
                    {/* Gradient Text with better responsive sizing */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-linear-to-br from-white via-white/80 to-white/20 bg-clip-text text-[5rem] font-black leading-[0.9] tracking-tighter text-transparent sm:text-[6rem] md:text-[8rem] lg:text-[10rem]"
                    >
                        ABOUT <br /> ME.
                    </motion.h2>
                </div>

                {/* Content Side */}
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8 text-lg font-light leading-relaxed text-white/70 md:text-xl"
                    >
                        <p>
                            I am a <span className="font-semibold text-white">Creative AI Engineer</span> based in India,
                            specializing in building intelligent systems that bridge the gap between
                            complex algorithms and intuitive human experiences.
                        </p>
                        <p>
                            With a deep focus on <span className="text-white">Generative AI</span>,
                            <span className="text-white"> Computer Vision</span>, and <span className="text-white">Full-Stack Development</span>,
                            I craft digital solutions that are not just functional, but transformative.
                        </p>
                        <p>
                            When I'm not coding, I'm exploring the frontiers of <span className="italic text-white/50">computational creativity</span>
                            or contributing to the open-source community.
                        </p>

                        <div className="pt-8">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 border-b border-white/20 pb-1 text-sm uppercase tracking-widest text-white transition-colors hover:border-white hover:text-white/80"
                            >
                                Let's Connect
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

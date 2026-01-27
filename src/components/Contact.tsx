"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Phone } from "lucide-react";

export default function Contact() {
    const socialLinks = [
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: "https://www.linkedin.com/in/mayank-bhagat-8a548b276/",
            color: "hover:text-blue-500",
        },
        {
            name: "GitHub",
            icon: Github,
            href: "https://github.com/mayankbhagat",
            color: "hover:text-white",
        },
        {
            name: "Email",
            icon: Mail,
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=bhagatmayank2005@gmail.com",
            color: "hover:text-purple-400",
        },
        {
            name: "Phone",
            icon: Phone,
            href: "tel:9766253704",
            color: "hover:text-green-400",
        }
    ];

    return (
        <section id="contact" className="relative z-20 w-full overflow-hidden bg-[#121212] px-6 py-24 md:px-12 lg:px-24">
            {/* Background Glow */}
            <div className="absolute bottom-[-20%] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-purple-900/20 blur-[120px]" />

            <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 text-5xl font-black tracking-tighter text-white md:text-8xl"
                >
                    Ready to create <br />
                    <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                        the future?
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="mb-12 max-w-xl text-lg text-white/60"
                >
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-6"
                >
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl ${link.color}`}
                            aria-label={link.name}
                        >
                            <link.icon size={28} className="transition-transform duration-300 group-hover:scale-110" />
                        </a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-24 border-t border-white/10 pt-8"
                >
                    <p className="font-mono text-sm text-white/30">
                        &copy; {new Date().getFullYear()} Mayank Bhagat.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

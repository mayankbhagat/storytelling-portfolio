"use client";

import { motion } from "framer-motion";
// Native smooth scrolling used instead
// Actually, Next.js 'Link' with hash might jump. standard <a> with scroll-behavior: smooth is easiest, but creating a custom handler is better for control.
// Let's stick to standard buttons that scroll to ID.

export default function Navbar() {
    const navItems = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Experience", id: "experience" },
        { name: "Skills", id: "skills" },
        { name: "Awards", id: "achievements" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
        >
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-xl shadow-lg shadow-purple-500/5">
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => scrollToSection(item.id)}
                        className="relative rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white group"
                    >
                        <span className="relative z-10">{item.name}</span>
                        {/* Hover Background */}
                        <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </button>
                ))}
            </div>
        </motion.nav>
    );
}

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center relative py-20 px-6">
            <div className="max-w-4xl w-full z-10 glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-secondary" />

                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-8 text-white drop-shadow-neon-primary"
                >
                    System.<span className="text-primary">Identity</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-300 space-y-4 leading-relaxed text-lg"
                >
                    <p>
                        Loading bio... <br />
                        I am a frontend specialist traversing the neon-lit streets of modern web development.
                        My primary directives include building high-performance, visually stunning React applications
                        and crafting immersive user experiences.
                    </p>
                    <p>
                        Equipped with React, Tailwind CSS, and Framer Motion, I architect digital spaces that live
                        and breathe.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-10 flex flex-wrap gap-4"
                >
                    {['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Canvas API', 'JavaScript', 'Node.js'].map((tech, idx) => (
                        <span key={idx} className="px-4 py-2 border border-accent/30 rounded text-accent text-sm tracking-wider bg-black/50 shadow-[0_0_10px_rgba(0,255,255,0.1)]">
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;

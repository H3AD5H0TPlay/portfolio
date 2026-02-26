import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative">
            <div className="z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-neon-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                >
                    H3AD5H0T
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-xl md:text-2xl text-gray-300 font-light tracking-widest uppercase mb-8"
                >
                    Cyberpunk Web Developer
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <a href="#projects" className="glass-panel px-8 py-3 rounded-full text-white font-semibold hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:shadow-neon-primary">
                        Initialize Sequence
                    </a>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-primary/50 flex justify-center p-2">
                    <div className="w-[4px] h-[10px] bg-primary rounded-full shadow-neon-primary" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

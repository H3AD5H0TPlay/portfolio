import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: 'Neon E-Commerce',
        tech: ['React', 'Tailwind', 'Stripe'],
        desc: 'High-performance storefront with Cyberpunk aesthetics and blazing fast checkout.',
        link: '#',
        github: '#'
    },
    {
        title: 'Data.Matrix Dashboard',
        tech: ['Vite', 'Framer Motion', 'Chart.js'],
        desc: 'Real-time analytics dashboard with interactive data visualization and glassmorphism UI.',
        link: '#',
        github: '#'
    },
    {
        title: 'Neural Network Visualizer',
        tech: ['Canvas API', 'JavaScript', 'React'],
        desc: 'Interactive learning tool to visualize neural pathways in the browser.',
        link: '#',
        github: '#'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20 px-6 max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-16 text-white drop-shadow-neon-secondary"
            >
                Recent_<span className="text-secondary">Deployments</span>
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="glass-panel p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 group hover:shadow-neon-secondary cursor-pointer"
                    >
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 mb-6 text-sm">
                            {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t, i) => (
                                <span key={i} className="text-xs px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <a href={project.github} className="text-gray-300 hover:text-white transition-colors">
                                <FaGithub size={20} />
                            </a>
                            <a href={project.link} className="text-gray-300 hover:text-accent transition-colors">
                                <FaExternalLinkAlt size={18} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;

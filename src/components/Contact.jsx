import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');

    // Logic handed by Canvas-Engineer (Mock EmailJS submission)
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate network delay for EmailJS
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => setStatus('idle'), 3000);
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <section id="contact" className="min-h-screen py-20 px-6 max-w-3xl mx-auto flex flex-col justify-center">
            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-12 text-center text-white drop-shadow-neon-primary"
            >
                Initiate_Connection
            </motion.h2>

            <motion.form
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="glass-panel p-8 rounded-2xl flex flex-col gap-6 relative overflow-hidden"
            >
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-primary uppercase tracking-widest">Identifier [Name]</label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-black/50 border border-primary/30 p-3 rounded text-white focus:outline-none focus:border-primary focus:shadow-neon-primary transition-all transition-shadow"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-primary uppercase tracking-widest">Comm_Link [Email]</label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-black/50 border border-primary/30 p-3 rounded text-white focus:outline-none focus:border-primary focus:shadow-neon-primary transition-all transition-shadow"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-primary uppercase tracking-widest">Payload [Message]</label>
                    <textarea
                        rows="5"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-black/50 border border-primary/30 p-3 rounded text-white focus:outline-none focus:border-primary focus:shadow-neon-primary transition-all transition-shadow resize-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full mt-4 py-4 rounded bg-primary/20 border border-primary text-primary font-bold tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-neon-primary disabled:opacity-50"
                >
                    {status === 'sending' ? 'Transmitting...' : status === 'success' ? 'Ack Received' : 'Send Transmission'}
                </button>

                {status === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 bg-background/90 z-20 flex items-center justify-center flex-col text-accent backdrop-blur-sm"
                    >
                        <p className="text-2xl font-bold shadow-neon-primary drop-shadow-neon-primary mb-2">Message Encrypted</p>
                        <p>& Delivered to Server</p>
                    </motion.div>
                )}
            </motion.form>
        </section>
    );
};

export default Contact;

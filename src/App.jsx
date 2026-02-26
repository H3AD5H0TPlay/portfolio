import React from 'react';
import RainBackground from './components/RainBackground';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AudioToggle from './components/AudioToggle';

function App() {
    return (
        <div className="relative w-full text-white font-sans selection:bg-primary/50 selection:text-white">
            {/* Global Background Layer */}
            <RainBackground />

            {/* Floating Audio Control */}
            <AudioToggle />

            {/* Main Content Sections */}
            <main className="relative z-10">
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>

            {/* Footer */}
            <footer className="text-center py-6 border-t border-primary/20 glass-panel mt-12 bg-black/40">
                <p className="text-primary text-sm tracking-widest font-mono">
                    &copy; {new Date().getFullYear()} H3AD5H0T_PORTFOLIO // SYSTEM.ONLINE
                </p>
            </footer>
        </div>
    );
}

export default App;

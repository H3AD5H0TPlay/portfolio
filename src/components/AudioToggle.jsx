import React, { useState, useRef, useEffect } from 'react';

// Using a free cyberpunk-ish ambient sound url for demo
const AUDIO_URL = 'https://cdn.pixabay.com/audio/2022/10/25/audio_2265d9c2cb.mp3';

const AudioToggle = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(AUDIO_URL);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.3; // subtle background level

        return () => {
            audioRef.current.pause();
        };
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.warn('Audio play prevented by browser', e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed top-6 right-6 z-50">
            <button
                onClick={togglePlay}
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isPlaying
                        ? 'border-accent text-accent shadow-neon-accent bg-accent/10 glow-pulse'
                        : 'border-primary/50 text-primary/50 hover:border-primary hover:text-primary'
                    }`}
                title={isPlaying ? "Mute BGM" : "Play Cyberpunk Ambient"}
            >
                {isPlaying ? (
                    <div className="flex gap-1 h-4 items-center justify-center">
                        <div className="w-1 bg-accent h-full animate-pulse"></div>
                        <div className="w-1 bg-accent h-3/4 animate-pulse delay-75"></div>
                        <div className="w-1 bg-accent h-full animate-pulse delay-150"></div>
                    </div>
                ) : (
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default AudioToggle;

import React, { useRef, useEffect } from 'react';

const RainBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width, height;
        let drops = [];
        let ripples = [];

        const dropCount = 200;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        class Drop {
            constructor() {
                this.reset();
                this.y = Math.random() * height;
            }
            reset() {
                this.x = Math.random() * width;
                this.y = -Math.random() * 200;
                this.z = Math.random() * 0.5 + 0.1; // Parallax depth factor
                this.len = Math.random() * 20 + 20;
                this.speedY = Math.random() * 10 + 15;
                this.speedX = -Math.random() * 2 - 1; // Wind angle
                this.color = `rgba(138, 43, 226, ${this.z + 0.2})`; // Primary Cyberpunk Purple
            }
            update() {
                this.y += this.speedY * this.z;
                this.x += this.speedX * this.z;

                if (this.y > height) {
                    ripples.push(new Ripple(this.x, height, this.z)); // Ground ripple
                    this.reset();
                }
            }
            draw(ctx) {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.speedX * this.z, this.y + this.len * this.z);
                ctx.strokeStyle = this.color;
                ctx.lineWidth = this.z * 1.5;
                ctx.lineCap = 'round';
                ctx.stroke();
            }
        }

        class Ripple {
            constructor(x, y, z) {
                this.x = x;
                this.y = y;
                this.z = z;
                this.radius = 1;
                this.maxRadius = Math.random() * 20 * z + 10;
                this.speed = Math.random() * 0.5 + 0.2;
                this.alpha = this.z * 0.8;
            }
            update() {
                this.radius += this.speed;
                this.alpha -= 0.02;
            }
            draw(ctx) {
                ctx.beginPath();
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.scale(2, 0.5); // Oval perspective
                ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
                ctx.restore();
                // Secondary Neon Pink/Red or Cyan depending on random for variety
                const rippeColor = Math.random() > 0.5 ? '255, 0, 85' : '0, 255, 255';
                ctx.strokeStyle = `rgba(${rippeColor}, ${this.alpha})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }

        resize();
        window.addEventListener('resize', resize);

        const handleMouseMove = (e) => {
            // Spawn ripple directly on mouse
            if (Math.random() > 0.6) {
                ripples.push(new Ripple(e.clientX, e.clientY, 0.8));
            }
        };
        window.addEventListener('mousemove', handleMouseMove);

        for (let i = 0; i < dropCount; i++) {
            drops.push(new Drop());
        }

        let animationFrameId;

        const render = () => {
            // Trail effect clears the rect with opacity
            ctx.fillStyle = 'rgba(10, 10, 15, 0.3)';
            ctx.fillRect(0, 0, width, height);

            drops.forEach(drop => {
                drop.update();
                drop.draw(ctx);
            });

            for (let i = ripples.length - 1; i >= 0; i--) {
                ripples[i].update();
                if (ripples[i].alpha <= 0 || ripples[i].radius > ripples[i].maxRadius) {
                    ripples.splice(i, 1);
                } else {
                    ripples[i].draw(ctx);
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        // Prevent memory leaks on unmount
        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 bg-background pointer-events-none"
        />
    );
};

export default RainBackground;

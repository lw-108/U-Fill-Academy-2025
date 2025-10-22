"use client"

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

export interface ScrambledTextProps {
    radius?: number;
    duration?: number;
    speed?: number;
    scrambleChars?: string;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
    throttleDelay?: number;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
    radius = 100,
    duration = 1.2,
    speed = 0.5,
    scrambleChars = '.:',
    className = '',
    style = {},
    children,
    throttleDelay = 16 // ~60fps
}) => {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const [isClient, setIsClient] = useState(false);
    const animationRef = useRef<number | null>(null);
    const lastTimeRef = useRef(0);
    const splitInstanceRef = useRef<SplitText | null>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleMove = useCallback((e: PointerEvent) => {
        const now = Date.now();
        if (now - lastTimeRef.current < throttleDelay) return;
        lastTimeRef.current = now;

        if (!rootRef.current || !splitInstanceRef.current) return;

        const chars = splitInstanceRef.current.chars;
        if (!chars) return;

        chars.forEach(el => {
            const c = el as HTMLElement;
            const rect = c.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;
            const dist = Math.hypot(dx, dy);

            if (dist < radius) {
                const progress = 1 - (dist / radius);
                gsap.to(c, {
                    overwrite: true,
                    duration: duration * progress,
                    scrambleText: {
                        text: c.dataset.content || '',
                        chars: scrambleChars,
                        speed: speed * progress
                    },
                    ease: 'power2.out'
                });
            }
        });
    }, [radius, duration, speed, scrambleChars, throttleDelay]);

    useEffect(() => {
        if (!rootRef.current || !isClient) return;

        const element = rootRef.current.querySelector('p');
        if (!element) return;

        // CORRECTED: Use proper SplitText constructor
        splitInstanceRef.current = new SplitText(element, {
            type: 'chars',
            charsClass: 'inline-block will-change-transform'
        });

        // Store original content
        splitInstanceRef.current.chars?.forEach(el => {
            const c = el as HTMLElement;
            gsap.set(c, { 
                attr: { 'data-content': c.textContent || '' } 
            });
        });

        const handleLeave = () => {
            // Reset on leave
            splitInstanceRef.current?.chars?.forEach(el => {
                const c = el as HTMLElement;
                gsap.to(c, {
                    duration: 0.5,
                    scrambleText: {
                        text: c.dataset.content || '',
                        chars: scrambleChars,
                        speed: speed * 0.3
                    },
                    ease: 'power2.out'
                });
            });
        };

        const el = rootRef.current;
        el.addEventListener('pointermove', handleMove);
        el.addEventListener('pointerleave', handleLeave);

        return () => {
            el.removeEventListener('pointermove', handleMove);
            el.removeEventListener('pointerleave', handleLeave);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            if (splitInstanceRef.current) {
                splitInstanceRef.current.revert();
                splitInstanceRef.current = null;
            }
        };
    }, [handleMove, isClient, speed, scrambleChars]);

    return (
        <div
            ref={rootRef}
            className={`w-full max-w-screen-lg mx-auto font-mono text-[clamp(16px,4vw,32px)] text-black dark:text-white mt-6 px-4 cursor-default select-none ${className}`}
            style={style}
        >
            <p>{children}</p>
        </div>
    );
};

export default ScrambledText;
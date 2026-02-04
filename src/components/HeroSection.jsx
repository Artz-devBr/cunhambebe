import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const bgRef = useRef(null);
    const midRef = useRef(null);
    const fgRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect
            gsap.to(bgRef.current, {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            gsap.to(midRef.current, {
                yPercent: -10,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            gsap.to(fgRef.current, {
                yPercent: -30,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            // Title animation
            gsap.fromTo(titleRef.current,
                {
                    opacity: 0,
                    y: 100,
                    skewY: 7
                },
                {
                    opacity: 1,
                    y: 0,
                    skewY: 0,
                    duration: 1.5,
                    ease: 'power4.out',
                    delay: 0.5
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="parallax-container h-screen w-full relative overflow-hidden flex items-center justify-center">
            {/* Background Layer */}
            <div
                ref={bgRef}
                className="parallax-layer z-0"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '120%'
                }}
            />

            {/* Midground Layer */}
            <div
                ref={midRef}
                className="parallax-layer z-10 pointer-events-none"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.7,
                    height: '110%'
                }}
            />

            {/* Hero Content */}
            <div className="relative z-40 text-center px-4">
                <h1
                    ref={titleRef}
                    className="text-6xl md:text-9xl text-white drop-shadow-2xl leading-none"
                >
                    CUNHAMBEBE
                </h1>
                <p className="text-off-white text-lg md:text-xl mt-4 font-medium tracking-widest uppercase opacity-80">
                    O Coração da Mata Atlântica
                </p>
            </div>

            {/* Foreground Layer */}
            <div
                ref={fgRef}
                className="parallax-layer z-30 pointer-events-none"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2148&auto=format&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                    height: '130%'
                }}
            />

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

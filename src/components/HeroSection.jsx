import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import local images
import img1 from '../assets/hero/1.jpg';
import img2 from '../assets/hero/2.jpg';
import img3 from '../assets/hero/3.jpeg';
import img4 from '../assets/hero/4.jpeg';
import img5 from '../assets/hero/5.jpeg';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const imagesRef = useRef([]);
    const images = [img1, img2, img3, img4, img5];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Initial states
            gsap.set(imagesRef.current, { opacity: 0, scale: 1.1 });
            gsap.set(imagesRef.current[0], { opacity: 1, scale: 1 });

            // Slideshow Timeline
            const tl = gsap.timeline({ repeat: -1 });

            images.forEach((_, i) => {
                const nextIndex = (i + 1) % images.length;
                const currentImage = imagesRef.current[i];
                const nextImage = imagesRef.current[nextIndex];

                // Duration of each slide
                tl.to({}, { duration: 4 })
                    // Transition to next slide
                    .to(currentImage, { opacity: 0, duration: 1.5, ease: 'power2.inOut' }, '>')
                    .to(nextImage, { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.inOut' }, '<')
                    .set(currentImage, { scale: 1.1 }); // Reset scale for next time it appears
            });

            // Title Animation
            gsap.fromTo(titleRef.current,
                { opacity: 0, y: 100, skewY: 7 },
                {
                    opacity: 1,
                    y: 0,
                    skewY: 0,
                    duration: 1.5,
                    ease: 'power4.out',
                    delay: 0.5
                }
            );

            // Subtle Parallax on Scroll for the whole container
            gsap.to(containerRef.current, {
                backgroundPosition: "50% 100%",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-screen w-full relative overflow-hidden flex items-center justify-center bg-black">
            {/* Background Slideshow */}
            <div className="absolute inset-0 w-full h-full z-0">
                {images.map((img, index) => (
                    <div
                        key={index}
                        ref={el => imagesRef.current[index] = el}
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
            </div>

            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Gradient Overlay at Bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20 pointer-events-none" />

            {/* Content */}
            <div className="relative z-30 text-center px-4">
                <h1
                    ref={titleRef}
                    className="text-6xl md:text-9xl text-white drop-shadow-2xl leading-none font-bold"
                >
                    CUNHAMBEBE
                </h1>
                <p className="text-off-white text-lg md:text-xl mt-4 font-medium tracking-widest uppercase opacity-90 drop-shadow-lg">
                    O Coração da Mata Atlântica
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2 backdrop-blur-sm">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

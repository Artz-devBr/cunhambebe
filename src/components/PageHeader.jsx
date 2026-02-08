import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const PageHeader = ({ title, description }) => {
    const headerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.from("h1", {
                y: 100,
                duration: 1.2,
                ease: "power4.out"
            })
                .from(".header-line", {
                    scaleX: 0,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.6")
                .from(".header-text", {
                    opacity: 0,
                    y: 20,
                    duration: 0.8
                }, "-=0.4");
        }, headerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={headerRef} className="text-center mb-16 md:mb-24 relative z-10">
            <h1 className="text-5xl md:text-7xl font-display text-forest uppercase tracking-wide">
                {title}
            </h1>
            <div className="header-line w-24 h-1 bg-earth mx-auto mt-6 origin-center"></div>
            {description && (
                <p className="header-text mt-8 text-xl text-forest/70 font-medium max-w-2xl mx-auto px-4">
                    {description}
                </p>
            )}
        </div>
    );
};

export default PageHeader;

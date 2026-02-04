import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

import bird from '../assets/tie-sangue-bird.png';

const AboutSection = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Text reveal
            gsap.from(".reveal-item", {
                opacity: 0,
                y: 50,
                stagger: 0.2,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                },
            });

            // Image zoom
            gsap.from(imageRef.current, {
                scale: 1.5,
                duration: 2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 90%',
                    scrub: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-24 px-6 md:px-24 bg-off-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div ref={textRef} className="space-y-8">
                    <h2 className="text-4xl md:text-5xl text-forest reveal-item">
                        Uma Jornada <br /> de Preservação
                    </h2>
                    <p className="text-lg text-forest/80 leading-relaxed reveal-item">
                        O Parque Estadual Cunhambebe protege mais de 38 mil hectares de Mata Atlântica primária.
                        Localizado na Costa Verde do Rio de Janeiro, é um santuário de biodiversidade,
                        abrigando centenas de espécies endêmicas e nascentes vitais para a região.
                    </p>
                    <p className="text-lg text-forest/80 leading-relaxed reveal-item">
                        Nossa missão é conectar o ser humano à natureza, promovendo o ecoturismo consciente
                        e a educação ambiental através de trilhas interpretativas e experiências imersivas.
                    </p>
                    <div className="pt-4 reveal-item">
                        <Link key='/preservacao' to='/preservacao' className="px-8 py-3 bg-forest text-off-white rounded-full font-medium hover:bg-earth transition-colors duration-300">
                            Descubra Mais
                        </Link>
                    </div>
                </div>

                <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                    <img
                        ref={imageRef}
                        src={bird}
                        alt="Mata Atlântica"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

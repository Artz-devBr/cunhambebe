import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Mountain, Droplets, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const HighlightCard = ({ icon: Icon, title, description, image, path }) => {
    const cardRef = useRef(null);
    const contentRef = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * 0.15;
        const y = (clientY - (top + height / 2)) * 0.15;

        gsap.to(contentRef.current, {
            x: x,
            y: y,
            duration: 0.5,
            ease: 'power3.out',
        });
    };

    const handleMouseLeave = () => {
        gsap.to(contentRef.current, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)',
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
        >
            <Link key={path} to={path} className="block px-4 py-2 text-xs hover:bg-forest hover:text-white transition-colors">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent"></div>

                <div
                    ref={contentRef}
                    className="absolute inset-0 flex flex-col justify-end p-8 text-off-white"
                >
                    <div className="bg-earth/20 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="text-earth" size={24} />
                    </div>
                    <h3 className="text-3xl mb-2">{title}</h3>
                    <p className="text-sm text-off-white/70 leading-relaxed max-w-[250px]">
                        {description}
                    </p>
                </div>
            </Link>
        </div>
    );
};

const HighlightsGrid = () => {
    const gridRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".highlight-card", {
                scale: 0.8,
                opacity: 0,
                y: 100,
                stagger: 0.2,
                duration: 1.2,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: 'top 80%',
                },
            });
        }, gridRef);

        return () => ctx.revert();
    }, []);

    const highlights = [
        {
            icon: Mountain,
            title: "Trilhas",
            description: "Explore caminhos que levam a picos com vistas panorâmicas de tirar o fôlego.",
            image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
            path: "/trilhas"
        },
        {
            icon: Droplets,
            title: "Cachoeiras",
            description: "Banhe-se em águas cristalinas escondidas no denso coração da floresta.",
            image: "https://images.unsplash.com/photo-1508459855340-fb63ac591728?q=80&w=1980&auto=format&fit=crop",
            path: "/cachoeiras"
        },
        {
            icon: ShieldCheck,
            title: "Preservação",
            description: "Conheça nossos projetos de monitoramento e proteção da fauna e flora local.",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1913&auto=format&fit=crop",
            path: "/preservacao"
        }
    ];

    return (
        <section id="highlights" ref={gridRef} className="py-24 px-6 md:px-24 bg-forest">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-earth text-4xl md:text-5xl mb-4">Essência Pura</h2>
                    <p className="text-off-white/60 uppercase tracking-widest text-sm">O melhor de Cunhambebe</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((item, index) => (
                        <div key={index} className="highlight-card">
                            <HighlightCard {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HighlightsGrid;

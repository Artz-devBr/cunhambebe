import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Map, Clock, TrendingUp, Mountain, MapPin } from 'lucide-react';
import PageHeader from '../components/PageHeader';

// Importando imagens
import caminhodasaguasImg from '../assets/Trilhas/caminhodasaguas.jpeg';
import curumimImg from '../assets/Trilhas/curumim.png';
import veudanoivaImg from '../assets/Trilhas/veudanoiva.jpg';
import pontebelaImg from '../assets/Trilhas/pontebela.jpg';
import cachoeiraitingucuImg from '../assets/Trilhas/cachoeiraitingucu.jpg';
import torredeitaornaImg from '../assets/Trilhas/torredeitaorna.png';

gsap.registerPlugin(ScrollTrigger);

const TrailCard = ({ trail }) => {
    return (
        <div className="trail-card bg-white rounded-3xl overflow-hidden shadow-lg border border-earth/10 flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden group">
                <img
                    src={trail.image}
                    alt={trail.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-3xl text-off-white font-display uppercase tracking-wider mb-2">{trail.name}</h3>
                    <div className="flex gap-4 text-off-white/90 text-sm font-medium">
                        <span className="flex items-center gap-1 bg-earth/30 backdrop-blur-sm px-3 py-1 rounded-full">
                            <TrendingUp size={16} /> {trail.difficulty}
                        </span>
                        <span className="flex items-center gap-1 bg-earth/30 backdrop-blur-sm px-3 py-1 rounded-full">
                            <Map size={16} /> {trail.distance}
                        </span>
                        <span className="flex items-center gap-1 bg-earth/30 backdrop-blur-sm px-3 py-1 rounded-full">
                            <Clock size={16} /> {trail.time}
                        </span>
                        <span className="flex items-center gap-1 bg-earth/30 backdrop-blur-sm px-3 py-1 rounded-full">
                            <MapPin size={16} /> {trail.location}
                        </span>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="lg:w-1/2 p-4 lg:p-6 bg-forest/5 flex flex-col justify-center">
                <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-inner border border-earth/20 relative bg-off-white/50">
                    <iframe
                        frameBorder="0"
                        scrolling="no"
                        src={trail.iframeSrc}
                        className="w-full h-full"
                        title={`Mapa da trilha ${trail.name}`}
                    ></iframe>
                </div>
                <div className="mt-2 text-center text-[11px] text-gray-500">
                    Powered by <a href="https://pt.wikiloc.com" target="_blank" rel="noopener noreferrer" className="text-[#4C8C2B] hover:underline">Wikiloc</a>
                </div>
            </div>
        </div>
    );
};

const Trilhas = () => {
    const [filter, setFilter] = useState('Todas');
    const containerRef = useRef(null);

    const trails = [
        {
            id: 1,
            name: "Caminho das Águas",
            image: caminhodasaguasImg,
            difficulty: "Fácil",
            distance: "2.5 km",
            time: "50min",
            location: "Sahy",
            iframeSrc: "https://pt.wikiloc.com/wikiloc/embedv2.do?id=78599331&elevation=off&images=off&maptype=H"
        },
        {
            id: 2,
            name: "Curumim",
            image: curumimImg,
            difficulty: "Fácil",
            distance: "1.8 km",
            time: "10min",
            location: "Sahy",
            iframeSrc: "https://pt.wikiloc.com/wikiloc/embedv2.do?id=78022284&elevation=off&images=off&maptype=H"
        },
        {
            id: 3,
            name: "Véu da Noiva",
            image: veudanoivaImg,
            difficulty: "Média",
            distance: "4.2 km",
            time: "30min",
            location: "Muriqui",
            iframeSrc: "https://pt.wikiloc.com/wikiloc/embedv2.do?id=116412609&elevation=off&images=off&maptype=H"
        },
        {
            id: 4,
            name: "Ponte Bela",
            image: pontebelaImg,
            difficulty: "Difícil",
            distance: "6.5 km",
            time: "1h 30min",
            location: "Rio Claro",
            iframeSrc: "https://pt.wikiloc.com/wikiloc/embedv2.do?id=140118035&elevation=off&images=off&maptype=H"
        },
        {
            id: 5,
            name: "Torre de Itaorna",
            image: torredeitaornaImg,
            difficulty: "Média",
            distance: "4.01 km",
            time: "30min",
            location: "Angra dos Reis",
            iframeSrc: "https://pt.wikiloc.com/wikiloc/embedv2.do?id=53996858&elevation=off&images=off&maptype=H"
        },
        {
            id: 6,
            name: "Cachoeira Itinguçu",
            image: cachoeiraitingucuImg,
            difficulty: "Média",
            distance: "2km",
            time: "20min",
            location: "Itacuruçá",
            iframeSrc: "https://pt.wikiloc.com/wikiloc/embedv2.do?id=124174865&elevation=off&images=off&maptype=H"
        }
    ];

    const filteredTrails = filter === 'Todas'
        ? trails
        : trails.filter(trail => trail.difficulty === filter);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".trail-card", {
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".trails-container",
                    start: "top 80%"
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, [filteredTrails]); // Re-run animation when list changes

    const difficulties = ["Todas", "Fácil", "Média", "Difícil"];

    return (
        <div ref={containerRef} className="bg-off-white min-h-screen pt-28 pb-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <PageHeader
                    title="Nossas Trilhas"
                    description="Descubra a beleza escondida em cada caminho. De passeios tranquilos a desafios intensos, temos a aventura perfeita esperando por você."
                />

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {difficulties.map((level) => (
                        <button
                            key={level}
                            onClick={() => setFilter(level)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === level
                                ? 'bg-forest text-off-white shadow-lg scale-105'
                                : 'bg-white text-forest border border-forest/20 hover:bg-forest/5 hover:border-forest/50'
                                }`}
                        >
                            {level}
                        </button>
                    ))}
                </div>

                {/* Trails List */}
                <div className="trails-container flex flex-col gap-12">
                    {filteredTrails.length > 0 ? (
                        filteredTrails.map((trail) => (
                            <TrailCard key={trail.id} trail={trail} />
                        ))
                    ) : (
                        <div className="text-center py-20 opacity-50">
                            <p className="text-xl">Nenhuma trilha encontrada com esta dificuldade.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Trilhas;
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';

import veu1 from '../assets/Trilhas/veudanoiva.jpg';
import img1 from '../assets/Trilhas/caminhodasaguas.jpeg';
import pont1 from '../assets/Trilhas/pontebela.jpg';
import paisg from '../assets/Trilhas/cachoeiraitingucu.jpg';


const WaterfallCard = ({ number, name, difficulty, location, description, images, popular }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 last:mb-0">
            {/* Left Side - Image Carousel */}
            <div className="w-full md:w-1/3 relative h-64 md:h-auto group rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src={images[currentImage]}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Navigation Arrows */}
                <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentImage(idx)}
                            className={`w-2 h-2 rounded-full transition-all shadow-sm ${idx === currentImage ? 'bg-white w-4' : 'bg-white/50 hover:bg-white'
                                }`}
                        ></button>
                    ))}
                </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-3xl font-display text-forest uppercase tracking-wide mb-2">
                    <span className="opacity-60 mr-2">{number}.</span>
                    {name}
                </h3>

                {/* Difficulty Level */}
                <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-bold uppercase tracking-wider text-forest/50">Nível de Dificuldade</span>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className={`w-3 h-3 rounded-full border border-earth ${i < difficulty ? 'bg-earth' : 'bg-transparent'
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Metadata Tags */}
                <div className="flex flex-wrap gap-4 mb-4 text-xs font-semibold uppercase tracking-widest text-forest/60">
                    <span className="flex items-center gap-1">
                        <MapPin size={12} /> {location}
                    </span>
                </div>

                {/* Description */}
                <p className="text-forest/80 leading-relaxed tracking-wide mb-6">
                    {description}
                </p>

                {/* Action Button */}
                <div>
                    <button className="px-8 py-3 bg-earth text-white rounded-full font-medium hover:bg-earth/80 transition-all shadow-lg hover:shadow-earth/20 transform hover:-translate-y-1">
                        Ver excursões
                    </button>
                </div>
            </div>
        </div>
    );
};

const Cachoeiras = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.from(containerRef.current, {
            opacity: 100,
            y: 30,
            duration: 1,
            ease: "power3.out"
        });
    }, []);

    const waterfalls = [
        {
            number: 1,
            name: "Véu da Noiva",
            difficulty: 4,
            location: "Muriqui",
            description: "É a joia da coroa do PEC. Uma queda espetacular de aproximadamente 50 metros que serpenteia o paredão rochoso. A trilha exige fôlego, com trechos de subida acentuada e raízes expostas, mas recompensa o visitante com uma piscina natural de águas geladas e uma vista privilegiada da vegetação nativa de Mata Atlântica.",
            images: [
                veu1
            ]
        },
        {
            number: 2,
            name: "Caminho das Águas",
            difficulty: 3,
            location: "Vale do Sahy",
            description: "Um circuito refrescante que margeia o Rio Sahy. É a opção ideal para famílias e grupos que buscam contemplação sem grande esforço físico. O caminho apresenta diversos poços naturais de águas cristalinas e pequenas quedas, com trilhas sombreadas pela copa das árvores e terreno majoritariamente plano.",
            images: [
                img1
            ]
        },
        {
            number: 3,
            name: "Ponte Bela",
            difficulty: 1,
            location: "Serra do Piloto",
            description: "Situada na histórica Estrada Imperial, esta cachoeira combina natureza e história. O acesso é quase imediato a partir da estrada, sendo uma das mais acessíveis do parque. Suas águas calmas correm sob as ruínas da antiga ponte de pedra do período imperial, oferecendo um cenário fotográfico e um banho relaxante e seguro.",
            images: [
                pont1
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-off-white pt-32 pb-24 px-6 md:px-12">
            <div ref={containerRef} className="max-w-6xl mx-auto relative z-10">
                <PageHeader
                    title="Cachoeiras"
                    description="Descubra as joias líquidas escondidas em nossa reserva. Cada queda d'água conta uma história milenar de pedra e água."
                />

                <div className="space-y-24">
                    {waterfalls.map((item, index) => (
                        <WaterfallCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cachoeiras;

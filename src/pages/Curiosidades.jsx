import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Info, Bird, Trees, Mountain, Droplets } from 'lucide-react';
import PageHeader from '../components/PageHeader';

gsap.registerPlugin(ScrollTrigger);

const curiosities = [
    {
        id: 1,
        title: "Biodiversidade Única",
        description: "O Parque Estadual Cunhambebe abriga uma vasta diversidade de flora e fauna, incluindo espécies ameaçadas de extinção como a onça-parda e o monocarvoeiro.",
        icon: <Leaf className="w-6 h-6 text-white" />,
        color: "bg-green-600",
        image: "https://loremflickr.com/800/500/wildlife,brazil"
    },
    {
        id: 2,
        title: "Água Cristalina",
        description: "As nascentes do parque são fundamentais para o abastecimento de água da região, com rios de águas límpidas e diversas cachoeiras preservadas.",
        icon: <Droplets className="w-6 h-6 text-white" />,
        color: "bg-blue-600",
        image: "https://loremflickr.com/800/500/waterfall,river"
    },
    {
        id: 3,
        title: "Observação de Aves",
        description: "É um paraíso para observadores de aves (birdwatching), com centenas de espécies catalogadas vivendo livremente em seu habitat natural.",
        icon: <Bird className="w-6 h-6 text-white" />,
        color: "bg-yellow-600",
        image: "https://loremflickr.com/800/500/bird,toucan"
    },
    {
        id: 4,
        title: "Mata Atlântica",
        description: "O parque protege um importante remanescente de Mata Atlântica, contribuindo para a regulação climática e preservação do solo.",
        icon: <Trees className="w-6 h-6 text-white" />,
        color: "bg-emerald-700",
        image: "https://loremflickr.com/800/500/rainforest,brazil"
    },
    {
        id: 5,
        title: "Picos e Montanhas",
        description: "Sua geografia acidentada oferece mirantes naturais com vistas deslumbrantes da Serra do Mar e da região costeira.",
        icon: <Mountain className="w-6 h-6 text-white" />,
        color: "bg-stone-600",
        image: "https://loremflickr.com/800/500/mountain,landscape"
    },
    {
        id: 6,
        title: "Nome Indígena",
        description: "Cunhambebe foi um importante chefe indígena Tupinambá que liderou a Confederação dos Tamoios no século XVI.",
        icon: <Info className="w-6 h-6 text-white" />,
        color: "bg-red-600",
        image: "https://loremflickr.com/800/500/indigenous,art"
    }
];

const Curiosidades = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const itemsRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Title Animation
            // Cards Animation
            itemsRef.current.forEach((el, index) => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.1, // Stagger effect
                    ease: "back.out(1.7)"
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !itemsRef.current.includes(el)) {
            itemsRef.current.push(el);
        }
    };

    return (
        <div ref={containerRef} className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-off-white">
            {/* Hero Section */}
            <PageHeader
                title="Curiosidades do Parque"
                description="Descubra fatos fascinantes sobre a história, geografia e a biodiversidade exuberante que habita o Parque Estadual Cunhambebe."
            />

            {/* Grid Section */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {curiosities.map((item) => (
                    <div
                        key={item.id}
                        ref={addToRefs}
                        className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                    >
                        {/* Image Container */}
                        <div className="relative h-56 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className={`absolute top-4 right-4 p-3 rounded-xl shadow-md ${item.color} backdrop-blur-sm bg-opacity-90`}>
                                {item.icon}
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-6 flex flex-col relative">
                            <h3 className="text-2xl font-bold text-forest mb-3 group-hover:text-earth transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed flex-1">
                                {item.description}
                            </p>

                            <div className={`h-1 w-0 group-hover:w-full ${item.color} transition-all duration-500 absolute bottom-0 left-0`}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Curiosidades;
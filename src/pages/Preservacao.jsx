import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Leaf, Droplets, History, Info, Binoculars, TreePine } from 'lucide-react';
import PageHeader from '../components/PageHeader';

// Assets placeholders - based on file list
import heroBg from '../assets/park-aerial-view.png';
import monkey from '../assets/muriqui-monkey.png';
import bird from '../assets/tie-sangue-bird.png';
import ruins from '../assets/historical-ruins.png';
import chief from '../assets/cunhambebe-chief.png';
import texture from '../assets/alvaro_pontos/texture_background_v2.png';
import waterfall from '../assets/alvaro_pontos/cachoeira_do_itinguçu.webp';

gsap.registerPlugin(ScrollTrigger);

const SectionTitle = ({ children, subtitle }) => (
    <div className="mb-12 text-center">
        <span className="text-earth font-medium tracking-widest uppercase text-sm block mb-2">{subtitle}</span>
        <h2 className="text-4xl md:text-5xl font-display text-forest uppercase tracking-tight">{children}</h2>
        <div className="w-24 h-1 bg-earth mx-auto mt-6"></div>
    </div>
);

const Card = ({ title, subtitle, description, icon: Icon, image, delay }) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg card-gsap" data-delay={delay}>
            <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/0 transition-all duration-500 z-10"></div>
                <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8">
                <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center mb-6 text-forest">
                    <Icon size={24} />
                </div>
                <span className="text-earth font-bold tracking-widest uppercase text-xs mb-2 block">{subtitle}</span>
                <h3 className="text-2xl font-display text-forest uppercase mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
};

const Preservacao = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Cards Animation
            gsap.utils.toArray('.card-gsap').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse"
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.2
                });
            });

            // Feature Sections
            gsap.utils.toArray('.feature-section').forEach((section) => {
                gsap.from(section.querySelectorAll('.anim-text'), {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1
                });

                gsap.from(section.querySelectorAll('.anim-image'), {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                    },
                    scale: 0.9,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out"
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-off-white min-h-screen pt-32">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Header */}
                <PageHeader
                    title={<>Preservação & Sustentabilidade</>}
                    description="Protegendo a biodiversidade, a história e os recursos naturais do Parque Estadual Cunhambebe para as gerações futuras."
                />
            </div>

            {/* Introduction Quote */}
            <div className="py-20 px-6 bg-forest text-off-white relative overflow-hidden">
                <img src={texture} className="absolute inset-0 w-full h-full object-cover opacity-5 mix-blend-overlay" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <History className="w-12 h-12 mx-auto text-earth mb-6 opacity-80" />
                    <h3 className="text-2xl md:text-4xl font-display uppercase leading-normal tracking-wide">
                        "Cunhambebe não é apenas um nome, é o eco de uma história de resistência e união que hoje vive em cada árvore preservada."
                    </h3>
                </div>
            </div>

            {/* Main Pillars */}
            <div className="py-24 px-6 max-w-7xl mx-auto">
                <SectionTitle subtitle="Nossos Pilares">Áreas de Atuação</SectionTitle>

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    <Card
                        title="Fauna e Flora"
                        subtitle="Biodiversidade"
                        description="Lar de espécies raras como o Muriqui-do-Sul e o Tiê-Sangue. Monitoramento constante para garantir o equilíbrio do ecossistema e proteção contra a caça e desmatamento."
                        image={monkey}
                        icon={Leaf}
                        delay={0}
                    />
                    <Card
                        title="Recursos Hídricos"
                        subtitle="Águas"
                        description="Proteção das nascentes e rios que abastecem a região. A conservação das matas ciliares é vital para manter a qualidade e o fluxo das cachoeiras."
                        image={waterfall}
                        icon={Droplets}
                        delay={0.2}
                    />
                    <Card
                        title="Patrimônio Histórico"
                        subtitle="Cultura"
                        description="Preservação de ruínas históricas e sítios arqueológicos que contam a história do ciclo do café e da ocupação da região no século XIX."
                        image={ruins}
                        icon={History}
                        delay={0.4}
                    />
                </div>
            </div>

            {/* Feature Section: Fauna */}
            <div className="py-24 bg-white feature-section relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-earth/5 -skew-x-12 transform origin-top translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <div className="relative anim-image">
                            <div className="absolute -inset-4 border-2 border-earth/30 rounded-3xl translate-x-4 translate-y-4"></div>
                            <img src={bird} alt="Tiê Sangue" className="rounded-3xl shadow-2xl w-full relative z-10 aspect-[4/3] object-cover" />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg z-20 flex items-center gap-3">
                                <div className="bg-forest p-2 rounded-lg text-white">
                                    <Binoculars size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Espécie Símbolo</p>
                                    <p className="text-forest font-bold font-display text-lg">Tiê-Sangue</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <div className="anim-text">
                            <span className="text-earth font-bold tracking-widest uppercase text-sm">Biodiversidade Única</span>
                            <h2 className="text-4xl md:text-5xl font-display text-forest uppercase mt-2">Santuário da Vida Silvestre</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg anim-text">
                            O Parque Estadual Cunhambebe atua como um corredor ecológico vital, conectando fragmentos de Mata Atlântica e permitindo o fluxo gênico de diversas espécies.
                        </p>
                        <ul className="space-y-4 pt-4 anim-text">
                            <li className="flex items-start gap-3">
                                <span className="bg-earth/20 p-1 rounded-full text-earth mt-1"><Shield size={14} /></span>
                                <span className="text-gray-700">Refúgio para espécies ameaçadas de extinção.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-earth/20 p-1 rounded-full text-earth mt-1"><Leaf size={14} /></span>
                                <span className="text-gray-700">Mais de 200 espécies de aves catalogadas.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-earth/20 p-1 rounded-full text-earth mt-1"><TreePine size={14} /></span>
                                <span className="text-gray-700">Conservação de árvores centenárias e flora nativa.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Feature Section: History & Chief */}
            <div className="py-24 bg-off-white feature-section">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <div className="anim-text">
                            <span className="text-earth font-bold tracking-widest uppercase text-sm">Legado Indígena</span>
                            <h2 className="text-4xl md:text-5xl font-display text-forest uppercase mt-2">O Grande Chefe Cunhambebe</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg anim-text">
                            O nome do parque homenageia o lendário chefe Tupinambá, Cunhambebe, que liderou a Confederação dos Tamoios no século XVI. Sua liderança e resistência são inspirações para nossa missão de proteger este território.
                        </p>
                        <p className="text-gray-600 leading-relaxed anim-text">
                            Além da herança indígena, o parque abriga vestígios do período colonial, incluindo antigas estradas, ruínas de fazendas de café e estruturas de represamento de água, contando a história da transformação da paisagem ao longo dos séculos.
                        </p>
                    </div>
                    <div className="relative anim-image">
                        <div className="absolute inset-0 bg-earth rounded-full opacity-10 blur-3xl transform scale-90"></div>
                        <img src={chief} alt="Chefe Cunhambebe Ilustração" className="relative z-10 w-full drop-shadow-2xl hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-forest py-24 px-6 relative overflow-hidden">
                <img src={heroBg} className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay grayscale" />
                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
                    <h2 className="text-4xl md:text-6xl font-display text-white uppercase tracking-tight">Ajude a Preservar</h2>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                        A preservação é um dever de todos. Ao visitar o parque, respeite as regras, não deixe lixo e proteja a natureza.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
                        <Link to="/regras" className="bg-earth text-forest font-bold px-8 py-4 rounded-full hover:bg-white transition-colors duration-300 uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                            <Info size={18} /> Conheça as Regras
                        </Link>
                        <Link to="/denuncie" className="border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-300 uppercase tracking-widest text-sm flex items-center justify-center">
                            Denuncie Infrações
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Preservacao;
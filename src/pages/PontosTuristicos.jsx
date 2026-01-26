import cachoeiraItingucu from '../assets/cachoeira_do_itinguçu.webp';
import cachoeiraVeuNoiva from '../assets/cachoeira_veu_da_noiva.jpg';
import cachoeiraRubiao from '../assets/cachoeira_do_rubiao.JPG';
import cachoeiraBengala from '../assets/cachoeira_da _bengala.jpg';
import ruinasTeatro from '../assets/teatro_antigo.png';
import ponteBela from '../assets/ponte_bela.jpg';
import igrejaMatriz from '../assets/igreja_matriz_de_sao_joao_marcos.webp';
import pedraChata from '../assets/pedra_chata.jpg';
import bicoPapagaio from '../assets/bico_do_papagaio.jpg';
import ribeiraoLages from '../assets/represa_ribeirao_das_lajes.jpg';
import miranteSahy from '../assets/mirante_do_sahy.jpg';
import cachoeirasRioSahy from '../assets/cachoeira_do_rio_sahy.webp';
import picoTresOrelhas from '../assets/pico_das_tres_orelhas.webp';
import cachoeiraConquista from '../assets/a-cachoeira-da-conquista.jpg';
import textureBackground from '../assets/texture_background_v2.png';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registra o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Dados dos Pontos Turísticos (Placeholders para preenchimento manual)
const pontosTuristicos = [
    {
        id: 1,
        nome: "🏞️ 1. Cachoeira do Itinguçu",
        imagem: cachoeiraItingucu,
        dificuldade: 2,
        descricao: "Trilha curta/moderada (~2,4 km) e ideal para banho.",
        sede: "Sede Itaguaí"
    },
    {
        id: 2,
        nome: "🌊 2. Cachoeira Véu da Noiva",
        imagem: cachoeiraVeuNoiva,
        dificuldade: 2,
        descricao: "Trilha de mata, acesso um pouco mais longo.",
        sede: "Sede Mangaratiba"
    },
    {
        id: 3,
        nome: "🌳 3. Cachoeira do Rubião",
        imagem: cachoeiraRubiao,
        dificuldade: 2,
        descricao: "Trilha de 1 km com piscina natural.",
        sede: "Sede Itaguaí"
    },
    {
        id: 4,
        nome: "💧 4. Cachoeira da Bengala",
        imagem: cachoeiraBengala,
        dificuldade: 1,
        descricao: "Curto acesso (~200 m) pela mata.",
        sede: "Sede Mangaratiba"
    },
    {
        id: 5,
        nome: "🏛️ 5. Ruínas do Antigo Teatro",
        imagem: ruinasTeatro,
        dificuldade: 1,
        descricao: "Atração histórica perto de trilha principal.",
        sede: "Sede Mangaratiba"
    },
    {
        id: 6,
        nome: "🌉 6. Pontes da Estrada Imperial",
        imagem: ponteBela,
        dificuldade: 4,
        descricao: "Fácil acesso por trilhas curtas.",
        sede: "Sede Mangaratiba"
    },
    {
        id: 7,
        nome: "⛪ 7. Igreja Matriz de São João Marcos",
        imagem: igrejaMatriz,
        dificuldade: 1,
        descricao: "Histórica e cultural.",
        sede: "Sede Mangaratiba"
    },
    {
        id: 8,
        nome: "🪨 8. Pedra Chata",
        imagem: pedraChata,
        dificuldade: 4,
        descricao: "Trilha mais longa com grande altitude para vista panorâmica.",
        sede: "Sede Mangaratiba"
    },
    {
        id: 9,
        nome: "🪜 9. Bico do Papagaio",
        imagem: bicoPapagaio,
        dificuldade: 3,
        descricao: "Trilha leve a moderada com cume rochoso.",
        sede: "Sede Mangaratiba"
    },
    {
        id: 10,
        nome: "🏞️ 10. Ribeirão das Lages",
        imagem: ribeiraoLages,
        dificuldade: 1,
        descricao: "Área de corredeiras e poços naturais.",
        sede: "Sede Mangaratiba"
    },
    {
        id: 11,
        nome: "🌄 11. Mirante do Sahy / Cânions",
        imagem: miranteSahy,
        dificuldade: 3,
        descricao: "Trilha com vistas bonitas sobre o vale e formações rochosas.",
        sede: "Sede Mangaratiba"
    },
    {
        id: 12,
        nome: "💦 12. Cachoeiras do Rio Sahy",
        imagem: cachoeirasRioSahy,
        dificuldade: 2,
        descricao: "Pequeno conjunto de quedas e piscinas naturais.",
        sede: "Sede Mangaratiba"
    },
    {
        id: 13,
        nome: "🌄 13. Pico das Três Orelhas",
        imagem: picoTresOrelhas,
        dificuldade: 5,
        descricao: "Subida longa e técnica, indicada para trilheiros experientes.",
        sede: "Sede Mangaratiba"
    },
    {
        id: 14,
        nome: "💧 14. Cachoeira da Conquista",
        imagem: cachoeiraConquista,
        dificuldade: 3,
        descricao: "Parte de trilha maior com várias quedas d’água.",
        sede: "Sede Mangaratiba"
    }
];

const DifficultyBars = ({ level }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".difficulty-bar",
                { scaleX: 0, transformOrigin: "left" },
                {
                    scaleX: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 95%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="flex gap-1" title={`Nível de Dificuldade: ${level}/5`}>
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    className={`difficulty-bar w-[30px] h-[6px] border border-black ${i < level ? 'bg-black' : 'bg-white'}`}
                ></div>
            ))}
        </div>
    );
};

const PontosTuristicos = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        // Animação de entrada do título
        gsap.fromTo(".header-animate",
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
        );

        // Animação dos cards ao rolar a página
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(card,
                {
                    scale: 0.9,
                    y: 50
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%", // Começa quando o topo do card atinge 80% da altura da viewport
                        end: "bottom 20%",
                        toggleActions: "play none none reverse", // Toca ao entrar, reverte ao sair
                        // scrub: true, // Descomente se quiser que a animação esteja atrelada diretamente ao scroll (efeito parallax mais forte)
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);



    return (
        <div ref={containerRef} className="min-h-screen overflow-hidden bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${textureBackground})` }}>
            {/* Header Section */}
            <header className="py-20 px-6 text-center bg-white shadow-sm mb-12">
                <h1 className="header-animate text-5xl md:text-6xl font-bold text-green-900 mb-4 font-display uppercase tracking-tight">
                    Pontos Turísticos
                </h1>
                <div className="header-animate w-24 h-1.5 bg-green-600 mx-auto rounded-full mb-6"></div>
                <p className="header-animate text-gray-600 max-w-2xl mx-auto text-lg">
                    Explore as belezas naturais, trilhas desafiadoras e paisagens inesquecíveis do Parque Cunhambebe.
                </p>
                <p className="header-animate text-sm text-gray-500 mt-2">
                    Para mais informações sobre o local em específico, olhe nas abas cachoeiras ou nas trilhas
                </p>
            </header>

            {/* Main Content - Cards */}
            <main className="container mx-auto px-4 pb-24">
                <div className="flex flex-col gap-24">
                    {pontosTuristicos.map((ponto, index) => (
                        <div
                            key={ponto.id}
                            ref={el => cardsRef.current[index] = el}
                            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 
                                ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`} // Alterna a ordem
                        >
                            {/* Imagem */}
                            <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105">
                                <img
                                    src={ponto.imagem}
                                    alt={ponto.nome}
                                    className="w-full h-[300px] md:h-[400px] object-cover"
                                />
                            </div>

                            {/* Conteúdo */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold tracking-wide uppercase rounded-full">
                                        {ponto.sede}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-500 font-medium">Dificuldade:</span>
                                        <DifficultyBars level={ponto.dificuldade} />
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                    {ponto.nome}
                                </h2>

                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {ponto.descricao}
                                </p>


                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default PontosTuristicos;
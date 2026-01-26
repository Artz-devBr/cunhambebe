//Nosso Trabalho by Vitor Gabriel:}

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Instagram } from 'lucide-react';

const PageTemplate = ({ title }) => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        // Garantimos que o conteúdo comece invisível e suba
        gsap.fromTo(contentRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.2 }
        );
    }, []);

    return (
        <div ref={containerRef} className="relative min-h-screen w-full overflow-x-hidden">

            {/* CAMADA 1: A IMAGEM DE FUNDO FIXA */}
            <div
                className="fixed inset-0 w-full h-full z-0"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://jornalatual.com.br/wp-content/uploads/2024/06/Fachada-sede-do-parque-Cunhambebe.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* CAMADA 2: O CONTEÚDO SCROLLÁVEL */}
            <main className="relative z-10 flex flex-col items-center justify-center py-20 px-6">

                <div
                    ref={contentRef}
                    className="max-w-6xl w-full bg-black/40 backdrop-blur-xl p-8 md:p-16 rounded-[2rem] border border-white/10 shadow-2xl"
                >
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter mb-4">
                            {title || "O Parque"}
                        </h1>
                        <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl md:text-2xl text-white/90 mb-16 leading-relaxed text-center font-light">
                            No Parque Estadual Cunhambebe, protegemos 38 mil hectares de Mata Atlântica na Costa Verde do Rio de Janeiro.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {/* Card 1 */}
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                <span className="text-4xl mb-4 block">🛡️</span>
                                <h3 className="text-xl font-bold text-white mb-3">Proteção</h3>
                                <p className="text-white/70 text-sm">Rondas constantes e monitoramento contra o desmatamento.</p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                <span className="text-4xl mb-4 block">📸</span>
                                <h3 className="text-xl font-bold text-white mb-3">Monitoramento</h3>
                                <p className="text-white/70 text-sm">Registro de fauna com câmeras-trap (antas e onças).</p>
                            </div>

                            {/* Card 3 */}
                             <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                <span className="text-4xl mb-4 block">🛤️</span>
                                <h3 className="text-xl font-bold text-white mb-3">Trilhas</h3>
                                <p className="text-white/70 text-sm">Manutenção constante de extensa malha de trilhas e cachoeiras para visitação segura.</p>
                            </div>


                            {/* Card 4 */}
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                <span className="text-4xl mb-4 block">👥</span>
                                <h3 className="text-xl font-bold text-white mb-3">Educação</h3>
                                <p className="text-white/70 text-sm">Oficinas em escolas e eventos de sensibilização ambiental.</p>
                            </div>

                            {/* Card 5 */}
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 md:col-span-2 lg:col-span-1">
                                <span className="text-4xl mb-4 block">🤝</span>
                                <h3 className="text-xl font-bold text-white mb-3">Parcerias</h3>
                                <p className="text-white/70 text-sm">Gestão participativa com a comunidade e universidades.</p>
                            </div>

                            {/* Card 6 */}
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                <span className="text-4xl mb-4 block">🦌</span>
                                <h3 className="text-xl font-bold text-white mb-3">Biodiversidade</h3>
                                <p className="text-white/70 text-sm">383 espécies de aves registradas, além de onças-pardas, antas, macacos muriqui e quatis.</p>
                            </div>

                            {/* Card 7 */}
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                <span className="text-4xl mb-4 block">🐆</span>
                                <h3 className="text-xl font-bold text-white mb-3">Onças-pardas</h3>
                                <p className="text-white/70 text-sm">Registros frequentes de onças-pardas e até grupos circulando livremente pelas trilhas.</p>
                            </div>

                            {/* Card 8 */}
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                <span className="text-4xl mb-4 block">🌳</span>
                                <h3 className="text-xl font-bold text-white mb-3">Área Protegida</h3>
                                <p className="text-white/70 text-sm">38.053 hectares de Mata Atlântica contínua, o 2º maior parque estadual do RJ.</p>
                            </div>

                            {/* Card 9 */}
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                <span className="text-4xl mb-4 block">🥾</span>
                                <h3 className="text-xl font-bold text-white mb-3">Ecoturismo</h3>
                                <p className="text-white/70 text-sm">Trilhas, cachoeiras e observação de aves abertos para visitação responsável.</p>
                            </div>

                            {/* Card 10 */}
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                <span className="text-4xl mb-4 block">🦜</span>
                                <h3 className="text-xl font-bold text-white mb-3">Avifauna</h3>
                                <p className="text-white/70 text-sm">Mais de 380 espécies de aves, representando grande parte da diversidade do estado do RJ.</p>
                            </div>

                            {/* Card 11 */}
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                <span className="text-4xl mb-4 block">🦍</span>
                                <h3 className="text-xl font-bold text-white mb-3">Espécies Ameaçadas</h3>
                                <p className="text-white/70 text-sm">Protege macaco muriqui, onça-pintada (potencial), antas e diversas espécies endêmicas.</p>
                            </div>
                        </div>

                        <div className="text-center mt-16">
                            <a
                                href="https://www.instagram.com/cunhambebe.rj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <Instagram size={24} />
                                Siga @cunhambebe.rj no Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PageTemplate;





















// Workflow GIT:

// Fazer o Fork.

// Criar a branch: git checkout -b feature/pagina-nossotrabalho-vitor.

// Desenvolver apenas dentro do arquivo src/pages/NossoTrabalho.jsx.

// Adicionar, comitar e fazer o Push.

// Fazer o Pull Request para o repositório original.
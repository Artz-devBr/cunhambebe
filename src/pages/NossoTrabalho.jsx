import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Instagram } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const PageTemplate = ({ title }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.from(containerRef.current, {

            y: 30,
            duration: 1,
            ease: "power3.out"
        });
    }, []);

    return (
        <div ref={containerRef} className="pt-32 min-h-screen bg-off-white px-6 pb-20">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <PageHeader
                    title={title || "Nosso Trabalho"}
                    description="No Parque Estadual Cunhambebe, protegemos 38 mil hectares de Mata Atlântica na Costa Verde do Rio de Janeiro."
                />

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-forest/5">
                        <span className="text-4xl mb-4 block">🛡️</span>
                        <h3 className="text-xl font-bold text-forest mb-3">Proteção</h3>
                        <p className="text-forest/70">Rondas constantes e monitoramento contra o desmatamento.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-forest/5">
                        <span className="text-4xl mb-4 block">📸</span>
                        <h3 className="text-xl font-bold text-forest mb-3">Monitoramento</h3>
                        <p className="text-forest/70">Registro de fauna com câmeras-trap (antas e onças).</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-forest/5">
                        <span className="text-4xl mb-4 block">🛤️</span>
                        <h3 className="text-xl font-bold text-forest mb-3">Trilhas</h3>
                        <p className="text-forest/70">Manutenção constante de extensa malha de trilhas e cachoeiras para visitação segura.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-forest/5">
                        <span className="text-4xl mb-4 block">👥</span>
                        <h3 className="text-xl font-bold text-forest mb-3">Educação</h3>
                        <p className="text-forest/70">Oficinas em escolas e eventos de sensibilização ambiental.</p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-forest/5">
                        <span className="text-4xl mb-4 block">🤝</span>
                        <h3 className="text-xl font-bold text-forest mb-3">Parcerias</h3>
                        <p className="text-forest/70">Gestão participativa com a comunidade e universidades.</p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-forest/5">
                        <span className="text-4xl mb-4 block">🦌</span>
                        <h3 className="text-xl font-bold text-forest mb-3">Biodiversidade</h3>
                        <p className="text-forest/70">383 espécies de aves registradas, além de onças-pardas, antas, macacos muriqui e quatis.</p>
                    </div>

                    {/* Card 7 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-forest/5">
                        <span className="text-4xl mb-4 block">🐆</span>
                        <h3 className="text-xl font-bold text-forest mb-3">Onças-pardas</h3>
                        <p className="text-forest/70">Registros frequentes de onças-pardas e até grupos circulando livremente pelas trilhas.</p>
                    </div>

                    {/* Card 8 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-forest/5">
                        <span className="text-4xl mb-4 block">🌳</span>
                        <h3 className="text-xl font-bold text-forest mb-3">Área Protegida</h3>
                        <p className="text-forest/70">38.053 hectares de Mata Atlântica contínua, o 2º maior parque estadual do RJ.</p>
                    </div>

                    {/* Card 9 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-forest/5">
                        <span className="text-4xl mb-4 block">🥾</span>
                        <h3 className="text-xl font-bold text-forest mb-3">Ecoturismo</h3>
                        <p className="text-forest/70">Trilhas, cachoeiras e observação de aves abertos para visitação responsável.</p>
                    </div>

                    {/* Card 10 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-forest/5">
                        <span className="text-4xl mb-4 block">🦜</span>
                        <h3 className="text-xl font-bold text-forest mb-3">Avifauna</h3>
                        <p className="text-forest/70">Mais de 380 espécies de aves, representando grande parte da diversidade do estado do RJ.</p>
                    </div>

                    {/* Card 11 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-forest/5">
                        <span className="text-4xl mb-4 block">🦍</span>
                        <h3 className="text-xl font-bold text-forest mb-3">Espécies Ameaçadas</h3>
                        <p className="text-forest/70">Protege macaco muriqui, onça-pintada (potencial), antas e diversas espécies endêmicas.</p>
                    </div>
                </div>



            </div>
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
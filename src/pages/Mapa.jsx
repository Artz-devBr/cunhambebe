import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
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

            {/* 1. CABEÇALHO DE BOAS-VINDAS */}
            <PageHeader
                title={<>Nosso Mapa</>}
                description="Explore a localização do Parque Estadual Cunhambebe, suas divisões territoriais e as melhores formas de acesso."
            />

            {/* 2. SEÇÃO DE DIVISÃO TERRITORIAL (ESTILO JORNAL) */}
            <div className="max-w-5xl mx-auto border-t-2 border-b-2 border-forest py-8 mb-16">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="md:w-1/3 pr-4 border-r border-forest/20">
                        <h2 className="font-display text-2xl text-forest uppercase leading-none mb-4">
                            A Divisão do <br />Território
                        </h2>
                        <p className="text-forest/80 text-sm leading-relaxed">
                            O Parque Estadual Cunhambebe distribui-se de forma desigual entre quatro municípios.
                            Abaixo, apresentamos a hierarquia territorial da maior para a menor ocupação.
                        </p>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-2 gap-6">
                        <div>
                            <span className="text-earth font-bold text-xs uppercase">1º Angra dos Reis</span>
                            <p className="text-xs text-forest/60 mt-1 uppercase tracking-widest font-bold">Área Predominante</p>
                        </div>
                        <div>
                            <span className="text-forest font-bold text-xs uppercase">2º Rio Claro</span>
                            <p className="text-xs text-forest/60 mt-1 uppercase tracking-widest font-bold">Núcleo Central</p>
                        </div>
                        <div>
                            <span className="text-forest font-bold text-xs uppercase">3º Mangaratiba</span>
                            <p className="text-xs text-forest/60 mt-1 uppercase tracking-widest font-bold">Serra e Mar</p>
                        </div>
                        <div>
                            <span className="text-forest font-bold text-xs uppercase">4º Itaguaí</span>
                            <p className="text-xs text-forest/60 mt-1 uppercase tracking-widest font-bold">Limite Leste</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. SEÇÃO: COMO CHEGAR (GUIA DE ACESSO) */}
            <div className="max-w-5xl mx-auto mb-20 bg-forest p-8 md:p-12 text-off-white shadow-2xl rounded-sm">
                <div className="border-l-4 border-earth pl-6">
                    <h3 className="text-3xl font-display uppercase tracking-tight mb-2">Como chegar ao Parque</h3>
                    <p className="text-earth uppercase tracking-[0.2em] text-xs font-bold mb-8">Guia de Acesso e Localização</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Acesso Principal */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-earth mt-1.5 shrink-0 rotate-45"></div>
                            <div>
                                <h4 className="font-bold text-earth uppercase text-xs tracking-widest mb-1">Principal Acesso</h4>
                                <p className="text-sm leading-relaxed text-off-white/90">Rodovia Rio-Santos (BR-101), altura do Km 423, no trevo do Sahy em Mangaratiba.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-earth mt-1.5 shrink-0 rotate-45"></div>
                            <div>
                                <h4 className="font-bold text-earth uppercase text-xs tracking-widest mb-1">Acesso a Trilhas</h4>
                                <p className="text-sm leading-relaxed text-off-white/90 italic">Ex: Cachoeira Véu da Noiva: Localizadas próximas à BR-101, com estradas de terra que levam às atrações, incluindo a região da Serra do Piloto.</p>
                            </div>
                        </div>
                    </div>

                    {/* Vias de Carro */}
                    <div className="space-y-6">
                        <div className="bg-white/5 p-4 border border-white/10">
                            <h4 className="font-bold uppercase text-[10px] tracking-[0.2em] mb-2 opacity-60">Via Rio/Santos</h4>
                            <p className="text-sm leading-relaxed">Seguir até Mangaratiba e procurar a Estrada da Cachoeira no bairro do Sahy, onde está o Centro de Visitantes.</p>
                        </div>
                        <div className="bg-white/5 p-4 border border-white/10">
                            <h4 className="font-bold uppercase text-[10px] tracking-[0.2em] mb-2 opacity-60">Via Dutra</h4>
                            <p className="text-sm leading-relaxed">Seguir até Barra Mansa, pegar a RJ-149 em direção a Rio Claro e depois seguir para Mangaratiba, acessando a Rio-Santos.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. SEÇÃO DOS MAPAS - ANGRA DOS REIS */}
            <div className="max-w-6xl mx-auto mb-20 px-4">
                <div className="flex flex-col gap-8">

                    {/* Descrição */}
                    <div className="w-full">
                        <div className="mb-6">
                            <span className="text-earth font-bold text-xs uppercase tracking-[0.3em]">Divisão Territorial</span>
                            <h2 className="text-4xl md:text-5xl font-display text-forest uppercase leading-tight mt-2">
                                Angra dos Reis
                            </h2>
                            <p className="text-forest/40 text-xs font-bold uppercase mt-1">1º Maior porção do Parque</p>
                        </div>

                        <div className="space-y-4 text-forest/80 text-sm leading-relaxed border-l-2 border-earth/20 pl-6 max-w-3xl">
                            <p>
                                O acesso por Angra dos Reis é marcado pela exuberância da Serra do Mar. A entrada principal para esta área do parque é feita pela <strong>Estrada do Bananal</strong> ou via distritos que fazem divisa com Rio Claro.
                            </p>
                            <p>
                                A partir do centro de Angra, siga pela <strong>BR-101 (Rio-Santos)</strong> no sentido Rio de Janeiro até as proximidades de Lídice ou utilize as vias secundárias que levam às trilhas de encosta, onde a "setinha" no mapa indica o início da zona de preservação rigorosa.
                            </p>

                            <button className="mt-6 px-8 py-3 bg-forest text-off-white text-[10px] uppercase tracking-widest font-bold hover:bg-earth transition-all duration-300">
                                Traçar Rota para Angra →
                            </button>
                        </div>
                    </div>

                    {/* Mapa */}
                    <div className="w-full h-[450px] relative group">
                        <div className="absolute inset-0 border-2 border-forest/10 translate-x-3 translate-y-3 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>

                        <div className="w-full h-full bg-forest/10 overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235160.65839669234!2d-44.68805322717456!3d-22.936033492476973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9db25f1a5c915f%3A0x88120b067af35694!2sCunhambebe%2C%20Angra%20dos%20Reis%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1769363017640!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa Cunhambebe - Angra dos Reis"
                            ></iframe>
                        </div>

                        <div className="absolute top-4 right-4 bg-forest text-off-white px-4 py-1 text-[10px] uppercase tracking-tighter">
                            Visualização de Área: Angra
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. SEÇÃO DOS MAPAS - RIO CLARO */}
            <div className="max-w-6xl mx-auto mb-20 px-4">
                <div className="flex flex-col gap-8">

                    {/* Descrição */}
                    <div className="w-full">
                        <div className="mb-6">
                            <span className="text-earth font-bold text-xs uppercase tracking-[0.3em]">Núcleo Central</span>
                            <h2 className="text-4xl md:text-5xl font-display text-forest uppercase leading-tight mt-2">
                                Rio Claro
                            </h2>
                            <p className="text-forest/40 text-xs font-bold uppercase mt-1">2º Maior porção territorial</p>
                        </div>

                        <div className="space-y-4 text-forest/80 text-sm leading-relaxed border-l-2 border-earth/20 pl-6 max-w-3xl">
                            <p>
                                Rio Claro abriga o coração do Parque Cunhambebe. É nesta região que a preservação atinge seu nível mais profundo, protegendo as nascentes que abastecem o Vale do Paraíba.
                            </p>
                            <p>
                                <strong>Como chegar:</strong> O acesso principal é feito pela <strong>RJ-149</strong> (Estrada de São João Marcos). Esta estrada histórica liga Rio Claro a Mangaratiba e oferece pontos de parada com vistas panorâmicas da Serra do Piloto. No mapa ao lado, a marcação indica as áreas de mata densa características deste município.
                            </p>

                            <button className="mt-6 px-8 py-3 bg-forest text-off-white text-[10px] uppercase tracking-widest font-bold hover:bg-earth transition-all duration-300">
                                Traçar Rota para Rio Claro →
                            </button>
                        </div>
                    </div>

                    {/* Mapa */}
                    <div className="w-full h-[450px] relative group">
                        <div className="absolute inset-0 border-2 border-forest/10 translate-x-3 translate-y-3 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>

                        <div className="w-full h-full bg-forest/10 overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235240.21485248528!2d-44.114835750000005!3d-22.890183225064686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c3fb5069be2bd%3A0xd905f04e9ae81416!2sParque%20Estadual%20Cunhambebe!5e0!3m2!1spt-BR!2sbr!4v1769364412791!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa Cunhambebe - Rio Claro"
                            ></iframe>
                        </div>

                        <div className="absolute top-4 right-4 bg-forest text-off-white px-4 py-1 text-[10px] uppercase tracking-tighter">
                            Visualização de Área: Rio Claro
                        </div>
                    </div>
                </div>
            </div>

            {/* 6. SEÇÃO DOS MAPAS - MANGARATIBA */}
            <div className="max-w-6xl mx-auto mb-20 px-4">
                <div className="flex flex-col gap-8">

                    {/* Descrição */}
                    <div className="w-full">
                        <div className="mb-6">
                            <span className="text-earth font-bold text-xs uppercase tracking-[0.3em]">Sede Administrativa</span>
                            <h2 className="text-4xl md:text-5xl font-display text-forest uppercase leading-tight mt-2">
                                Mangaratiba
                            </h2>
                            <p className="text-forest/40 text-xs font-bold uppercase mt-1">3º Maior porção territorial</p>
                        </div>

                        <div className="space-y-4 text-forest/80 text-sm leading-relaxed border-l-2 border-earth/20 pl-6 max-w-3xl">
                            <p>
                                É em Mangaratiba que se localiza a porta de entrada oficial para muitos visitantes. O município abriga o <strong>Centro de Visitantes</strong>, servindo como ponto de apoio e educação ambiental.
                            </p>
                            <p>
                                <strong>Como chegar:</strong> O acesso é feito principalmente pelo bairro do <strong>Sahy</strong>. Seguindo pela BR-101 (Rio-Santos), entre no trevo do Sahy e siga pela Estrada da Cachoeira. No mapa ao lado, o marcador destaca a região que dá acesso às famosas trilhas da Cachoeira Véu da Noiva.
                            </p>

                            <button className="mt-6 px-8 py-3 bg-forest text-off-white text-[10px] uppercase tracking-widest font-bold hover:bg-earth transition-all duration-300">
                                Acessar Rotas de Mangaratiba →
                            </button>
                        </div>
                    </div>

                    {/* Mapa */}
                    <div className="w-full h-[450px] relative group">
                        <div className="absolute inset-0 border-2 border-forest/10 translate-x-3 translate-y-3 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>

                        <div className="w-full h-full bg-forest/10 overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197813.97375057143!2d-44.08763305814904!3d-22.88927741952668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c3fb5069be2bd%3A0xd905f04e9ae81416!2sParque%20Estadual%20Cunhambebe!5e0!3m2!1spt-BR!2sbr!4v1769365065042!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa Cunhambebe - Mangaratiba"
                            ></iframe>
                        </div>

                        <div className="absolute top-4 right-4 bg-forest text-off-white px-4 py-1 text-[10px] uppercase tracking-tighter">
                            Visualização de Área: Mangaratiba
                        </div>
                    </div>
                </div>
            </div>

            {/* 7. SEÇÃO DOS MAPAS - ITAGUAÍ */}
            <div className="max-w-6xl mx-auto mb-20 px-4">
                <div className="flex flex-col gap-8">

                    {/* Descrição */}
                    <div className="w-full">
                        <div className="mb-6">
                            <span className="text-earth font-bold text-xs uppercase tracking-[0.3em]">Limite Territorial</span>
                            <h2 className="text-4xl md:text-5xl font-display text-forest uppercase leading-tight mt-2">
                                Itaguaí
                            </h2>
                            <p className="text-forest/40 text-xs font-bold uppercase mt-1">4º Menor porção territorial</p>
                        </div>

                        <div className="space-y-4 text-forest/80 text-sm leading-relaxed border-l-2 border-earth/20 pl-6 max-w-3xl">
                            <p>
                                Embora Itaguaí detenha a menor fatia de área protegida do parque, sua relevância é enorme para a conectividade biológica entre os maciços florestais e o controle da expansão urbana na região metropolitana.
                            </p>
                            <p>
                                <strong>Como chegar:</strong> O acesso é feito pelas estradas rurais que partem do município de Itaguaí em direção às montanhas. No mapa ao lado, a marcação indica o limite leste do parque, onde a mata se torna um escudo natural para as bacias hidrográficas locais.
                            </p>

                            <button className="mt-6 px-8 py-3 bg-forest text-off-white text-[10px] uppercase tracking-widest font-bold hover:bg-earth transition-all duration-300">
                                Traçar Rota para Itaguaí →
                            </button>
                        </div>
                    </div>

                    {/* Mapa */}
                    <div className="w-full h-[450px] relative group">
                        <div className="absolute inset-0 border-2 border-forest/10 translate-x-3 translate-y-3 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>

                        <div className="w-full h-full bg-forest/10 overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197813.97375057143!2d-44.08763305814904!3d-22.88927741952668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c3fb5069be2bd%3A0xd905f04e9ae81416!2sParque%20Estadual%20Cunhambebe!5e0!3m2!1spt-BR!2sbr!4v1769365234888!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa Cunhambebe - Itaguaí"
                            ></iframe>
                        </div>

                        <div className="absolute top-4 right-4 bg-forest text-off-white px-4 py-1 text-[10px] uppercase tracking-tighter">
                            Visualização de Área: Itaguaí
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PageTemplate;

// Workflow GIT:

// Fazer o Fork.

// Criar a branch: git checkout -b feature/pagina-mapa-hillary.

// Desenvolver apenas dentro do arquivo src/pages/Mapa.jsx.

// Adicionar, comitar e fazer o Push.

// Fazer o Pull Request para o repositório original.
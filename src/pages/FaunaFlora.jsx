import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Images
import imgNidularium from '../assets/fauna_flora/01_Nidularium_innocentii_EquipeEVL.JPG';
import imgSapo from '../assets/fauna_flora/Sapo_pingo_de_ouro_Bernardo.JPG';
import imgCobra from '../assets/fauna_flora/Erythrolamprus_miliaris_ iris_lemos.JPG';
import imgPassaro from '../assets/fauna_flora/garibaldi_Samuel_Gomes_08.01.JPG';
import imgCogumelo from '../assets/fauna_flora/Cogumelo_guarda_sol_Macrolepiota_colombiana.JPG';

gsap.registerPlugin(ScrollTrigger);

const Section = ({ title, children, className = "" }) => (
    <div className={`mb-16 ${className} section-trigger`}>
        {title && <h2 className="text-3xl md:text-4xl font-display text-forest mb-6 border-l-4 border-earth pl-4 overflow-hidden"><span className="inline-block section-title">{title}</span></h2>}
        <div className="text-lg text-forest/80 leading-relaxed space-y-4 section-text">
            {children}
        </div>
    </div>
);

const FaunaFlora = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            const tl = gsap.timeline();
            tl.from("h1", {
                y: 100,
                duration: 1.2,
                ease: "power4.out"
            })
                .from(".header-line", {
                    scaleX: 0,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.6")
                .from(".header-text", {
                    opacity: 0,
                    y: 20,
                    duration: 0.8
                }, "-=0.4");

            // Generic Section Reveals
            gsap.utils.toArray(".section-trigger").forEach(section => {
                const title = section.querySelector(".section-title");
                const text = section.querySelector(".section-text");

                if (title) {
                    gsap.from(title, {
                        y: "100%",
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                        }
                    });
                }

                if (text) {
                    gsap.from(text.children, {
                        opacity: 0,
                        y: 30,
                        duration: 0.8,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                        }
                    });
                }
            });

            // Parallax Images
            gsap.utils.toArray(".parallax-img").forEach(img => {
                gsap.to(img, {
                    y: -50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    }
                });
            });

            // Image Reveal (Scale & Fade)
            gsap.utils.toArray(".reveal-img-container").forEach(container => {
                gsap.from(container.querySelector("img"), {
                    scale: 1.2,
                    opacity: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 80%",
                    }
                });
            });

            // Data Counter Animation
            gsap.utils.toArray(".counter").forEach(counter => {
                const value = parseInt(counter.getAttribute("data-target"));
                gsap.fromTo(counter,
                    { innerText: 0 },
                    {
                        innerText: value,
                        duration: 2,
                        snap: { innerText: 1 },
                        scrollTrigger: {
                            trigger: counter,
                            start: "top 85%",
                        },
                        onUpdate: function () {
                            counter.innerText = "+" + Math.ceil(this.targets()[0].innerText);
                        }
                    }
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="pt-32 min-h-screen bg-off-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl pb-24">

                {/* Header */}
                <div className="text-center mb-24 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-display text-forest uppercase tracking-tighter">
                        Fauna e Flora
                    </h1>
                    <div className="header-line w-24 h-1 bg-earth mx-auto mt-6 origin-center"></div>
                    <p className="header-text mt-8 text-xl text-forest/70 font-medium max-w-2xl mx-auto">
                        Um santuário de biodiversidade onde a vida pulsa em cada folha, em cada canto da serra.
                    </p>
                </div>

                {/* Introdução */}
                <Section className="anim-section">
                    <p>
                        O <strong>Parque Estadual Cunhambebe</strong> é um guardião precioso da <strong>Mata Atlântica</strong>, um dos biomas mais ricos e ameaçados do planeta. Sua geografia singular, que se estende desde as terras baixas próximas ao nível do mar até picos imponentes com mais de 1000 metros de altitude, cria um gradiente ecológico fascinante.
                    </p>
                    <p>
                        Essa variação altitudinal não apenas molda a paisagem, mas gera diversos <strong>microclimas</strong>. Nas partes baixas, o calor e a umidade favorecem uma vegetação densa e exuberante. À medida que subimos a serra, a temperatura cai e a neblina se torna frequente, permitindo o desenvolvimento de espécies adaptadas ao frio e à alta umidade, criando nichos ecológicos únicos para a fauna e flora.
                    </p>
                </Section>

                <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
                    <div>
                        <Section title="Flora: O Dossel e o Sub-bosque">
                            <h3 className="text-xl font-bold text-earth mt-4 mb-2">Espécies Emergentes</h3>
                            <p>
                                O teto da floresta é dominado por gigantes centenários. Árvores como o majestoso <strong>Jequitibá-rosa</strong> e o nobre <strong>Cedro</strong> despontam acima do dossel, alcançando alturas impressionantes. Elas são as guardiãs da floresta, oferecendo abrigo e suporte para inúmeras outras formas de vida.
                            </p>

                            <h3 className="text-xl font-bold text-earth mt-6 mb-2">Espécies de Valor Ecológico</h3>
                            <p>
                                No estrato médio, destaca-se o <strong>Palmito-juçara</strong> (<em>Euterpe edulis</em>). Mais do que uma planta, é uma espécie-chave para o ecossistema. Seus frutos, ricos em energia, alimentam uma vasta gama de animais, de aves a pequenos mamíferos, garantindo a dispersão de sementes e a regeneração da mata.
                            </p>
                        </Section>
                    </div>
                    <div className="space-y-6 md:mt-12">
                        <div className="reveal-img-container overflow-hidden rounded-lg shadow-xl h-80 relative group">
                            <img
                                src={imgNidularium}
                                alt="Bromélia Nidularium innocentii"
                                className="parallax-img w-full h-[120%] object-cover -mt-10"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-earth section-trigger">
                            <h3 className="section-title text-xl font-bold text-forest mb-2">Jardins Suspensos</h3>
                            <div className="section-text">
                                <p className="text-forest/80">
                                    A diversidade de <strong>Epífitas</strong> é deslumbrante. Bromélias, Orquídeas e Samambaias colonizam os troncos e galhos, criando verdadeiros jardins verticais que captam a umidade da neblina e oferecem micro-habitat para anfíbios e insetos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
                    <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                        <div className="reveal-img-container overflow-hidden rounded-lg shadow-lg h-48">
                            <img
                                src={imgSapo}
                                alt="Sapo Pingo-de-ouro"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="reveal-img-container overflow-hidden rounded-lg shadow-lg h-48 mt-8">
                            <img
                                src={imgCobra}
                                alt="Cobra Erythrolamprus"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="reveal-img-container overflow-hidden rounded-lg shadow-lg h-64 col-span-2 relative">
                            <img
                                src={imgPassaro}
                                alt="Ave Garibaldi"
                                className="parallax-img w-full h-[120%] object-cover -mt-8"
                            />
                        </div>
                    </div>
                    <div className="order-1 md:order-2 md:pl-8">
                        <Section title="Fauna: A Vida Secreta da Serra">
                            <h3 className="text-xl font-bold text-earth mt-4 mb-2">Grandes Mamíferos</h3>
                            <p>
                                A presença de predadores de topo como a <strong>Onça-parda</strong> e de herbívoros como o <strong>Catitu</strong> é um sinal vitalidade. Eles são bioindicadores: sua existência aqui prova que o parque mantém áreas de mata preservada suficientes para sustentar cadeias alimentares completas.
                            </p>

                            <h3 className="text-xl font-bold text-earth mt-6 mb-2">O Santuário das Aves</h3>
                            <p>
                                O céu e as copas das árvores são coloridos por aves icônicas. O voo do <strong>Gavião-pega-macaco</strong>, as cores do <strong>Surucuá-variado</strong> e da <strong>Saíra-sete-cores</strong> encantam observadores. O parque é um refúgio essencial para a avifauna da Mata Atlântica.
                            </p>

                            <h3 className="text-xl font-bold text-earth mt-6 mb-2">Anfíbios e Répteis</h3>
                            <p>
                                A umidade constante favorece uma rica herpetofauna. Pequenos anfíbios, muitos deles endêmicos, dependem exclusivamente da água acumulada nas bromélias e da umidade do solo da floresta para sobreviver e se reproduzir.
                            </p>
                        </Section>
                    </div>
                </div>

                {/* Tabela de Dados */}
                <div className="bg-forest text-off-white rounded-2xl p-8 md:p-12 mb-20 shadow-2xl section-trigger relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-earth/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <h2 className="section-title text-3xl font-display mb-8 text-center border-b border-white/20 pb-4 relative z-10">Raio-X Ecológico</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center section-text relative z-10">
                        <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                            <div className="text-earth font-bold text-lg mb-2">Clima</div>
                            <div className="text-sm md:text-lg">Tropical Úmido</div>
                        </div>
                        <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                            <div className="text-earth font-bold text-lg mb-2">Espécies</div>
                            <div className="text-4xl font-display counter" data-target="800">0</div>
                            <div className="text-xs text-white/60">Estimados</div>
                        </div>
                        <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                            <div className="text-earth font-bold text-lg mb-2">Ameaças</div>
                            <div className="text-xs md:text-sm">Caça, Palmito, Incêndio</div>
                        </div>
                        <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                            <div className="text-earth font-bold text-lg mb-2">Em Perigo</div>
                            <div className="text-xs md:text-sm">Onça-parda, Mono-carvoeiro</div>
                        </div>
                    </div>
                </div>

                {/* Conclusão e CTA */}
                <div className="text-center section-trigger max-w-3xl mx-auto">
                    <h2 className="section-title text-3xl font-display text-forest mb-6">Preservar é Conhecer</h2>
                    <div className="section-text">
                        <p className="text-lg text-forest/80 mb-8 leading-relaxed">
                            Ao visitar o Parque Estadual Cunhambebe, lembre-se da nossa regra de ouro: <strong>"observar sem tocar"</strong>. Leve apenas fotos, deixe apenas pegadas e mate apenas o tempo. Ajude-nos a proteger este tesouro natural para as futuras gerações.
                        </p>
                        <a href="/mapa" className="inline-block bg-earth hover:bg-earth/80 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg border-2 border-transparent hover:border-forest/20">
                            Explorar Mapa de Trilhas
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FaunaFlora;
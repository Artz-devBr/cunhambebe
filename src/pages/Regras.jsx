import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ShieldAlert, CheckCircle2, Trees, Leaf, Flame, Volume2, Trash2, Tent, BadgeAlert, Ban } from 'lucide-react';

const rules = [
    { icon: ShieldAlert, text: "Você é responsável pela sua segurança" },
    { icon: BadgeAlert, text: "Respeite a sinalização. Atalhos são perigosos e degradam o ambiente" },
    { icon: Trash2, text: "Leve seu lixo de volta para o seu domicílio" },
    { icon: Trash2, text: "Não abandone objetos e copos de vidro" },
    { icon: Volume2, text: "Não use aparelhos de som com volume alto" },
    { icon: Tent, text: "Não é permitido camping selvagem ou acampamentos" },
    { icon: Leaf, text: "Proibida a retirada de espécie vegetal, animal ou mineral" },
    { icon: BadgeAlert, text: "Respeite os limites de velocidade" },
    { icon: Ban, text: "Não é permitido fumar" },
    { icon: Flame, text: "Não é permitido acender fogo ou fazer fogueiras" },
    { icon: Trees, text: "Não deixe marcas em árvores e rochas" },
    { icon: Ban, text: "Está proibido pescar nesse local turístico" },
    { icon: Ban, text: "Proibido portar objetos cortantes" },
    { icon: Ban, text: "Proibida a permanência e entrada de animais domésticos" }
];

const PageTemplate = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const rulesRef = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.from(titleRef.current, {
            y: -30,
            duration: 1,
            ease: "power3.out"
        })
            .from(rulesRef.current, {
                y: 30,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.2)"
            }, "-=0.5");

    }, []);

    return (
        <div ref={containerRef} className="pt-32 min-h-screen bg-off-white px-6 pb-20">
            <div className="max-w-7xl mx-auto">
                <div ref={titleRef} className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-display text-forest uppercase tracking-tighter">
                        Normas de conduta do PEC
                    </h1>
                    <div className="w-24 h-1 bg-earth mx-auto mt-6 rounded-full"></div>
                    <p className="mt-6 text-forest/70 font-medium tracking-wide max-w-2xl mx-auto">
                        Para garantir a preservação do parque e a segurança de todos, por favor observe as seguintes regras.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rules.map((rule, index) => (
                        <div
                            key={index}
                            ref={el => rulesRef.current[index] = el}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-forest/5 hover:shadow-md transition-shadow duration-300 flex items-start gap-4"
                        >
                            <div className="p-3 bg-forest/5 rounded-xl text-forest shrink-0">
                                <rule.icon size={24} />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-earth uppercase tracking-wider mb-1 block">
                                    Regra {index + 1}
                                </span>
                                <p className="text-forest font-medium leading-relaxed">
                                    {rule.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PageTemplate;
// Workflow GIT:

// Fazer o Fork.

// Criar a branch: git checkout -b feature/pagina-regras-asaph.

// Desenvolver apenas dentro do arquivo src/pages/Regras.jsx.

// Adicionar, comitar e fazer o Push.

// Fazer o Pull Request para o repositório original.
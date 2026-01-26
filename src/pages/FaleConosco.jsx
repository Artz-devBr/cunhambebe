import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Mail, Instagram, Phone, MapPin, Clock } from 'lucide-react';

const FaleConosco = () => {
    const containerRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.from(headerRef.current.children, {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });

            // Cards animation
            gsap.from(cardsRef.current.children, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "back.out(1.7)",
                delay: 0.5
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const cardClasses = "flex items-start gap-4 group hover:bg-white/80 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-earth/20";
    const iconContainerClasses = "bg-forest/5 p-3 rounded-full text-forest transition-transform duration-300 group-hover:scale-110 group-hover:bg-forest/10";

    return (
        <div ref={containerRef} className="pt-32 min-h-screen bg-off-white px-6 pb-20">
            <div className="max-w-4xl mx-auto">
                <div ref={headerRef} className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-display text-forest uppercase tracking-tighter mb-6">
                        Fale Conosco
                    </h1>
                    <div className="w-24 h-1 bg-earth mx-auto mb-8 origin-left"></div>
                    <p className="text-lg text-forest max-w-2xl mx-auto leading-relaxed">
                        Para dúvidas, agendamentos, parcerias ou mais informações sobre o <br />
                        Parque Estadual Cunhambebe, utilize nossos canais oficiais de atendimento.
                    </p>
                </div>

                <div ref={cardsRef} className="grid md:grid-cols-2 gap-12">
                    {/* Canais Digitais */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-display text-forest uppercase tracking-wide border-b border-earth/30 pb-2">
                            Canais de Atendimento
                        </h2>

                        <div className={cardClasses}>
                            <div className={iconContainerClasses}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-forest mb-1">E-mail Institucional</h3>
                                <a href="mailto:adm.cunhambebe@gmail.com" className="text-forest hover:text-earth transition-colors tracking-wider">
                                    adm.cunhambebe@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className={cardClasses}>
                            <div className={iconContainerClasses}>
                                <Instagram size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-forest mb-1">Instagram</h3>
                                <a href="https://instagram.com/cunhambebe.rj" target="_blank" rel="noopener noreferrer" className="text-forest hover:text-earth transition-colors tracking-wider">
                                    @cunhambebe.rj
                                </a>
                            </div>
                        </div>

                        <div className={cardClasses}>
                            <div className={iconContainerClasses}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-forest mb-1">Telefone</h3>
                                <p className="text-forest tracking-wider">
                                    (21) 3789-2965
                                </p>
                                <p className="text-xs text-forest mt-1 italic">
                                    *O contato telefônico pode estar temporariamente indisponível ou desatualizado. Priorize o contato por e-mail.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Presencial */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-display text-forest uppercase tracking-wide border-b border-earth/30 pb-2">
                            Atendimento Presencial
                        </h2>

                        <div className={cardClasses}>
                            <div className={iconContainerClasses}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-forest mb-1">Endereço (Sede)</h3>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Parque+Estadual+Cunhambebe+Mangaratiba+RJ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-forest leading-relaxed tracking-wider hover:text-earth transition-colors block"
                                >
                                    Estrada da Cachoeira, s/n°<br />
                                    Rodovia Rio-Santos, Km 423<br />
                                    Vale do Sahy – Mangaratiba – RJ
                                </a>
                            </div>
                        </div>

                        <div className={cardClasses}>
                            <div className={iconContainerClasses}>
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-forest mb-1">Horário de Funcionamento</h3>
                                <p className="text-forest tracking-wider">
                                    Terça a Domingo
                                </p>
                                <p className="text-forest tracking-wider">
                                    Das 9h às 17h
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaleConosco;

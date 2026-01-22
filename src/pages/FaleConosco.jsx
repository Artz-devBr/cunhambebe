import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Mail, Instagram, Phone, MapPin, Clock } from 'lucide-react';

const FaleConosco = () => {
    const containerRef = useRef(null);

    // Configuração de espaçamento das letras dos títulos (H3)
    const H3_SPACING = "tracking-widest"; // Opções: tracking-normal, tracking-wide, tracking-wider, tracking-widest

    useEffect(() => {
        gsap.from(containerRef.current, {
            y: 30,
            duration: 1,
            ease: "power3.out"
        });
    }, []);

    return (
        <div ref={containerRef} className="pt-32 min-h-screen bg-off-white px-6 pb-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-display text-forest uppercase tracking-tighter mb-6">
                        Fale Conosco
                    </h1>
                    <div className="w-24 h-1 bg-earth mx-auto mb-8"></div>
                    <p className="text-lg text-forest max-w-2xl mx-auto leading-relaxed">
                        Para dúvidas, agendamentos, parcerias ou mais informações sobre o <br />
                        Parque Estadual Cunhambebe, utilize nossos canais oficiais de atendimento.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Canais Digitais */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-display text-forest uppercase tracking-wide border-b border-earth/30 pb-2">
                            Canais de Atendimento
                        </h2>

                        <div className="flex items-start gap-4 group hover:bg-white/50 p-4 rounded-lg transition-all duration-300">
                            <div className="bg-forest/10 p-3 rounded-full text-forest transition-colors duration-300">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className={`font-bold text-forest mb-1 ${H3_SPACING}`}>E-mail Institucional</h3>
                                <a href="mailto:adm.cunhambebe@gmail.com" className="text-forest hover:text-earth transition-colors tracking-wider">
                                    adm.cunhambebe@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group hover:bg-white/50 p-4 rounded-lg transition-all duration-300">
                            <div className="bg-forest/10 p-3 rounded-full text-forest transition-colors duration-300">
                                <Instagram size={24} />
                            </div>
                            <div>
                                <h3 className={`font-bold text-forest mb-1 ${H3_SPACING}`}>Instagram</h3>
                                <a href="https://instagram.com/cunhambebe.rj" target="_blank" rel="noopener noreferrer" className="text-forest hover:text-earth transition-colors tracking-wider">
                                    @cunhambebe.rj
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group hover:bg-white/50 p-4 rounded-lg transition-all duration-300">
                            <div className="bg-forest/10 p-3 rounded-full text-forest transition-colors duration-300">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className={`font-bold text-forest mb-1 ${H3_SPACING}`}>Telefone</h3>
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

                        <div className="flex items-start gap-4 group hover:bg-white/50 p-4 rounded-lg transition-all duration-300">
                            <div className="bg-forest/10 p-3 rounded-full text-forest transition-colors duration-300">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className={`font-bold text-forest mb-1 ${H3_SPACING}`}>Endereço (Sede)</h3>
                                <p className="text-forest leading-relaxed tracking-wider">
                                    Estrada da Cachoeira, s/n°<br />
                                    Rodovia Rio-Santos, Km 423<br />
                                    Vale do Sahy – Mangaratiba – RJ
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group hover:bg-white/50 p-4 rounded-lg transition-all duration-300">
                            <div className="bg-forest/10 p-3 rounded-full text-forest transition-colors duration-300">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className={`font-bold text-forest mb-1 ${H3_SPACING}`}>Horário de Funcionamento</h3>
                                <p className="text-forest tracking-wider">
                                    Terça à Domingo
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

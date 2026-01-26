import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Calendar, MapPin, Clock, Info, ArrowRight, TreePine, Ticket, Camera, Users, AlertCircle, CheckCircle2 } from 'lucide-react';

import veiospassaros1 from '../assets/veiospassaros1.jpeg';
import veiospassaros2 from '../assets/veiospassaros2.jpeg';
import veiospassaros3 from '../assets/veiospassaros3.jpeg';

const featuredEvents = [
    {
        id: 1,
        title: "Vem Passarinhar",
        date: "Domingos",
        location: "Trilhas da Mata Alta",
        image: veiospassaros1,
        gallery: [veiospassaros1, veiospassaros2, veiospassaros3],
        category: "Caminhada Ecológica",
        description: "Caminhadas guiadas focadas em educação ambiental e conservação. Aprenda sobre a avifauna local enquanto percorre nossas trilhas preservadas.",
        highlight: false
    },
    {
        id: 2,
        title: "Atividades Comunitárias",
        date: "Mensal",
        location: "Área de Convivência",
        image: "",
        category: "Cultura e Lazer",
        description: "Feiras de artesanato, rodas de conversa e oficinas que integram a população e valorizam a cultura local em meio à natureza.",
        highlight: false
    }
];

const calendarEvents = [
    { month: "Junho", day: "10", title: "Oficina de Plantio de Mudas", time: "09:00 - 12:00", type: "Educação" },
    { month: "Junho", day: "24", title: "Caminhada da Lua Cheia", time: "18:30 - 21:00", type: "Aventura" },
    { month: "Julho", day: "08", title: "Feira de Orgânicos Local", time: "08:00 - 14:00", type: "Comunidade" },
    { month: "Julho", day: "15", title: "Workshop: Fauna da Mata Atlântica", time: "14:00 - 16:30", type: "Cultura" },
];

//const galleryImages = [
//  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//"https://images.unsplash.com/photo-1596701764676-e10f631dfb8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//"https://images.unsplash.com/photo-1533240332313-0db49b459ad6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//"https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
//];

const Eventos = () => {
    const headerRef = useRef(null);
    const featuredRef = useRef(null);
    const calendarRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.from(headerRef.current, {
            y: 50,
            duration: 1,
            ease: "power3.out"
        })
            .from(featuredRef.current.children, {
                y: 30,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: featuredRef.current,
                    start: "top 80%"
                }
            });

    }, []);

    return (
        <div className="min-h-screen bg-stone-50 text-forest pt-24 pb-20 font-sans">
            {/* Hero Section */}
            <header ref={headerRef} className="container mx-auto px-6 mb-24 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-6 ring-1 ring-green-200">
                    <TreePine className="w-5 h-5 text-green-700 mr-2" />
                    <span className="text-sm font-bold tracking-wide text-green-800 uppercase">Eventos no Parque</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tight mb-8 text-forest-dark leading-tight">
                    Experiências únicas <br /> em meio à <span className="text-green-700 italic font-serif">natureza</span>
                </h1>
                <p className="text-xl text-forest/70 max-w-2xl mx-auto font-light leading-relaxed">
                    Descubra nossa programação de lazer, cultura e aventura. Conecte-se com o ambiente natural do Parque Cunhambebe.
                </p>
            </header>

            {/* Featured Events */}
            <section className="container mx-auto px-6 mb-32">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b border-forest/10 pb-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display uppercase tracking-wide text-forest-dark mb-2">Eventos em Destaque</h2>
                        <p className="text-forest/60">As principais atividades da temporada.</p>
                    </div>
                </div>

                <div ref={featuredRef} className="grid lg:grid-cols-3 gap-8">
                    {featuredEvents.map((event) => (
                        <div key={event.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-forest flex items-center shadow-sm">
                                    {event.category}
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center text-sm font-semibold text-green-700 mb-4">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {event.date}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-forest-dark group-hover:text-green-700 transition-colors">{event.title}</h3>
                                <p className="text-forest/70 mb-8 leading-relaxed flex-1">{event.description}</p>

                                {event.gallery && (
                                    <div className="flex gap-2 mb-6">
                                        {event.gallery.map((img, i) => (
                                            <div key={i} className="w-16 h-16 rounded-lg overflow-hidden border border-stone-200">
                                                <img src={img} alt={`Galeria ${i}`} className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <button className="w-full py-4 rounded-xl border-2 border-forest/10 font-bold text-forest hover:bg-forest hover:text-white hover:border-forest transition-all flex items-center justify-center group-hover:shadow-lg">
                                    Saiba Mais <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center md:hidden">
                    <button className="inline-flex items-center text-green-700 font-semibold hover:text-green-900 transition-colors">
                        Ver calendário completo <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </section>

            {/* Calendar & Participation Grid */}
            <section className="bg-white py-24 mb-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-16">
                        {/* Calendar List */}
                        <div className="lg:col-span-7" ref={calendarRef}>
                            <h2 className="text-3xl font-display uppercase tracking-wide mb-10 flex items-center">
                                <Calendar className="w-8 h-8 mr-3 text-green-700" />
                                Próximas Datas
                            </h2>
                            <div className="space-y-4">
                                {calendarEvents.map((evt, idx) => (
                                    <div key={idx} className="flex items-center p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:border-green-200 transition-colors duration-300">
                                        <div className="flex-shrink-0 w-20 text-center border-r-2 border-stone-200 pr-6 mr-6">
                                            <span className="block text-sm font-bold text-green-700 uppercase">{evt.month}</span>
                                            <span className="block text-3xl font-display text-forest-dark">{evt.day}</span>
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="text-lg font-bold text-forest-dark mb-1">{evt.title}</h4>
                                            <div className="flex items-center text-sm text-forest/60 space-x-4">
                                                <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {evt.time}</span>
                                                <span className="inline-block px-2 py-0.5 rounded bg-stone-200 text-xs font-semibold">{evt.type}</span>
                                            </div>
                                        </div>
                                        <button className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-forest hover:bg-green-600 hover:text-white hover:border-green-600 transition-all">
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <button className="mt-8 text-green-700 font-bold hover:text-green-900 transition-colors flex items-center">
                                Ver calendário completo do ano <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>

                        {/* How to Participate */}
                        <div className="lg:col-span-5 relative">
                            <div className="bg-forest text-white p-10 rounded-3xl relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                                <h3 className="text-2xl font-display uppercase mb-8 relative z-10 flex items-center">
                                    <Ticket className="w-6 h-6 mr-3 text-green-300" />
                                    Como Participar
                                </h3>

                                <ul className="space-y-8 relative z-10">
                                    <li className="flex">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-700/50 flex items-center justify-center font-bold mr-4 border border-green-500/30">1</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Escolha seu evento</h4>
                                            <p className="text-green-100/70 text-sm">Consulte nosso calendário e veja quais atividades exigem inscrição prévia.</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-700/50 flex items-center justify-center font-bold mr-4 border border-green-500/30">2</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Inscreva-se</h4>
                                            <p className="text-green-100/70 text-sm">Para atividades limitadas, envie um WhatsApp ou e-mail para reservar sua vaga.</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-700/50 flex items-center justify-center font-bold mr-4 border border-green-500/30">3</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">No dia do evento</h4>
                                            <p className="text-green-100/70 text-sm">Use roupas confortáveis, traga água e repelente. Chegue 15min antes ao Ponto de Encontro.</p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="mt-10 pt-8 border-t border-green-700/50">
                                    <p className="text-sm font-semibold text-green-200 mb-2">Dúvidas?</p>
                                    <a href="#" className="flex items-center text-lg font-bold hover:text-green-300 transition-colors">
                                        (21) 99999-9999 <ArrowRight className="w-4 h-4 ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Useful Info */}
            <section className="bg-stone-100 py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-center mb-10">
                            <Info className="w-6 h-6 text-green-700 mr-2" />
                            <h2 className="text-2xl font-bold uppercase tracking-wide text-center">Informações Úteis</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm">
                                <div className="flex items-center mb-4 text-green-700">
                                    <AlertCircle className="w-5 h-5 mr-2" />
                                    <h3 className="font-bold text-lg">Regras Gerais</h3>
                                </div>
                                <ul className="space-y-3 text-forest/70 text-sm">
                                    <li className="flex items-start"><span className="mr-2">•</span> Não alimente os animais silvestres.</li>
                                    <li className="flex items-start"><span className="mr-2">•</span> Descarte seu lixo nas lixeiras seletivas.</li>
                                    <li className="flex items-start"><span className="mr-2">•</span> Proibido som alto e fogueiras.</li>
                                    <li className="flex items-start"><span className="mr-2">•</span> Respeite os limites das trilhas.</li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm">
                                <div className="flex items-center mb-4 text-green-700">
                                    <Users className="w-5 h-5 mr-2" />
                                    <h3 className="font-bold text-lg">Acessibilidade</h3>
                                </div>
                                <p className="text-forest/70 text-sm mb-4">
                                    O Centro de Visitantes e a Trilha dos Sentidos são adaptados para cadeirantes e pessoas com mobilidade reduzida.
                                </p>
                                <div className="flex items-center text-sm font-bold text-forest/80">
                                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" /> Banheiros Adaptados
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Eventos;
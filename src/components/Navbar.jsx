import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const navRef = useRef(null);
    const dropdownRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: "Dicas de Preservação", path: "/preservacao" },
        { name: "Pontos Turísticos", path: "/pontos-turisticos" },
        { name: "Curiosidades", path: "/curiosidades" },
        { name: "Eventos", path: "/eventos" },
        { name: "Fauna e Flora", path: "/fauna-flora" },
        { name: "Nosso Trabalho", path: "/nosso-trabalho" },
        { name: "Trilhas", path: "/trilhas" },
        { name: "Cachoeiras", path: "/cachoeiras" },
        { name: "Parceiros", path: "/parceiros" },
        { name: "Fale Conosco", path: "/fale-conosco" },
        { name: "Denuncie", path: "/denuncie" },
        { name: "Mapa", path: "/mapa" },
        { name: "Regras de Visitação", path: "/regras" },
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(navRef.current, {
                backgroundColor: 'rgba(248, 250, 252, 0.8)', // off-white with opacity
                color: '#0f281e', // forest color
                backdropFilter: 'blur(16px)',
                scrollTrigger: {
                    trigger: document.documentElement, // Trigger based on scroll
                    start: 'top -10',
                    end: 'top -20',
                    scrub: true,
                },
            });
        }, navRef);
        return () => ctx.revert();
    }, []);

    const showDropdown = () => {
        gsap.to(dropdownRef.current, { display: 'block', opacity: 1, y: 0, duration: 0.3 });
    };

    const hideDropdown = () => {
        gsap.to(dropdownRef.current, { display: 'none', opacity: 0, y: -10, duration: 0.2 });
    };

    return (
        <>
            <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-forest/95 text-white duration-300 backdrop-blur-sm shadow-xl">
                <Link to="/" className="flex items-center gap-3 font-display text-2xl tracking-wide z-[60]">
                    <img src="/logo.png" alt="Logo Cunhambebe" className="h-10 w-auto object-contain" />
                    CUNHAMBEBE
                </Link>

                <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest items-center">
                    <Link to="/" className="hover:text-earth transition-colors">Início</Link>

                    {/* Dropdown Menu */}
                    <div className="relative group py-2" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                        <button className="flex items-center gap-1 hover:text-earth transition-colors uppercase">
                            O que oferecemos <ChevronDown size={14} />
                        </button>
                        <div ref={dropdownRef} className="absolute top-full left-0 hidden opacity-0 bg-off-white shadow-2xl rounded-md py-2 w-64 border border-forest/10 translate-y-[-10px]">
                            {menuItems.map((item) => (
                                <Link key={item.path} to={item.path} className="block px-4 py-2 text-xs text-forest hover:bg-forest hover:text-white transition-colors">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden flex items-center pr-2 z-[110]">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`p-2 transition-colors duration-300 ${isMenuOpen ? 'text-white' : ''}`}
                        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    >
                        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Outside nav to avoid GSAP inheritance */}
            <div
                className={`fixed inset-0 bg-forest flex flex-col items-center justify-center transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'}`}
                style={{ zIndex: 100 }}
            >
                <div className="flex flex-col items-center space-y-6 w-full max-h-[80vh] overflow-y-auto pt-24 pb-12">
                    <Link
                        to="/"
                        className="text-3xl text-white font-display hover:text-earth transition-colors mb-4 block"
                        onClick={() => setIsMenuOpen(false)}
                        style={{ color: 'white' }}
                    >
                        INÍCIO
                    </Link>

                    <div className="w-12 h-px bg-earth/30 my-4"></div>

                    <p className="text-earth text-[10px] font-bold tracking-[0.3em] uppercase mb-2 opacity-60">O QUE OFERECEMOS</p>

                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="text-xl text-white hover:text-earth transition-colors py-3 px-8 w-full text-center block"
                            onClick={() => setIsMenuOpen(false)}
                            style={{ color: 'white' }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
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
                backgroundColor: 'rgba(248, 250, 252, 1)',
                backdropFilter: 'blur(16px)',
                scrollTrigger: {
                    start: 'top top',
                    end: '+=50',
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
        <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-off-white backdrop-blur-sm border-b border-transparent transition-colors duration-300">
            <Link to="/" className="text-forest font-display text-2xl tracking-tighter">CUNHAMBEBE</Link>

            <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-forest items-center">
                <Link to="/" className="hover:text-earth transition-colors">Início</Link>

                {/* Dropdown Menu */}
                <div className="relative group py-2" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                    <button className="flex items-center gap-1 hover:text-earth transition-colors uppercase">
                        O que oferecemos <ChevronDown size={14} />
                    </button>
                    <div ref={dropdownRef} className="absolute top-full left-0 hidden opacity-0 bg-off-white shadow-2xl rounded-md py-2 w-64 border border-forest/10 translate-y-[-10px]">
                        {menuItems.map((item) => (
                            <Link key={item.path} to={item.path} className="block px-4 py-2 text-xs hover:bg-forest hover:text-white transition-colors">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <button className="md:hidden text-forest" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </nav>
    );
};

export default Navbar;
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PageTemplate = ({ title }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.from(containerRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out"
        });
    }, []);

    return (
        <div ref={containerRef} className="pt-32 min-h-screen flex items-center justify-center bg-off-white px-6">
            <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-display text-forest uppercase tracking-tighter">
                    {title}
                </h1>
                <div className="w-24 h-1 bg-earth mx-auto mt-6"></div>
                <p className="mt-8 text-forest/60 font-medium tracking-widest uppercase text-sm">
                    Página Nosso Trabalho em Desenvolvimento
                </p>
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
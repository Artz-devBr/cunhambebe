import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import logoVale from '/src/assets/logos/vale.svg';
import logoInea from '/src/assets/logos/inea.svg';
import logoGoverno from '/src/assets/logos/governo-rj.png';
import logoCcr from '/src/assets/logos/ccr-riosp.png';
import logoTranspetro from '/src/assets/logos/transpetro.png';
import logoUFRRJ from '/src/assets/logos/ufrrj.png';
import logoUERJ from '/src/assets/logos/uerj.png';
import logoJardimBotanico from '/src/assets/logos/jardim-botanico.png';
import logoCONPEC from '/src/assets/logos/conpec.png';
import logoGuias from '/src/assets/logos/guias.png';



const partnersData = [
    // Gestão Institucional
    {
        id: 'inea',
        name: 'INEA',
        category: 'Gestão Institucional',
        description: 'Gestão, fiscalização e administração direta da unidade.',
        logoUrl: logoInea
    },
    {
        id: 'gov-rj',
        name: 'Governo do Estado RJ',
        category: 'Gestão Institucional',
        description: 'Apoio institucional e suporte governamental.',
        logoUrl: logoGoverno
    },
    // Iniciativa Privada
    {
        id: 'vale',
        name: 'Vale',
        category: 'Iniciativa Privada',
        description: 'Investimento em infraestrutura, brigadas e educação ambiental.',
        logoUrl: logoVale
    },
    {
        id: 'ccr',
        name: 'CCR RioSP',
        category: 'Iniciativa Privada',
        description: 'Mitigação ambiental e monitoramento de fauna na BR-101.',
        logoUrl: logoCcr
    },
    {
        id: 'transpetro',
        name: 'Transpetro',
        category: 'Iniciativa Privada',
        description: 'Apoio socioambiental e projetos educativos.',
        logoUrl: logoTranspetro
    },
    // Pesquisa e Educação
    {
        id: 'ufrrj',
        name: 'UFRRJ',
        category: 'Pesquisa e Educação',
        description: 'Pesquisas científicas e monitoramento da biodiversidade.',
        logoUrl: logoUFRRJ
    },
    {
        id: 'uerj',
        name: 'UERJ',
        category: 'Pesquisa e Educação',
        description: 'Estudos sobre recursos hídricos e geologia.',
        logoUrl: logoUERJ
    },
    {
        id: 'jbrj',
        name: 'Jardim Botânico do Rio',
        category: 'Pesquisa e Educação',
        description: 'Parceria focada em reflorestamento e flora.',
        logoUrl: logoJardimBotanico
    },
    // Sociedade e Comunidade
    {
        id: 'conpec',
        name: 'CONPEC',
        category: 'Sociedade e Comunidade',
        description: 'Fórum de governança e participação da sociedade civil.',
        logoUrl: logoCONPEC
    },
    {
        id: 'local-guides',
        name: 'Associações de Guias',
        category: 'Sociedade e Comunidade',
        description: 'Parceria com guias locais para turismo sustentável.',
        logoUrl: logoGuias
    }
];

const PartnerCard = ({ partner }) => {
    return (
        <div className="relative group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 w-full h-48 flex items-center justify-center p-6 overflow-hidden">
            {/* Logo Container */}
            <div className="w-full h-full flex items-center justify-center transition-opacity duration-300 group-hover:opacity-10">
                <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="h-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 text-center">
                <h3 className="text-forest font-bold text-lg mb-2">{partner.name}</h3>
                <p className="text-forest/80 text-sm leading-relaxed">
                    {partner.description}
                </p>
            </div>
        </div>
    );
};

const CarouselSection = ({ title, partners }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 320;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-full mb-16">
            <h2 className="text-3xl font-medium text-forest mb-8 pl-2 border-l-4 border-forest">{title}</h2>

            <div className="relative group/carousel">
                {/* Navigation Arrows */}
                <button
                    onClick={() => scroll('left')}
                    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 text-forest hover:bg-forest hover:text-off-white transition-all opacity-0 group-hover/carousel:opacity-100"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 text-forest hover:bg-forest hover:text-off-white transition-all opacity-0 group-hover/carousel:opacity-100"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x px-2"
                >
                    {partners.map(partner => (
                        <div key={partner.id} className="min-w-[280px] w-[280px] md:min-w-[320px] md:w-[320px] snap-center flex-shrink-0">
                            <PartnerCard partner={partner} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ManagementSection = ({ partners }) => {
    return (
        <div className="mb-20">
            <h2 className="text-4xl md:text-5xl text-forest text-center mb-12">Gestão Institucional</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {partners.map(partner => (
                    <div key={partner.id} className="relative group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-10 flex items-center justify-center h-64 border-t-8 border-forest">
                        <img
                            src={partner.logoUrl}
                            alt={partner.name}
                            className="h-32 object-contain"
                        />
                        <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                            <div className="text-center p-8">
                                <h3 className="text-2xl font-bold text-forest mb-3">{partner.name}</h3>
                                <p className="text-forest/80 text-lg leading-relaxed">{partner.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Parceiros = () => {
    const managementParams = partnersData.filter(p => p.category === 'Gestão Institucional');
    const privateParams = partnersData.filter(p => p.category === 'Iniciativa Privada');
    const researchParams = partnersData.filter(p => p.category === 'Pesquisa e Educação');
    const communityParams = partnersData.filter(p => p.category === 'Sociedade e Comunidade');

    return (
        <div className="min-h-screen bg-off-white pt-32 pb-24">
            {/* Header / Hero */}
            <div className="container mx-auto px-6 mb-20 text-center">
                <h1 className="text-5xl md:text-7xl text-forest mb-6 tracking-tight">
                    Nossos Parceiros
                </h1>
                <p className="max-w-3xl mx-auto text-xl text-forest/80 leading-relaxed font-light">
                    A conservação do Parque Estadual Cunhambebe é fortalecida pela união de esforços.
                    Conheça as instituições que caminham conosco nessa jornada de preservação.
                </p>
            </div>

            <div className="container mx-auto px-6 max-w-7xl">
                {/* Gestão Institucional - Grid */}
                <ManagementSection partners={managementParams} />

                {/* Other Categories - Carousels */}
                <div className="space-y-4">
                    <CarouselSection title="Iniciativa Privada" partners={privateParams} />
                    <CarouselSection title="Pesquisa e Educação" partners={researchParams} />
                    <CarouselSection title="Sociedade e Comunidade" partners={communityParams} />
                </div>
            </div>
        </div>
    );
};

export default Parceiros;

// Workflow GIT:

// Fazer o Fork.

// Criar a branch: git checkout -b feature/pagina-parceiros-guilhermeoa.

// Desenvolver apenas dentro do arquivo src/pages/Parceiros.jsx.

// Adicionar, comitar e fazer o Push.

// Fazer o Pull Request para o repositório original.
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Upload, CheckCircle, AlertCircle, Loader2, Phone, Clock } from 'lucide-react';
import bannerImg from '../assets/denuncie_jonny/mata-atlantica.jpg';

const Denuncie = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const formRef = useRef(null);
    const faunaFieldsRef = useRef(null);
    
    // States
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        contato: '',
        categoria: '',
        // Fauna specific
        especie: '',
        quantidade: '',
        // Suspect info
        suspeito: '',
        armas: false,
        // General
        data: '',
        hora: '',
        localizacao: '',
        descricao: '',
        evidencias: null
    });
    const [errors, setErrors] = useState({});

    const isFaunaCategory = ['caca_pesca', 'comercio_ilegal'].includes(formData.categoria);

    // Animation with gsap.context
    useEffect(() => {
        let ctx = gsap.context(() => {
            // Hero Animations
            gsap.fromTo(".hero-img", 
                { scale: 1.05, filter: "blur(5px)" },
                { scale: 1, filter: "blur(0px)", duration: 2, ease: "power2.out" }
            );

            gsap.to(".hero-img", {
                scale: 1.05,
                duration: 20,
                ease: "none",
                repeat: -1,
                yoyo: true,
                delay: 2 // Start slow zoom after initial focus
            });
            
            gsap.from(heroRef.current, {
                opacity: 0,
                y: -20,
                duration: 1.2,
                ease: "power2.out"
            });

            gsap.from(".hero-text", {
                y: 30,
                opacity: 0,
                duration: 1,
                delay: 0.5,
                ease: "power3.out"
            });
            
            gsap.from(".anim-form", {
                y: 30,
                opacity: 0,
                duration: 1,
                delay: 0.8,
                ease: "power3.out"
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Fauna fields animation
    useEffect(() => {
        if (isFaunaCategory) {
            gsap.fromTo(faunaFieldsRef.current, 
                { height: 0, opacity: 0 },
                { height: 'auto', opacity: 1, duration: 0.4, ease: "power2.out" }
            );
        }
    }, [isFaunaCategory]);

    const handleChange = (e) => {
        const { name, value, files, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value
        }));
        
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const validate = () => {
        const newErrors = {};
        
        if (!isAnonymous) {
            if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório.";
            if (!formData.contato.trim()) newErrors.contato = "Contato é obrigatório.";
        }

        if (!formData.categoria) newErrors.categoria = "Selecione uma categoria.";
        
        // Conditional validation for Fauna
        if (isFaunaCategory) {
             if (!formData.especie.trim()) newErrors.especie = "Espécie é obrigatória.";
             if (!formData.quantidade.trim()) newErrors.quantidade = "Informe a quantidade.";
        }

        if (!formData.localizacao.trim()) newErrors.localizacao = "Localização é obrigatória.";
        if (!formData.descricao.trim()) newErrors.descricao = "Descrição é obrigatória.";
        else if (formData.descricao.length < 20) newErrors.descricao = "Mínimo de 20 caracteres.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validate()) return;

        setIsSubmitting(true);

        // Simulation of API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({
                nome: '',
                contato: '',
                categoria: '',
                especie: '',
                quantidade: '',
                suspeito: '',
                armas: false,
                data: '',
                hora: '',
                localizacao: '',
                descricao: '',
                evidencias: null
            });
            
        }, 2000);
    };

    if (isSuccess) {
        return (
            <div className="pt-32 min-h-screen flex items-center justify-center bg-off-white px-6">
                <div className="text-center bg-white p-12 rounded-xl shadow-lg border border-earth/20 max-w-lg w-full anim-success">
                    <div className="flex justify-center mb-6">
                        <CheckCircle className="w-20 h-20 text-green-600" />
                    </div>
                    <h2 className="text-4xl font-display text-forest uppercase mb-4">Denúncia Recebida</h2>
                    <p className="text-forest/80 mb-8">
                        Agradecemos sua colaboração. Sua denúncia foi registrada com sucesso e nossa equipe irá analisar as informações.
                        {isAnonymous && <span className="block mt-2 font-semibold">Sua identidade foi mantida anônima.</span>}
                    </p>
                    <button 
                        onClick={() => setIsSuccess(false)}
                        className="bg-forest text-white px-8 py-3 rounded hover:bg-forest/90 transition-colors uppercase tracking-widest text-sm font-bold"
                    >
                        Nova Denúncia
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="min-h-screen bg-off-white pb-20">
            
            {/* Hero Header */}
            <div ref={heroRef} className="relative h-96 w-full overflow-hidden mb-12 shadow-xl bg-forest">
                {/* Overlays */}
                <div className="absolute inset-0 bg-forest/40 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-off-white z-10 opacity-80"></div>
                
                <img 
                    src={bannerImg} 
                    alt="Mata Atlântica" 
                    className="hero-img w-full h-full object-cover opacity-90"
                />
                
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 hero-text">
                    <h1 className="text-5xl md:text-7xl font-display text-white uppercase tracking-tighter drop-shadow-lg">
                        Canal de Denúncias
                    </h1>
                    <div className="w-24 h-1 bg-earth mx-auto mt-6 shadow-sm"></div>
                    <p className="mt-6 text-white/90 font-medium max-w-xl mx-auto drop-shadow-md text-lg tracking-wide">
                        Ajude a preservar o Parque Estadual Cunhambebe. Garantimos sigilo absoluto.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6">
                
                {/* Form Card */}
                <div ref={formRef} className="bg-white p-6 md:p-10 rounded-xl shadow-lg border border-earth/10 anim-form mb-12 relative z-30 -mt-20">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        
                        {/* Toggle Anonymous */}
                        <div className="flex items-center justify-between p-4 bg-off-white rounded-lg border border-earth/20">
                            <div>
                                <h3 className="text-forest font-bold uppercase tracking-wide">Denúncia Anônima</h3>
                                <p className="text-sm text-forest/60">Ocultar meus dados pessoais</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    checked={isAnonymous}
                                    onChange={(e) => setIsAnonymous(e.target.checked)}
                                    className="sr-only peer" 
                                />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-earth"></div>
                            </label>
                        </div>

                        {/* Personal Info Group */}
                        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300 ${isAnonymous ? 'opacity-50 pointer-events-none hidden' : 'opacity-100'}`}>
                            <div>
                                <label className="block text-forest text-sm font-bold uppercase mb-2">Nome Completo</label>
                                <input 
                                    type="text" 
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    className={`w-full bg-off-white border ${errors.nome ? 'border-red-500' : 'border-earth/20'} rounded p-3 focus:outline-none focus:border-forest transition-colors`}
                                    placeholder="Seu nome"
                                />
                                {errors.nome && <span className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.nome}</span>}
                            </div>
                            <div>
                                <label className="block text-forest text-sm font-bold uppercase mb-2">E-mail ou Telefone</label>
                                <input 
                                    type="text" 
                                    name="contato"
                                    value={formData.contato}
                                    onChange={handleChange}
                                    className={`w-full bg-off-white border ${errors.contato ? 'border-red-500' : 'border-earth/20'} rounded p-3 focus:outline-none focus:border-forest transition-colors`}
                                    placeholder="seu@email.com ou (00) 00000-0000"
                                />
                                {errors.contato && <span className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.contato}</span>}
                            </div>
                        </div>

                        <div className="h-px bg-earth/20 w-full my-6"></div>

                        {/* Incident Details Group */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-forest text-sm font-bold uppercase mb-2">Categoria da Ocorrência *</label>
                                <select 
                                    name="categoria"
                                    value={formData.categoria}
                                    onChange={handleChange}
                                    className={`w-full bg-off-white border ${errors.categoria ? 'border-red-500' : 'border-earth/20'} rounded p-3 focus:outline-none focus:border-forest transition-colors`}
                                >
                                    <option value="">Selecione uma opção</option>
                                    <option value="desmatamento">Desmatamento</option>
                                    <option value="caca_pesca">Caça ou Pesca Ilegal</option>
                                    <option value="comercio_ilegal">Comércio Ilegal de Animais</option>
                                    <option value="incendio">Incêndio</option>
                                    <option value="construcao">Construção Irregular</option>
                                    <option value="poluicao">Poluição Hídrica / Lixo</option>
                                    <option value="outros">Outros</option>
                                </select>
                                {errors.categoria && <span className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.categoria}</span>}
                            </div>

                            {/* Conditional Fauna Fields */}
                            {isFaunaCategory && (
                                <div ref={faunaFieldsRef} className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
                                     <div>
                                        <label className="block text-forest text-sm font-bold uppercase mb-2">Espécie do Animal *</label>
                                        <input 
                                            type="text" 
                                            name="especie"
                                            value={formData.especie}
                                            onChange={handleChange}
                                            className={`w-full bg-off-white border ${errors.especie ? 'border-red-500' : 'border-earth/20'} rounded p-3 focus:outline-none focus:border-forest transition-colors`}
                                            placeholder="Ex: Pássaro, Capivara..."
                                        />
                                        {errors.especie && <span className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.especie}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-forest text-sm font-bold uppercase mb-2">Tamanho / Quantidade *</label>
                                        <input 
                                            type="text" 
                                            name="quantidade"
                                            value={formData.quantidade}
                                            onChange={handleChange}
                                            className={`w-full bg-off-white border ${errors.quantidade ? 'border-red-500' : 'border-earth/20'} rounded p-3 focus:outline-none focus:border-forest transition-colors`}
                                            placeholder="Ex: 2 gaiolas, 1 animal grande..."
                                        />
                                        {errors.quantidade && <span className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.quantidade}</span>}
                                    </div>
                                </div>
                            )}

                            {/* Suspect & Weapons */}
                            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                                <div>
                                    <label className="block text-forest text-sm font-bold uppercase mb-2">Nome ou Apelido do Suspeito <span className="text-xs font-normal opacity-60">(Opcional)</span></label>
                                    <input 
                                        type="text" 
                                        name="suspeito"
                                        value={formData.suspeito}
                                        onChange={handleChange}
                                        className="w-full bg-off-white border border-earth/20 rounded p-3 focus:outline-none focus:border-forest transition-colors"
                                        placeholder="Se souber, informe quem cometeu"
                                    />
                                </div>
                                <div className="mt-8 flex items-center gap-3">
                                    <input 
                                        type="checkbox" 
                                        name="armas"
                                        id="armas"
                                        checked={formData.armas}
                                        onChange={handleChange}
                                        className="w-5 h-5 accent-earth cursor-pointer"
                                    />
                                    <label htmlFor="armas" className="text-forest text-sm font-bold uppercase cursor-pointer select-none">
                                        Houve avistamento ou uso de arma de fogo?
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-forest text-sm font-bold uppercase mb-2">Data Aproximada</label>
                                <input 
                                    type="date" 
                                    name="data"
                                    value={formData.data}
                                    onChange={handleChange}
                                    className="w-full bg-off-white border border-earth/20 rounded p-3 focus:outline-none focus:border-forest transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-forest text-sm font-bold uppercase mb-2">Hora Aproximada</label>
                                <input 
                                    type="time" 
                                    name="hora"
                                    value={formData.hora}
                                    onChange={handleChange}
                                    className="w-full bg-off-white border border-earth/20 rounded p-3 focus:outline-none focus:border-forest transition-colors"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-forest text-sm font-bold uppercase mb-2">Localização *</label>
                                <input 
                                    type="text" 
                                    name="localizacao"
                                    value={formData.localizacao}
                                    onChange={handleChange}
                                    className={`w-full bg-off-white border ${errors.localizacao ? 'border-red-500' : 'border-earth/20'} rounded p-3 focus:outline-none focus:border-forest transition-colors`}
                                    placeholder="Ponto de referência, trilha próxima ou coordenadas"
                                />
                                {errors.localizacao && <span className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.localizacao}</span>}
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-forest text-sm font-bold uppercase mb-2">Descrição Detalhada *</label>
                                <textarea 
                                    name="descricao"
                                    value={formData.descricao}
                                    onChange={handleChange}
                                    rows="4"
                                    className={`w-full bg-off-white border ${errors.descricao ? 'border-red-500' : 'border-earth/20'} rounded p-3 focus:outline-none focus:border-forest transition-colors`}
                                    placeholder="Descreva o que você presenciou com o máximo de detalhes possível..."
                                ></textarea>
                                {errors.descricao ? (
                                    <span className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.descricao}</span>
                                ) : (
                                    <span className="text-forest/40 text-xs mt-1 text-right block">{formData.descricao.length} / 20 min</span>
                                )}
                            </div>
                        </div>

                        {/* File Upload */}
                        <div className="p-6 border-2 border-dashed border-earth/30 rounded-lg hover:bg-off-white transition-colors text-center cursor-pointer relative">
                            <input 
                                type="file" 
                                name="evidencias"
                                onChange={handleChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                accept="image/*,video/*"
                            />
                            <div className="flex flex-col items-center gap-2 pointer-events-none">
                                <Upload className="w-8 h-8 text-earth" />
                                <span className="text-forest font-medium uppercase text-sm">
                                    {formData.evidencias ? formData.evidencias.name : "Clique para enviar fotos ou vídeos"}
                                </span>
                                <span className="text-xs text-forest/50">Formatos aceitos: JPG, PNG, MP4 (Máx 10MB)</span>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={`w-full py-4 rounded font-display tracking-widest uppercase text-xl transition-all flex items-center justify-center gap-2
                                ${isSubmitting 
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                                    : 'bg-forest text-white hover:bg-forest/90 shadow-lg hover:shadow-xl'
                                }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin" /> Enviando...
                                </>
                            ) : (
                                'Enviar Denúncia'
                            )}
                        </button>

                    </form>
                </div>

                {/* INEA Contact Block */}
                <div className="max-w-2xl mx-auto border-t border-earth/20 pt-10 pb-10 text-center">
                    <div className="bg-white border-l-4 border-earth p-6 rounded-r-lg shadow-sm inline-block w-full md:w-auto text-left">
                        <div className="flex items-center gap-4">
                            <div className="bg-forest/10 p-3 rounded-full">
                                <Phone className="w-8 h-8 text-forest" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-forest/60 uppercase tracking-widest mb-1">Denúncia via Telefone (INEA)</h3>
                                <p className="text-2xl md:text-3xl font-bold text-forest tracking-tight">(021) 2334-5974</p>
                                <div className="flex items-center gap-2 text-forest/70 text-sm font-medium mt-1">
                                    <Clock className="w-4 h-4" />
                                    <span>Seg a Sex, 10h às 17h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Denuncie;

// Workflow GIT:

// Fazer o Fork.

// Criar a branch: git checkout -b feature/pagina-denuncie-jonny.

// Desenvolver apenas dentro do arquivo src/pages/Denuncie.jsx.

// Adicionar, comitar e fazer o Push.

// Fazer o Pull Request para o repositório original.
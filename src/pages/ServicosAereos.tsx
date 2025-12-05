import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, Video, Map, Share2, Trophy, Zap, Users, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

function ServicosAereos() {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <Link to="/" className="inline-flex items-center text-gray-300 hover:text-accent transition-colors mb-12 font-display uppercase tracking-wider font-bold">
                    <ArrowLeft className="mr-2" size={20} />
                    Voltar para Home
                </Link>

                {/* Hero Section */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl font-display font-bold uppercase mb-6 text-white">
                        Serviços Aéreos
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans font-light">
                        Captura de imagens aéreas de alta qualidade para eventos, imobiliárias, inspeções e produções audiovisuais.
                    </p>
                </div>

                {/* Services Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {/* Photography */}
                    <div className="bg-zinc-900 rounded-xl p-8 hover:scale-[1.02] transition-transform border border-zinc-800">
                        <Camera className="text-accent mb-6" size={40} />
                        <h2 className="text-2xl font-display font-bold uppercase mb-4 text-white">Fotografia Aérea</h2>
                        <p className="text-gray-400 mb-6 font-sans font-light">
                            Imagens em alta resolução que valorizam seu empreendimento ou evento com ângulos exclusivos.
                        </p>
                        <ul className="space-y-3">
                            {[
                                'Alta resolução (48MP)',
                                'Ângulos panorâmicos',
                                'Edição profissional',
                                'Entrega rápida',
                                'Formatos RAW e JPEG'
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <CheckCircle className="text-accent flex-shrink-0" size={16} />
                                    <span className="text-gray-300 font-sans font-light">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Videography */}
                    <div className="bg-zinc-900 rounded-xl p-8 hover:scale-[1.02] transition-transform border border-zinc-800">
                        <Video className="text-accent mb-6" size={40} />
                        <h2 className="text-2xl font-display font-bold uppercase mb-4 text-white">Filmagens 4K</h2>
                        <p className="text-gray-400 mb-6 font-sans font-light">
                            Vídeos cinematográficos com estabilização profissional para comerciais, clipes e institucionais.
                        </p>
                        <ul className="space-y-3">
                            {[
                                'Resolução 4K a 60fps',
                                'Color Grading',
                                'Takes cinematográficos',
                                'Edição inclusa',
                                'Formatos para redes sociais'
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <CheckCircle className="text-accent flex-shrink-0" size={16} />
                                    <span className="text-gray-300 font-sans font-light">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mapping/Inspection */}
                    <div className="bg-zinc-900 rounded-xl p-8 hover:scale-[1.02] transition-transform border border-zinc-800">
                        <Map className="text-accent mb-6" size={40} />
                        <h2 className="text-2xl font-display font-bold uppercase mb-4 text-white">Mapeamento e Inspeção</h2>
                        <p className="text-gray-400 mb-6 font-sans font-light">
                            Soluções técnicas para acompanhamento de obras, topografia e inspeção de estruturas.
                        </p>
                        <ul className="space-y-3">
                            {[
                                'Acompanhamento de obras',
                                'Inspeção de telhados/fachadas',
                                'Ortomosaicos',
                                'Modelagem 3D',
                                'Relatórios técnicos'
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <CheckCircle className="text-accent flex-shrink-0" size={16} />
                                    <span className="text-gray-300 font-sans font-light">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-display font-bold uppercase text-center mb-12 text-white">Diferenciais</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <Trophy className="text-accent mx-auto mb-4" size={32} />
                            <h3 className="font-display font-bold uppercase mb-2 text-white">Equipamento de Ponta</h3>
                            <p className="text-gray-400 font-sans font-light">Drones de última geração para garantir a melhor qualidade.</p>
                        </div>
                        <div className="text-center">
                            <Zap className="text-accent mx-auto mb-4" size={32} />
                            <h3 className="font-display font-bold uppercase mb-2 text-white">Pilotos Certificados</h3>
                            <p className="text-gray-400 font-sans font-light">Profissionais registrados na ANAC e DECEA.</p>
                        </div>
                        <div className="text-center">
                            <Users className="text-accent mx-auto mb-4" size={32} />
                            <h3 className="font-display font-bold uppercase mb-2 text-white">Segurança Total</h3>
                            <p className="text-gray-400 font-sans font-light">Seguro RETA e planejamento de voo rigoroso.</p>
                        </div>
                        <div className="text-center">
                            <Share2 className="text-accent mx-auto mb-4" size={32} />
                            <h3 className="font-display font-bold uppercase mb-2 text-white">Entrega Ágil</h3>
                            <p className="text-gray-400 font-sans font-light">Material entregue pronto para uso em tempo recorde.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-display font-bold uppercase text-center mb-8 text-white">Solicite um Orçamento</h2>
                    <p className="text-gray-400 text-center mb-12 font-sans font-light">
                        Fale conosco e leve seu projeto a novas alturas.
                    </p>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default ServicosAereos;

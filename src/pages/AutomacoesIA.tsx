import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, Cpu, MessageSquare, Zap, BarChart, CheckCircle, Workflow } from 'lucide-react';
import ContactForm from '../components/ContactForm';

function AutomacoesIA() {
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
                        Automações com IA
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans font-light">
                        Escale seu negócio e otimize processos com o poder da Inteligência Artificial. Soluções personalizadas com n8n e ManyChat.
                    </p>
                </div>

                {/* Services Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {/* n8n Automation */}
                    <div className="bg-zinc-900 rounded-xl p-8 hover:scale-[1.02] transition-transform border border-zinc-800">
                        <Workflow className="text-accent mb-6" size={40} />
                        <h2 className="text-2xl font-display font-bold uppercase mb-4 text-white">Automação de Processos (n8n)</h2>
                        <p className="text-gray-400 mb-6 font-sans font-light">
                            Integre seus aplicativos favoritos e automatize tarefas repetitivas para ganhar tempo e eficiência.
                        </p>
                        <ul className="space-y-3">
                            {[
                                'Integração entre CRMs e Planilhas',
                                'Disparos automáticos de e-mail/WhatsApp',
                                'Processamento de dados com IA',
                                'Webhooks e APIs personalizadas',
                                'Fluxos de trabalho complexos'
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <CheckCircle className="text-accent flex-shrink-0" size={16} />
                                    <span className="text-gray-300 font-sans font-light">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ManyChat Chatbots */}
                    <div className="bg-zinc-900 rounded-xl p-8 hover:scale-[1.02] transition-transform border border-zinc-800">
                        <MessageSquare className="text-accent mb-6" size={40} />
                        <h2 className="text-2xl font-display font-bold uppercase mb-4 text-white">Chatbots Inteligentes (ManyChat)</h2>
                        <p className="text-gray-400 mb-6 font-sans font-light">
                            Atenda seus clientes 24/7 no Instagram e WhatsApp com chatbots que vendem e tiram dúvidas automaticamente.
                        </p>
                        <ul className="space-y-3">
                            {[
                                'Atendimento 24 horas',
                                'Qualificação de leads',
                                'Agendamento automático',
                                'Respostas com IA (ChatGPT)',
                                'Recuperação de vendas'
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
                    <h2 className="text-3xl font-display font-bold uppercase text-center mb-12 text-white">Por que automatizar?</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <Zap className="text-accent mx-auto mb-4" size={32} />
                            <h3 className="font-display font-bold uppercase mb-2 text-white">Eficiência</h3>
                            <p className="text-gray-400 font-sans font-light">Reduza erros humanos e aumente a velocidade dos processos.</p>
                        </div>
                        <div className="text-center">
                            <Bot className="text-accent mx-auto mb-4" size={32} />
                            <h3 className="font-display font-bold uppercase mb-2 text-white">Inovação</h3>
                            <p className="text-gray-400 font-sans font-light">Utilize o que há de mais moderno em IA para sair na frente.</p>
                        </div>
                        <div className="text-center">
                            <Cpu className="text-accent mx-auto mb-4" size={32} />
                            <h3 className="font-display font-bold uppercase mb-2 text-white">Escalabilidade</h3>
                            <p className="text-gray-400 font-sans font-light">Atenda centenas de clientes simultaneamente sem aumentar a equipe.</p>
                        </div>
                        <div className="text-center">
                            <BarChart className="text-accent mx-auto mb-4" size={32} />
                            <h3 className="font-display font-bold uppercase mb-2 text-white">ROI</h3>
                            <p className="text-gray-400 font-sans font-light">Retorno sobre investimento claro com redução de custos operacionais.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-display font-bold uppercase text-center mb-8 text-white">Vamos Automatizar?</h2>
                    <p className="text-gray-400 text-center mb-12 font-sans font-light">
                        Entre em contato para descobrir como a IA pode transformar o seu negócio.
                    </p>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default AutomacoesIA;

import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Code2,
  Globe2,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Target,
  Workflow,
  X,
  Youtube,
  Share2,
} from "lucide-react";

import SkillCard from "../components/SkillCard";
import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";

const amadorItems = [
  "Impulsiona publicação sem objetivo, sem funil e sem saber o custo por venda.",
  "Manda o anúncio direto para um perfil confuso ou página lenta que não converte.",
  "Demora horas para responder no WhatsApp ou Direct enquanto o cliente já fechou com outro.",
  "Não mede de onde veio o lead: gasta dinheiro no escuro todo mês.",
];

const sistemaItems = [
  "Anúncios no Meta Ads e Google Ads desenhados para atrair quem realmente quer comprar.",
  "Landing page rápida, direta ao ponto e com rastreamento completo (Pixel, GA4 e GTM).",
  "Automação imediata no WhatsApp, Instagram Direct e CRM respondendo em segundos.",
  "Dados claros na tela: você sabe exatamente quanto entra e quanto volta.",
];

const pillars = [
  {
    num: "01",
    title: "Tráfego Pago de Intenção",
    subtitle: "Atrair quem compra, não curioso",
    description:
      "Estrutura de campanhas no Google Ads e Meta Ads orientada a custo por oportunidade e retorno real, sem queimar verba com métricas de vaidade.",
    to: "/marketing-digital",
    cta: "Ver estrutura de tráfego",
  },
  {
    num: "02",
    title: "Páginas & Produtos Digitais",
    subtitle: "Conversão acima da média",
    description:
      "Landing pages, sites e sistemas sob medida com velocidade, clareza de oferta e código limpo para transformar atenção paga em conversa no WhatsApp.",
    to: "/projetos",
    cta: "Ver sites, apps e mini-apps",
  },
  {
    num: "03",
    title: "Automação, IA & CRM",
    subtitle: "Resposta em segundos, 24h",
    description:
      "Fluxos com n8n, Agentes de IA, automação de Direct e integração com CRM para qualificar, fazer follow-up e não deixar nenhum lead esfriar.",
    to: "/automacoes-ia",
    cta: "Conhecer automações",
  },
];

function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <SEO
        title="Tráfego Pago, Sites de Alta Conversão e Automações com IA"
        description="Pare de desperdiçar cliques. Eu monto e opero as três peças do seu crescimento: tráfego pago que atrai compradores, páginas que convertem e automações com IA."
        canonical="/"
        keywords="gestor de tráfego pago, criar máquina de vendas, landing page alta conversão, automação n8n, agente ia whatsapp, desenvolvedor full stack, belo horizonte"
      />

      {/* 1. HERO — Preto Estrutural (#000000) */}
      <section className="relative bg-black border-b border-zinc-800 px-4 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2.5 border border-zinc-800 bg-zinc-950 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-gray-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#B91C1C]" aria-hidden="true" />
            Tráfego · Estrutura · Automação
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[74px] font-extrabold tracking-[-0.035em] leading-[0.98] text-white max-w-5xl uppercase">
            Pare de comprar cliques.{" "}
            <span className="text-[#B91C1C]">Construa uma máquina de vendas.</span>
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed font-medium">
            Anúncio sem página que converte queima orçamento. Página boa sem atendimento imediato
            perde o cliente para o concorrente. Eu conecto as{" "}
            <strong className="text-white font-bold">três peças na ordem certa</strong>: tráfego
            pago qualificado, páginas rápidas e automação comercial com IA.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="inline-flex items-center gap-2.5 bg-[#B91C1C] hover:bg-[#991B1B] text-white px-7 py-4 rounded-md font-extrabold text-sm uppercase tracking-wider transition-colors"
            >
              <span>Quero escalar minhas vendas</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>

            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 border border-zinc-700 hover:border-white text-white px-7 py-4 rounded-md font-bold text-sm uppercase tracking-wider transition-colors"
            >
              Ver apps, mini-apps &amp; sites
            </Link>
          </div>

          {/* Tira de 3 fundamentos */}
          <div className="mt-16 pt-8 border-t border-zinc-800 grid sm:grid-cols-3 gap-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#B91C1C]">
                01 / Tráfego de Intenção
              </span>
              <p className="mt-1.5 text-sm text-gray-400 font-medium">
                Meta Ads e Google Ads focados em geração de demanda e custo por oportunidade.
              </p>
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#B91C1C]">
                02 / Páginas que Convertem
              </span>
              <p className="mt-1.5 text-sm text-gray-400 font-medium">
                Copy direta, carregamento instantâneo e traqueamento de cada clique no Pixel e GA4.
              </p>
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#B91C1C]">
                03 / Automação &amp; CRM
              </span>
              <p className="mt-1.5 text-sm text-gray-400 font-medium">
                n8n, Agentes de IA, AutoDM no Instagram e WhatsApp respondendo em segundos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTRASTE CLARO (#FAFAFA) — Estilo didático Sobral / Tessmann */}
      <section className="bg-[#FAFAFA] text-black px-4 py-20 sm:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#B91C1C]">
              A verdade sem filtro
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] leading-[1.05] text-black uppercase">
              Você não precisa de mais uma ferramenta. Precisa do processo inteiro conectado.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4A5568] font-medium">
              A diferença entre quem anuncia e reclama que "o lead é curioso" e quem vende todos os
              dias está na estrutura por trás do clique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-8">
              <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4 mb-6">
                <h3 className="text-xl font-extrabold uppercase text-black">
                  Como a maioria faz
                </h3>
                <span className="text-xs font-bold uppercase tracking-wider text-[#4A5568]">
                  Improviso
                </span>
              </div>
              <ul className="space-y-4">
                {amadorItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-[#4A5568] font-medium">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-zinc-200 text-black">
                      <X size={13} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black text-white border border-black rounded-xl p-8">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                <h3 className="text-xl font-extrabold uppercase text-white">
                  O Sistema <span className="text-[#B91C1C]">RJ</span>
                </h3>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B91C1C]">
                  Método &amp; Código
                </span>
              </div>
              <ul className="space-y-4">
                {sistemaItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-gray-200 font-medium">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#B91C1C] text-white">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AS 3 ALAVANCAS (Fundo #000000) */}
      <section className="bg-black text-white px-4 py-20 sm:py-24 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#B91C1C]">
                Como eu ajudo sua empresa
              </span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] leading-[1.05] uppercase">
                Três alavancas. Um único objetivo: venda previsível.
              </h2>
            </div>
            <Link
              to="/agendamento"
              className="text-xs font-extrabold uppercase tracking-wider text-[#B91C1C] hover:text-white transition-colors"
            >
              Agendar conversa estratégica →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <article
                key={pillar.num}
                className="flex flex-col justify-between bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-[#B91C1C] transition-colors"
              >
                <div>
                  <span className="inline-block text-4xl font-extrabold tracking-tighter text-[#B91C1C] mb-5">
                    {pillar.num}
                  </span>
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-400">
                    {pillar.subtitle}
                  </p>
                  <p className="mt-5 text-sm text-gray-300 leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-zinc-900">
                  <Link
                    to={pillar.to}
                    className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-white hover:text-[#B91C1C] transition-colors"
                  >
                    <span>{pillar.cta}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VITRINE DEDICADA DE PROJETOS, APPS & MINI-APPS (Fundo Branco) */}
      <section className="bg-white text-black px-4 py-20 border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black text-white rounded-2xl p-8 sm:p-14 border border-zinc-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#B91C1C] mb-3">
                <span>Portfólio &amp; Laboratório</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] leading-[1.03] uppercase">
                Apps, Mini-Apps e Sites construídos na prática.
              </h2>
              <p className="mt-4 text-base text-gray-300 font-medium leading-relaxed">
                Não fico só na teoria. Veja todos os sistemas próprios (como o{" "}
                <strong className="text-white">RJ AutoDM</strong> e o{" "}
                <strong className="text-white">DeskcommCRM</strong>), mini-apps gratuitos (como o{" "}
                <strong className="text-white">Gerador de QR Code</strong>) e páginas de alta
                conversão já publicadas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full lg:w-auto">
              <Link
                to="/projetos"
                className="inline-flex items-center justify-center gap-2 bg-[#B91C1C] hover:bg-[#991B1B] text-white px-7 py-4 rounded-md font-extrabold text-sm uppercase tracking-wider transition-colors"
              >
                <span>Explorar Todos os Projetos</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/gerador-qrcode"
                className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-white text-white px-7 py-3.5 rounded-md font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Abrir Gerador de QR Code
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOBRE MIM (Fundo #FAFAFA) */}
      <section id="sobre-mim" className="bg-[#FAFAFA] text-black py-20 sm:py-24 px-4 border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center">
            <div>
              <picture>
                <source
                  type="image/webp"
                  srcSet="/images/rogerio-sobre-terno-2026-sm.webp 400w, /images/rogerio-sobre-terno-2026-md.webp 800w, /images/rogerio-sobre-terno-2026.webp 1100w"
                  sizes="(max-width: 640px) 100vw, 400px"
                />
                <img
                  src="/images/rogerio-sobre-terno-2026.jpg"
                  alt="Rogério Júnior — Estrategista de Tráfego Pago e Desenvolvedor Full Stack"
                  className="w-full aspect-[4/5] object-cover object-top rounded-xl border-2 border-black shadow-xl"
                  width="400"
                  height="500"
                  loading="lazy"
                />
              </picture>
            </div>

            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#B91C1C]">
                Quem está por trás da operação
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] uppercase text-black">
                Rogério Júnior
              </h2>
              <p className="mt-5 text-base sm:text-lg text-[#4A5568] leading-relaxed font-medium">
                Uno <strong className="text-black">trincheira de tráfego pago</strong> com{" "}
                <strong className="text-black">engenharia Full Stack</strong>. Enquanto a maioria das
                agências terceiriza código e os programadores não entendem de vendas, eu desenho o
                anúncio, programo a página ou aplicativo e conecto tudo ao seu CRM e WhatsApp com
                n8n e IA.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <SkillCard
                  icon={<Target size={20} />}
                  title="Tráfego Pago"
                  description="Meta Ads & Google Ads"
                />
                <SkillCard
                  icon={<Globe2 size={20} />}
                  title="Páginas"
                  description="Conversão & Tracking"
                />
                <SkillCard
                  icon={<Workflow size={20} />}
                  title="Automação"
                  description="n8n, AutoDM & IA"
                />
                <SkillCard
                  icon={<Code2 size={20} />}
                  title="Full Stack"
                  description="Apps, SaaS & APIs"
                />
              </div>

              <div className="mt-7 flex flex-wrap gap-4 items-center">
                <a
                  href="https://instagram.com/rogjunior9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#B91C1C] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href="https://facebook.com/orogjunior9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#B91C1C] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={22} />
                </a>
                <a
                  href="https://linkedin.com/in/rogjunior9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#B91C1C] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCBiE7nRx7ZLVj_4hWBdpNqA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#B91C1C] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={22} />
                </a>
                <a
                  href="https://x.com/Rogjunior9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#B91C1C] transition-colors"
                  aria-label="X"
                >
                  <Share2 size={20} />
                </a>
                <a
                  href="mailto:contato@rogeriojunior.com.br"
                  className="text-black hover:text-[#B91C1C] transition-colors"
                  aria-label="E-mail"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTATO / DIAGNÓSTICO (Fundo #000000) */}
      <section id="contato" className="bg-black text-white py-20 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#B91C1C]">
            Próximo passo
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] uppercase text-white">
            Bora destravar suas vendas?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12 font-medium">
            Preencha abaixo em menos de 1 minuto. Eu analiso seu momento atual e te mostro o plano
            mais direto para gerar leads e vendas com previsibilidade.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default Home;

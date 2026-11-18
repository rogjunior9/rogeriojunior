import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import SEO from "../components/SEO";

type CategoryFilter = "todos" | "apps" | "mini-apps" | "sites";

interface ShowcaseItem {
  id: string;
  group: Exclude<CategoryFilter, "todos">;
  category: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
  ctaLabel?: string;
}

const showcaseItems: ShowcaseItem[] = [
  // Apps & Sistemas
  {
    id: "rj-autodm",
    group: "apps",
    category: "App Meta",
    title: "RJ AutoDM — Automação Instagram & Facebook",
    description:
      "Aplicativo oficial integrado à Meta Graph API que monitora comentários e respostas de Stories por palavra-chave e envia DMs automáticas com link e resposta pública.",
    tags: ["Node.js", "Meta Graph API", "AutoDM"],
    link: "https://autodm.rogeriojunior.com.br",
    ctaLabel: "Acessar AutoDM",
  },
  {
    id: "deskcomm-crm",
    group: "apps",
    category: "App / SaaS",
    title: "DeskcommCRM — Sales OS com IA",
    description:
      "Sistema operacional de vendas self-hosted com agentes de IA nativos no WhatsApp, pipeline Kanban em tempo real, RAG por organização e integração via MCP.",
    tags: ["Next.js", "Agentes IA", "WhatsApp", "CRM"],
    link: "https://github.com/rogjunior9/crm-rogeriojunior",
    ctaLabel: "Ver repositório",
  },
  {
    id: "peladeiros",
    group: "apps",
    category: "App Web",
    title: "Peladeiros — Gestão de Futebol",
    description:
      "Sistema completo em Next.js, Prisma e PostgreSQL (Supabase) para gestão de jogos, confirmação de presença, financeiro e automações via n8n.",
    tags: ["Next.js", "TypeScript", "Prisma", "Supabase"],
    ctaLabel: "Projeto próprio",
  },
  {
    id: "merits",
    group: "apps",
    category: "Plataforma SaaS",
    title: "Merits — Avaliação de Desempenho",
    description:
      "Plataforma multiempresarial desenvolvida para avaliação de desempenho, acompanhamento de metas e gestão contínua de equipes.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
    tags: ["Bubble", "Full Stack", "RH"],
    link: "https://merits-11682.bubbleapps.io/version-test",
    ctaLabel: "Abrir plataforma",
  },

  // Mini-Apps & Ferramentas
  {
    id: "gerador-qrcode",
    group: "mini-apps",
    category: "Mini-App Gratuito",
    title: "Gerador de QR Code RJ",
    description:
      "Ferramenta gratuita online para criar QR Codes personalizados com escolha de cores, nível de correção e download imediato em PNG ou SVG.",
    image: "/images/projects/gerador-qrcode-phone.webp",
    tags: ["Ferramenta", "PNG / SVG", "Gratuito"],
    link: "/gerador-qrcode",
    ctaLabel: "Usar ferramenta agora",
  },
  {
    id: "briefing-lp",
    group: "mini-apps",
    category: "Mini-App",
    title: "Briefing Inteligente de Página de Captura",
    description:
      "Aplicação web focada em coleta estratégica de briefing com barra de progresso em tempo real e salvamento automático no dispositivo.",
    tags: ["HTML / JS", "UX", "Conversão"],
    ctaLabel: "Ferramenta interna",
  },
  {
    id: "trafego-de-bairro",
    group: "mini-apps",
    category: "Produto Digital",
    title: "Tráfego de Bairro",
    description:
      "Página de oferta e método prático para donos de negócios locais prepararem o Instagram e atraírem clientes próximos com Meta Ads.",
    tags: ["Landing Page", "Meta Ads", "Negócios Locais"],
    link: "https://trafegodebairro.rogeriojunior.com.br/",
    ctaLabel: "Conhecer página",
  },
  {
    id: "extensao-meet",
    group: "mini-apps",
    category: "Extensão Chrome",
    title: "Capturador de Atas Google Meet",
    description:
      "Extensão para Google Chrome que lê legendas ao vivo de reuniões no Meet, estabiliza turnos de fala e envia para resumo estruturado via IA.",
    tags: ["Chrome Extension", "JavaScript", "IA"],
    ctaLabel: "Ferramenta interna",
  },

  // Sites & Landing Pages
  {
    id: "mg-solos",
    group: "sites",
    category: "Site Corporativo",
    title: "MG Solos",
    description:
      "Site corporativo para empresa de engenharia de solos, projetado para transmitir autoridade técnica e gerar solicitações de orçamento.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    tags: ["Institucional", "Engenharia", "Corporativo"],
    link: "https://www.mgsolos.com.br",
    ctaLabel: "Visitar site",
  },
  {
    id: "beth-tabuas",
    group: "sites",
    category: "Landing Page",
    title: "Beth Tábuas e Presentes",
    description:
      "Landing page para cestas, tábuas e presentes personalizados, com apresentação clara dos produtos e contato direto para pedidos.",
    image: "/images/projects/beth-tabuas-hero.webp",
    tags: ["Landing Page", "Presentes", "Conversão"],
    link: "https://rogeriojunior.com.br/beth/",
    ctaLabel: "Visitar página",
  },
  {
    id: "donna-isa",
    group: "sites",
    category: "Site Comercial",
    title: "Donna Isa",
    description:
      "Site comercial para cestas de presente personalizadas em Santo André, com catálogo por ocasião e pedidos direcionados ao WhatsApp.",
    image: "/images/projects/donna-isa-hero.webp",
    tags: ["Site Comercial", "Cestas", "WhatsApp"],
    link: "https://donnaisa.com.br/",
    ctaLabel: "Visitar site",
  },
  {
    id: "andreia-rodrigues",
    group: "sites",
    category: "Landing Page",
    title: "Andreia Rodrigues Presentes",
    description:
      "Site para cestas de café da manhã e presentes personalizados, com posicionamento direto para pedidos na Zona Sul do Rio de Janeiro.",
    image: "/images/projects/andreia-rodrigues-hero.webp",
    tags: ["Landing Page", "Presentes", "Conversão"],
    link: "https://andreiarodriguescestas.com.br/",
    ctaLabel: "Visitar site",
  },
  {
    id: "claudia-cestas",
    group: "sites",
    category: "Site Comercial",
    title: "Cláudia Cestas Criativas",
    description:
      "Site de vendas para cestas de café da manhã, tábuas de frios e presentes personalizados em Salvador, integrado ao atendimento pelo WhatsApp.",
    image: "/images/projects/claudia-cestas-hero.webp",
    tags: ["Site Comercial", "Gastronomia", "WhatsApp"],
    link: "https://claudiacestascriativas.com.br/",
    ctaLabel: "Visitar site",
  },
  {
    id: "cestas-kimara",
    group: "sites",
    category: "Landing Page",
    title: "Cestas Kimara",
    description:
      "Landing page para cestas e presentes em Franca, com catálogo, diferenciais, depoimentos, FAQ e chamadas diretas para pedidos.",
    image: "/images/projects/cestas-kimara-hero.webp",
    tags: ["Landing Page", "Cestas", "Conversão"],
    link: "https://www.cestaskimara.com.br/",
    ctaLabel: "Visitar site",
  },
  {
    id: "ingles-com-renato",
    group: "sites",
    category: "Portal Automatizado",
    title: "Inglês com Renato",
    description:
      "Portal educacional automatizado que importa vídeos diretamente do canal no YouTube, mantendo o site sempre atualizado com novos conteúdos.",
    image: "/images/projects/ingles-com-renato-hero.webp",
    tags: ["WordPress", "YouTube", "Automação"],
    link: "https://inglescomrenato.com.br/",
    ctaLabel: "Visitar portal",
  },
];

const filterTabs: { id: CategoryFilter; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "apps", label: "Apps & Sistemas" },
  { id: "mini-apps", label: "Mini-Apps & Ferramentas" },
  { id: "sites", label: "Sites & Landing Pages" },
];

function Projetos() {
  const [filter, setFilter] = useState<CategoryFilter>("todos");

  const filteredItems =
    filter === "todos"
      ? showcaseItems
      : showcaseItems.filter((item) => item.group === filter);

  return (
    <div className="bg-black text-white min-h-screen">
      <SEO
        title="Apps, Mini-Apps e Sites Criados"
        description="Conheça os aplicativos, sistemas com IA, mini-apps gratuitos (como o Gerador de QR Code e AutoDM) e sites desenvolvidos por Rogério Júnior."
        canonical="/projetos"
        keywords="projetos rogerio junior, apps, mini apps, gerador qr code, autodm, landing pages, sites, crm"
      />

      {/* Topo da página de portfólio */}
      <section className="border-b border-zinc-800 px-4 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-gray-400 hover:text-[#B91C1C] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Voltar para Início
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#B91C1C]">
                Portfólio completo
              </span>
              <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] uppercase leading-[1.02]">
                Apps, Mini-Apps <span className="text-[#B91C1C]">&amp; Sites</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-300 font-medium leading-relaxed">
                Cada solução abaixo nasceu para resolver um problema real de vendas, operação ou
                conversão — de ferramentas rápidas e gratuitas até sistemas completos com IA e
                automação.
              </p>
            </div>

            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar projetos">
              {filterTabs.map((tab) => {
                const count =
                  tab.id === "todos"
                    ? showcaseItems.length
                    : showcaseItems.filter((i) => i.group === tab.id).length;
                const active = filter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(tab.id)}
                    className={`px-4 py-2.5 rounded-md text-xs font-extrabold uppercase tracking-wider transition-colors border ${
                      active
                        ? "bg-[#B91C1C] border-[#B91C1C] text-white"
                        : "bg-zinc-950 border-zinc-800 text-gray-300 hover:border-white"
                    }`}
                  >
                    {tab.label} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Cards */}
      <section className="px-4 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <ProjectCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              category={item.category}
              tags={item.tags}
              link={item.link}
              ctaLabel={item.ctaLabel}
            />
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#FAFAFA] text-black px-4 py-16 border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] uppercase">
            Quer um site, sistema ou automação sob medida?
          </h2>
          <p className="mt-3 text-base text-[#4A5568] font-medium max-w-2xl mx-auto">
            Conte o que você precisa tirar do papel e eu desenho a estrutura mais rápida e segura
            para colocar no ar.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              to="/#contato"
              className="inline-flex items-center gap-2 bg-[#B91C1C] hover:bg-[#991B1B] text-white px-7 py-4 rounded-md font-extrabold text-sm uppercase tracking-wider transition-colors"
            >
              <span>Solicitar orçamento</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/agendamento"
              className="inline-flex items-center gap-2 border border-black text-black hover:bg-black hover:text-white px-7 py-4 rounded-md font-extrabold text-sm uppercase tracking-wider transition-colors"
            >
              Agendar conversa
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projetos;

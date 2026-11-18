import React, { useState, useRef } from "react";
import { QRCodeSVG, QRCodeCanvas } from "qrcode.react";
import { Download, QrCode, Palette, Settings, RefreshCw, Copy, Check, Link2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";

interface QRSettings {
  value: string;
  size: number;
  fgColor: string;
  bgColor: string;
  level: ErrorCorrectionLevel;
  includeMargin: boolean;
}

const GeradorQRCode: React.FC = () => {
  const [settings, setSettings] = useState<QRSettings>({
    value: "",
    size: 256,
    fgColor: "#000000",
    bgColor: "#FFFFFF",
    level: "M",
    includeMargin: true,
  });

  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"content" | "style" | "advanced">("content");
  const qrRef = useRef<HTMLDivElement>(null);

  const handleDownloadPNG = () => {
    const canvas = document.querySelector("#qr-canvas canvas") as HTMLCanvasElement;
    if (canvas) {
      const link = document.createElement("a");
      link.download = "qrcode-rj.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  const handleDownloadSVG = () => {
    const svg = document.querySelector("#qr-svg svg");
    if (svg) {
      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(svg);
      const blob = new Blob([svgString], { type: "image/svg+xml" });
      const link = document.createElement("a");
      link.download = "qrcode-rj.svg";
      link.href = URL.createObjectURL(blob);
      link.click();
      URL.revokeObjectURL(link.href);
    }
  };

  const handleCopyLink = () => {
    if (settings.value) {
      navigator.clipboard.writeText(settings.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setSettings({
      value: "",
      size: 256,
      fgColor: "#000000",
      bgColor: "#FFFFFF",
      level: "M",
      includeMargin: true,
    });
  };

  const presetColors = [
    { name: "Sistema RJ", fg: "#000000", bg: "#FFFFFF" },
    { name: "Vermelho RJ", fg: "#B91C1C", bg: "#FFFFFF" },
    { name: "Dark RJ", fg: "#FFFFFF", bg: "#000000" },
    { name: "Dark Red", fg: "#B91C1C", bg: "#000000" },
    { name: "Grafite", fg: "#18181B", bg: "#FAFAFA" },
    { name: "Verde WhatsApp", fg: "#15803D", bg: "#FFFFFF" },
  ];

  const errorLevels: { value: ErrorCorrectionLevel; label: string; description: string }[] = [
    { value: "L", label: "Baixo (7%)", description: "Menor densidade, leitura rápida" },
    { value: "M", label: "Médio (15%)", description: "Equilíbrio ideal para uso geral" },
    { value: "Q", label: "Alto (25%)", description: "Maior resistência para impressão" },
    { value: "H", label: "Máximo (30%)", description: "Máxima resistência a danos" },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <SEO
        title="Gerador de QR Code Gratuito"
        description="Crie QR Codes personalizados gratuitamente. Escolha cores, tamanho, nível de correção de erro e baixe em PNG ou SVG na hora."
        canonical="/gerador-qrcode"
        type="tool"
        keywords="gerador qr code, criar qr code, qr code grátis, qr code personalizado, qr code png svg"
      />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4 border-b border-zinc-800 bg-black">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-gray-400 hover:text-[#B91C1C] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Ver todos os mini-apps e projetos
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-[#B91C1C]/40 bg-[#B91C1C]/10 px-3.5 py-1.5 rounded-full mb-5">
              <QrCode className="text-[#B91C1C]" size={18} />
              <span className="text-[#B91C1C] text-xs uppercase tracking-widest font-extrabold">
                Mini-App Gratuito
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold uppercase leading-none mb-4 tracking-[-0.03em] text-white">
              Gerador de <span className="text-[#B91C1C]">QR Code</span>
            </h1>
            <p className="text-base sm:text-lg font-medium text-gray-400 max-w-2xl">
              Gere QR Codes instantâneos para WhatsApp, links de campanha, Wi-Fi ou cartões.
              Personalize as cores e baixe em alta resolução (PNG ou SVG).
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Controls */}
            <div className="space-y-6">
              {/* Tabs */}
              <div className="flex gap-2 bg-zinc-950 border border-zinc-800 p-1.5 rounded-lg">
                <button
                  onClick={() => setActiveTab("content")}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md uppercase tracking-wider text-xs font-extrabold transition-colors ${
                    activeTab === "content"
                      ? "bg-[#B91C1C] text-white"
                      : "text-gray-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  <Link2 size={16} />
                  <span>Conteúdo</span>
                </button>
                <button
                  onClick={() => setActiveTab("style")}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md uppercase tracking-wider text-xs font-extrabold transition-colors ${
                    activeTab === "style"
                      ? "bg-[#B91C1C] text-white"
                      : "text-gray-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  <Palette size={16} />
                  <span>Estilo</span>
                </button>
                <button
                  onClick={() => setActiveTab("advanced")}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md uppercase tracking-wider text-xs font-extrabold transition-colors ${
                    activeTab === "advanced"
                      ? "bg-[#B91C1C] text-white"
                      : "text-gray-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  <Settings size={16} />
                  <span>Avançado</span>
                </button>
              </div>

              {/* Content Tab */}
              {activeTab === "content" && (
                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 space-y-6">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-300 mb-2">
                      URL ou Texto
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={settings.value}
                        onChange={(e) => setSettings({ ...settings, value: e.target.value })}
                        placeholder="https://rogeriojunior.com.br ou qualquer texto..."
                        className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#B91C1C] focus:border-transparent transition-all font-medium"
                      />
                      {settings.value && (
                        <button
                          onClick={handleCopyLink}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#B91C1C] transition-colors"
                          title="Copiar"
                        >
                          {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
                        </button>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-2 font-medium">
                      Cole um link de campanha, número de WhatsApp, texto ou rede Wi-Fi.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-300 mb-3">
                      Modelos Rápidos
                    </label>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSettings({ ...settings, value: "https://wa.me/5531999999999" })}
                        className="bg-zinc-900 border border-zinc-800 hover:border-[#B91C1C] text-gray-200 px-3 py-1.5 rounded-md text-xs font-bold transition-colors"
                      >
                        WhatsApp
                      </button>
                      <button
                        onClick={() => setSettings({ ...settings, value: "mailto:contato@rogeriojunior.com.br" })}
                        className="bg-zinc-900 border border-zinc-800 hover:border-[#B91C1C] text-gray-200 px-3 py-1.5 rounded-md text-xs font-bold transition-colors"
                      >
                        E-mail
                      </button>
                      <button
                        onClick={() => setSettings({ ...settings, value: "tel:+5531999999999" })}
                        className="bg-zinc-900 border border-zinc-800 hover:border-[#B91C1C] text-gray-200 px-3 py-1.5 rounded-md text-xs font-bold transition-colors"
                      >
                        Telefone
                      </button>
                      <button
                        onClick={() => setSettings({ ...settings, value: "WIFI:T:WPA;S:NomeDaRede;P:SuaSenha;;" })}
                        className="bg-zinc-900 border border-zinc-800 hover:border-[#B91C1C] text-gray-200 px-3 py-1.5 rounded-md text-xs font-bold transition-colors"
                      >
                        Wi-Fi
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Style Tab */}
              {activeTab === "style" && (
                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 space-y-6">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-300 mb-3">
                      Paletas Prontas
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {presetColors.map((preset) => (
                        <button
                          key={preset.name}
                          onClick={() => setSettings({ ...settings, fgColor: preset.fg, bgColor: preset.bg })}
                          className={`p-3 rounded-lg border text-left transition-all ${
                            settings.fgColor === preset.fg && settings.bgColor === preset.bg
                              ? "border-[#B91C1C] bg-[#B91C1C]/10"
                              : "border-zinc-800 hover:border-zinc-600"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <div
                              className="w-4 h-4 rounded-full border border-zinc-600"
                              style={{ backgroundColor: preset.fg }}
                            />
                            <div
                              className="w-4 h-4 rounded-full border border-zinc-600"
                              style={{ backgroundColor: preset.bg }}
                            />
                          </div>
                          <span className="text-xs text-gray-200 font-bold">{preset.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-300 mb-2">
                        Cor do QR
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={settings.fgColor}
                          onChange={(e) => setSettings({ ...settings, fgColor: e.target.value })}
                          className="w-11 h-11 rounded-lg cursor-pointer border border-zinc-800 bg-black"
                        />
                        <input
                          type="text"
                          value={settings.fgColor}
                          onChange={(e) => setSettings({ ...settings, fgColor: e.target.value })}
                          className="flex-1 bg-black border border-zinc-800 rounded-lg px-3 py-2 text-white text-sm font-mono"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-300 mb-2">
                        Cor de Fundo
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={settings.bgColor}
                          onChange={(e) => setSettings({ ...settings, bgColor: e.target.value })}
                          className="w-11 h-11 rounded-lg cursor-pointer border border-zinc-800 bg-black"
                        />
                        <input
                          type="text"
                          value={settings.bgColor}
                          onChange={(e) => setSettings({ ...settings, bgColor: e.target.value })}
                          className="flex-1 bg-black border border-zinc-800 rounded-lg px-3 py-2 text-white text-sm font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-300 mb-2">
                      Tamanho: {settings.size}px
                    </label>
                    <input
                      type="range"
                      min="128"
                      max="512"
                      step="8"
                      value={settings.size}
                      onChange={(e) => setSettings({ ...settings, size: parseInt(e.target.value) })}
                      className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#B91C1C]"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>128px</span>
                      <span>512px</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Advanced Tab */}
              {activeTab === "advanced" && (
                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 space-y-6">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-300 mb-3">
                      Nível de Correção de Erro
                    </label>
                    <div className="space-y-2">
                      {errorLevels.map((level) => (
                        <button
                          key={level.value}
                          onClick={() => setSettings({ ...settings, level: level.value })}
                          className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                            settings.level === level.value
                              ? "border-[#B91C1C] bg-[#B91C1C]/10"
                              : "border-zinc-800 hover:border-zinc-700"
                          }`}
                        >
                          <div className="text-left">
                            <span className="text-white text-sm font-bold">{level.label}</span>
                            <p className="text-xs text-gray-400">{level.description}</p>
                          </div>
                          {settings.level === level.value && (
                            <Check size={18} className="text-[#B91C1C]" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                    <div>
                      <span className="text-white text-sm font-bold">Incluir Margem</span>
                      <p className="text-xs text-gray-400">Adiciona respiro ao redor do QR Code</p>
                    </div>
                    <button
                      onClick={() => setSettings({ ...settings, includeMargin: !settings.includeMargin })}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        settings.includeMargin ? "bg-[#B91C1C]" : "bg-zinc-700"
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                          settings.includeMargin ? "left-7" : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              )}

              <button
                onClick={handleReset}
                className="w-full flex items-center justify-center gap-2 bg-zinc-950 border border-zinc-800 hover:border-white text-gray-300 px-4 py-3 rounded-lg uppercase tracking-wider text-xs font-extrabold transition-colors"
              >
                <RefreshCw size={16} />
                Restaurar Padrões
              </button>
            </div>

            {/* Right Side - Preview */}
            <div className="space-y-6">
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                <h2 className="text-lg font-extrabold uppercase tracking-tight mb-5 text-white">
                  Pré-visualização
                </h2>

                <div
                  ref={qrRef}
                  className="flex items-center justify-center p-8 rounded-xl border border-zinc-800"
                  style={{ backgroundColor: settings.bgColor }}
                >
                  {settings.value ? (
                    <div className="relative">
                      <div id="qr-svg">
                        <QRCodeSVG
                          value={settings.value}
                          size={settings.size}
                          fgColor={settings.fgColor}
                          bgColor={settings.bgColor}
                          level={settings.level}
                          includeMargin={settings.includeMargin}
                        />
                      </div>
                      <div id="qr-canvas" className="hidden">
                        <QRCodeCanvas
                          value={settings.value}
                          size={settings.size}
                          fgColor={settings.fgColor}
                          bgColor={settings.bgColor}
                          level={settings.level}
                          includeMargin={settings.includeMargin}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <QrCode className="w-20 h-20 text-zinc-400 mx-auto mb-3" />
                      <p className="text-zinc-600 text-sm font-semibold">
                        Digite uma URL ou texto para gerar o QR Code
                      </p>
                    </div>
                  )}
                </div>

                {settings.value && (
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <button
                      onClick={handleDownloadPNG}
                      className="flex items-center justify-center gap-2 bg-[#B91C1C] hover:bg-[#991B1B] text-white px-4 py-3 rounded-md uppercase tracking-wider text-xs font-extrabold transition-colors"
                    >
                      <Download size={16} />
                      Baixar PNG
                    </button>
                    <button
                      onClick={handleDownloadSVG}
                      className="flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-black px-4 py-3 rounded-md uppercase tracking-wider text-xs font-extrabold transition-colors"
                    >
                      <Download size={16} />
                      Baixar SVG
                    </button>
                  </div>
                )}
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-sm font-extrabold uppercase tracking-wider mb-3 text-[#B91C1C]">
                  Dicas práticas
                </h3>
                <ul className="space-y-2 text-xs text-gray-400 font-medium">
                  <li>• Use <code>https://wa.me/5531999999999</code> para links diretos de WhatsApp.</li>
                  <li>• Baixe em SVG quando for imprimir em banners, cardápios ou embalagens.</li>
                  <li>• Mantenha contraste forte entre a cor do código e o fundo.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeradorQRCode;

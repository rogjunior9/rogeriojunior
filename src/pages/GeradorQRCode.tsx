import React, { useState, useRef } from "react";
import { QRCodeSVG, QRCodeCanvas } from "qrcode.react";
import { Download, QrCode, Palette, Settings, RefreshCw, Copy, Check, Link2 } from "lucide-react";
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
        fgColor: "#010E80",
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
            link.download = "qrcode.png";
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
            link.download = "qrcode.svg";
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
            fgColor: "#010E80",
            bgColor: "#FFFFFF",
            level: "M",
            includeMargin: true,
        });
    };

    const presetColors = [
        { name: "Inter Blue", fg: "#010E80", bg: "#FFFFFF" },
        { name: "Gold Premium", fg: "#C5A059", bg: "#000000" },
        { name: "Clássico", fg: "#000000", bg: "#FFFFFF" },
        { name: "Invertido", fg: "#FFFFFF", bg: "#000000" },
        { name: "Verde Sucesso", fg: "#059669", bg: "#FFFFFF" },
        { name: "Vermelho Alerta", fg: "#DC2626", bg: "#FFFFFF" },
    ];

    const errorLevels: { value: ErrorCorrectionLevel; label: string; description: string }[] = [
        { value: "L", label: "Baixo (7%)", description: "Menor tamanho, menos resistente a danos" },
        { value: "M", label: "Médio (15%)", description: "Equilíbrio entre tamanho e resistência" },
        { value: "Q", label: "Alto (25%)", description: "Maior resistência, tamanho moderado" },
        { value: "H", label: "Máximo (30%)", description: "Máxima resistência, maior tamanho" },
    ];

    return (
        <div className="bg-black text-white min-h-screen">
            <SEO
                title="Gerador de QR Code Gratuito - Crie QR Codes Personalizados"
                description="Crie QR Codes personalizados gratuitamente. Personalize cores, tamanho, nível de correção de erro e baixe em PNG ou SVG. Ferramenta online fácil de usar."
                canonical="/gerador-qrcode"
                type="tool"
                keywords="gerador qr code, criar qr code, qr code grátis, qr code personalizado, qr code online, gerador de código qr"
            />
            {/* Hero Section */}
            <section className="py-16 px-4 bg-gradient-to-b from-zinc-900 to-black">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center gap-3 bg-accent/10 px-4 py-2 rounded-full mb-6">
                        <QrCode className="text-accent" size={24} />
                        <span className="text-accent font-display uppercase tracking-wider font-bold">
                            Ferramenta Gratuita
                        </span>
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl font-bold uppercase leading-tight mb-4 text-transparent bg-clip-text tracking-tighter"
                        style={{
                            backgroundImage: "linear-gradient(135deg, #C5A059 0%, #010E80 100%)",
                            WebkitBackgroundClip: "text",
                        }}
                    >
                        Gerador de QR Code
                    </h1>
                    <p className="text-lg md:text-xl font-light tracking-wide text-gray-400 font-sans max-w-2xl mx-auto">
                        Crie QR Codes personalizados para seus links, textos e muito mais.
                        Personalize cores, tamanho e baixe em PNG ou SVG.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left Side - Controls */}
                        <div className="space-y-6">
                            {/* Tabs */}
                            <div className="flex gap-2 bg-zinc-900 p-1 rounded-lg">
                                <button
                                    onClick={() => setActiveTab("content")}
                                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-display uppercase tracking-wider text-sm font-bold transition-all ${activeTab === "content"
                                        ? "bg-accent text-black"
                                        : "text-gray-400 hover:text-white hover:bg-zinc-800"
                                        }`}
                                >
                                    <Link2 size={18} />
                                    <span className="hidden sm:inline">Conteúdo</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab("style")}
                                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-display uppercase tracking-wider text-sm font-bold transition-all ${activeTab === "style"
                                        ? "bg-accent text-black"
                                        : "text-gray-400 hover:text-white hover:bg-zinc-800"
                                        }`}
                                >
                                    <Palette size={18} />
                                    <span className="hidden sm:inline">Estilo</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab("advanced")}
                                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-display uppercase tracking-wider text-sm font-bold transition-all ${activeTab === "advanced"
                                        ? "bg-accent text-black"
                                        : "text-gray-400 hover:text-white hover:bg-zinc-800"
                                        }`}
                                >
                                    <Settings size={18} />
                                    <span className="hidden sm:inline">Avançado</span>
                                </button>
                            </div>

                            {/* Content Tab */}
                            {activeTab === "content" && (
                                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-6">
                                    <div>
                                        <label className="block text-sm font-display uppercase tracking-wider text-gray-300 mb-2">
                                            URL ou Texto
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                value={settings.value}
                                                onChange={(e) => setSettings({ ...settings, value: e.target.value })}
                                                placeholder="https://exemplo.com ou qualquer texto..."
                                                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-accent focus:border-transparent transition-all font-sans"
                                            />
                                            {settings.value && (
                                                <button
                                                    onClick={handleCopyLink}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-accent transition-colors"
                                                    title="Copiar"
                                                >
                                                    {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                                                </button>
                                            )}
                                        </div>
                                        <p className="text-xs text-gray-500 mt-2 font-sans">
                                            Digite uma URL, número de telefone, texto ou qualquer conteúdo para gerar o QR Code.
                                        </p>
                                    </div>

                                    {/* Quick Suggestions */}
                                    <div>
                                        <label className="block text-sm font-display uppercase tracking-wider text-gray-300 mb-3">
                                            Sugestões Rápidas
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            <button
                                                onClick={() => setSettings({ ...settings, value: "https://wa.me/5531999999999" })}
                                                className="bg-zinc-800 hover:bg-zinc-700 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-sans transition-colors"
                                            >
                                                WhatsApp
                                            </button>
                                            <button
                                                onClick={() => setSettings({ ...settings, value: "mailto:seu@email.com" })}
                                                className="bg-zinc-800 hover:bg-zinc-700 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-sans transition-colors"
                                            >
                                                Email
                                            </button>
                                            <button
                                                onClick={() => setSettings({ ...settings, value: "tel:+5531999999999" })}
                                                className="bg-zinc-800 hover:bg-zinc-700 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-sans transition-colors"
                                            >
                                                Telefone
                                            </button>
                                            <button
                                                onClick={() => setSettings({ ...settings, value: "WIFI:T:WPA;S:NomeDaRede;P:SuaSenha;;" })}
                                                className="bg-zinc-800 hover:bg-zinc-700 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-sans transition-colors"
                                            >
                                                Wi-Fi
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Style Tab */}
                            {activeTab === "style" && (
                                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-6">
                                    {/* Preset Colors */}
                                    <div>
                                        <label className="block text-sm font-display uppercase tracking-wider text-gray-300 mb-3">
                                            Paletas Prontas
                                        </label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {presetColors.map((preset) => (
                                                <button
                                                    key={preset.name}
                                                    onClick={() => setSettings({ ...settings, fgColor: preset.fg, bgColor: preset.bg })}
                                                    className={`group relative p-3 rounded-lg border transition-all ${settings.fgColor === preset.fg && settings.bgColor === preset.bg
                                                        ? "border-accent bg-accent/10"
                                                        : "border-zinc-700 hover:border-zinc-600"
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <div
                                                            className="w-4 h-4 rounded-full border border-zinc-600"
                                                            style={{ backgroundColor: preset.fg }}
                                                        />
                                                        <div
                                                            className="w-4 h-4 rounded-full border border-zinc-600"
                                                            style={{ backgroundColor: preset.bg }}
                                                        />
                                                    </div>
                                                    <span className="text-xs text-gray-400 font-sans">{preset.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Custom Colors */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-display uppercase tracking-wider text-gray-300 mb-2">
                                                Cor do QR
                                            </label>
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="color"
                                                    value={settings.fgColor}
                                                    onChange={(e) => setSettings({ ...settings, fgColor: e.target.value })}
                                                    className="w-12 h-12 rounded-lg cursor-pointer border border-zinc-700"
                                                />
                                                <input
                                                    type="text"
                                                    value={settings.fgColor}
                                                    onChange={(e) => setSettings({ ...settings, fgColor: e.target.value })}
                                                    className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white text-sm font-mono"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-display uppercase tracking-wider text-gray-300 mb-2">
                                                Cor de Fundo
                                            </label>
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="color"
                                                    value={settings.bgColor}
                                                    onChange={(e) => setSettings({ ...settings, bgColor: e.target.value })}
                                                    className="w-12 h-12 rounded-lg cursor-pointer border border-zinc-700"
                                                />
                                                <input
                                                    type="text"
                                                    value={settings.bgColor}
                                                    onChange={(e) => setSettings({ ...settings, bgColor: e.target.value })}
                                                    className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white text-sm font-mono"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Size */}
                                    <div>
                                        <label className="block text-sm font-display uppercase tracking-wider text-gray-300 mb-2">
                                            Tamanho: {settings.size}px
                                        </label>
                                        <input
                                            type="range"
                                            min="128"
                                            max="512"
                                            step="8"
                                            value={settings.size}
                                            onChange={(e) => setSettings({ ...settings, size: parseInt(e.target.value) })}
                                            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-accent"
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
                                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-6">
                                    {/* Error Correction Level */}
                                    <div>
                                        <label className="block text-sm font-display uppercase tracking-wider text-gray-300 mb-3">
                                            Nível de Correção de Erro
                                        </label>
                                        <div className="space-y-2">
                                            {errorLevels.map((level) => (
                                                <button
                                                    key={level.value}
                                                    onClick={() => setSettings({ ...settings, level: level.value })}
                                                    className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${settings.level === level.value
                                                        ? "border-accent bg-accent/10"
                                                        : "border-zinc-700 hover:border-zinc-600"
                                                        }`}
                                                >
                                                    <div className="text-left">
                                                        <span className="text-white font-medium">{level.label}</span>
                                                        <p className="text-xs text-gray-500 font-sans">{level.description}</p>
                                                    </div>
                                                    {settings.level === level.value && (
                                                        <Check size={20} className="text-accent" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Include Margin */}
                                    <div className="flex items-center justify-between p-4 bg-zinc-800 rounded-lg">
                                        <div>
                                            <span className="text-white font-medium">Incluir Margem</span>
                                            <p className="text-xs text-gray-500 font-sans">Adiciona uma borda branca ao redor do QR Code</p>
                                        </div>
                                        <button
                                            onClick={() => setSettings({ ...settings, includeMargin: !settings.includeMargin })}
                                            className={`relative w-12 h-6 rounded-full transition-colors ${settings.includeMargin ? "bg-accent" : "bg-zinc-600"
                                                }`}
                                        >
                                            <div
                                                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${settings.includeMargin ? "left-7" : "left-1"
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Reset Button */}
                            <button
                                onClick={handleReset}
                                className="w-full flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-gray-300 px-4 py-3 rounded-lg font-display uppercase tracking-wider text-sm font-bold transition-colors"
                            >
                                <RefreshCw size={18} />
                                Restaurar Padrões
                            </button>
                        </div>

                        {/* Right Side - Preview */}
                        <div className="space-y-6">
                            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                                <h2 className="text-xl font-display font-bold uppercase tracking-tight mb-6 text-white">
                                    Pré-visualização
                                </h2>

                                <div
                                    ref={qrRef}
                                    className="flex items-center justify-center p-8 rounded-xl"
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
                                            {/* Hidden canvas for PNG download */}
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
                                            <QrCode className="w-24 h-24 text-zinc-700 mx-auto mb-4" />
                                            <p className="text-gray-500 font-sans">
                                                Digite uma URL ou texto para gerar o QR Code
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Download Buttons */}
                                {settings.value && (
                                    <div className="grid grid-cols-2 gap-4 mt-6">
                                        <button
                                            onClick={handleDownloadPNG}
                                            className="flex items-center justify-center gap-2 bg-accent hover:bg-yellow-600 text-black px-4 py-3 rounded-lg font-display uppercase tracking-wider text-sm font-bold transition-colors"
                                        >
                                            <Download size={18} />
                                            Baixar PNG
                                        </button>
                                        <button
                                            onClick={handleDownloadSVG}
                                            className="flex items-center justify-center gap-2 bg-primary hover:bg-hover text-white px-4 py-3 rounded-lg font-display uppercase tracking-wider text-sm font-bold transition-colors"
                                        >
                                            <Download size={18} />
                                            Baixar SVG
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Tips Card */}
                            <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-6">
                                <h3 className="text-lg font-display font-bold uppercase tracking-tight mb-3 text-accent">
                                    Dicas de Uso
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-400 font-sans">
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent">•</span>
                                        Use o formato <code className="bg-zinc-800 px-1 rounded">https://wa.me/NUMERO</code> para links de WhatsApp
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent">•</span>
                                        O nível de correção de erro mais alto permite que o QR seja lido mesmo com danos
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent">•</span>
                                        SVG é ideal para impressão em alta qualidade
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent">•</span>
                                        Mantenha bom contraste entre as cores para melhor leitura
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 bg-zinc-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-display font-bold uppercase tracking-tight mb-12 text-center text-white">
                        Recursos do Gerador
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 text-center">
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Palette className="text-accent" size={32} />
                            </div>
                            <h3 className="text-xl font-display font-bold uppercase mb-2 text-white">
                                Cores Personalizadas
                            </h3>
                            <p className="text-gray-400 font-sans font-light">
                                Escolha cores para combinar com sua marca ou use paletas prontas
                            </p>
                        </div>
                        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 text-center">
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Settings className="text-accent" size={32} />
                            </div>
                            <h3 className="text-xl font-display font-bold uppercase mb-2 text-white">
                                Configurações Avançadas
                            </h3>
                            <p className="text-gray-400 font-sans font-light">
                                Ajuste o nível de correção de erro e outras opções técnicas
                            </p>
                        </div>
                        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 text-center">
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Download className="text-accent" size={32} />
                            </div>
                            <h3 className="text-xl font-display font-bold uppercase mb-2 text-white">
                                PNG e SVG
                            </h3>
                            <p className="text-gray-400 font-sans font-light">
                                Baixe em PNG para web ou SVG para impressão de alta qualidade
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GeradorQRCode;

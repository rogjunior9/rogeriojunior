import React from "react";

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    loading?: "lazy" | "eager";
    sizes?: string;
    priority?: boolean;
}

/**
 * Generates responsive WebP URLs for Unsplash images
 * Supports automatic format conversion and multiple sizes
 */
const generateSrcSet = (baseUrl: string): string => {
    // Check if it's an Unsplash image
    if (!baseUrl.includes("unsplash.com")) {
        return "";
    }

    // Remove existing width parameter and format
    const cleanUrl = baseUrl
        .replace(/&w=\d+/g, "")
        .replace(/&fm=\w+/g, "")
        .replace(/&q=\d+/g, "");

    // Responsive breakpoints for srcset
    const widths = [400, 600, 800, 1200];

    return widths
        .map((w) => `${cleanUrl}&w=${w}&fm=webp&q=75 ${w}w`)
        .join(", ");
};

/**
 * Gets the WebP version of the image
 */
const getWebPUrl = (baseUrl: string, width: number = 800): string => {
    if (!baseUrl.includes("unsplash.com")) {
        return baseUrl;
    }

    // Remove existing parameters and add WebP format
    const cleanUrl = baseUrl
        .replace(/&w=\d+/g, "")
        .replace(/&fm=\w+/g, "")
        .replace(/&q=\d+/g, "");

    return `${cleanUrl}&w=${width}&fm=webp&q=75`;
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    className = "",
    width = 800,
    height = 450,
    loading = "lazy",
    sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px",
    priority = false,
}) => {
    const isUnsplash = src.includes("unsplash.com");
    const srcSet = isUnsplash ? generateSrcSet(src) : undefined;
    const webpSrc = isUnsplash ? getWebPUrl(src, width) : src;

    return (
        <picture>
            {isUnsplash && (
                <source
                    type="image/webp"
                    srcSet={srcSet}
                    sizes={sizes}
                />
            )}
            <img
                src={webpSrc}
                alt={alt}
                className={className}
                width={width}
                height={height}
                loading={priority ? "eager" : loading}
                decoding={priority ? "sync" : "async"}
                fetchPriority={priority ? "high" : "auto"}
            />
        </picture>
    );
};

export default OptimizedImage;

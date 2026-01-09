import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    type?: 'website' | 'article' | 'tool';
    keywords?: string;
    noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical,
    image = 'https://www.rogeriojunior.com.br/images/rj.jpg',
    type = 'website',
    keywords,
    noIndex = false,
}) => {
    const siteTitle = 'Rogério Júnior';
    const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
    const baseUrl = 'https://www.rogeriojunior.com.br';
    const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {noIndex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow" />
            )}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type === 'tool' ? 'website' : type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:locale" content="pt_BR" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:site" content="@Rogjunior9" />
            <meta name="twitter:creator" content="@Rogjunior9" />
        </Helmet>
    );
};

export default SEO;

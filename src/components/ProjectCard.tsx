import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  category?: string;
  tags: string[];
  link?: string;
  ctaLabel?: string;
  isHighlighted?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image,
  category,
  tags,
  link,
  ctaLabel = "Acessar projeto",
  isHighlighted = false,
}) => {
  const cardContent = (
    <article
      id={id}
      className={`group flex flex-col h-full overflow-hidden rounded-xl bg-zinc-950 border transition-all duration-200 ${
        isHighlighted
          ? "border-[#B91C1C] ring-2 ring-[#B91C1C]"
          : "border-zinc-800 hover:border-[#B91C1C]"
      }`}
    >
      <div className="relative aspect-video overflow-hidden bg-black border-b border-zinc-800">
        {image ? (
          <OptimizedImage
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={800}
            height={450}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
          />
        ) : (
          <div className="h-full w-full flex flex-col justify-between p-6 bg-black relative">
            <div className="flex items-center justify-between">
              <img
                src="/images/logo-rj.svg"
                alt="RJ"
                className="w-9 h-9 text-white"
              />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#B91C1C]">
                Sistema RJ
              </span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold tracking-[-0.03em] text-white">
                {title}
              </span>
            </div>
          </div>
        )}

        {category && (
          <span className="absolute top-3 left-3 bg-black/90 border border-zinc-700 text-white px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider">
            {category}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
          <h3 className="text-xl font-extrabold tracking-[-0.02em] mb-2 text-white">
            {title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed font-medium">
            {description}
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-zinc-900 border border-zinc-800 text-gray-300 px-2.5 py-1 rounded text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {link && (
            <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#B91C1C] transition-colors">
              <span>{ctaLabel}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </div>
          )}
        </div>
      </div>
    </article>
  );

  if (!link) {
    return cardContent;
  }

  if (link.startsWith("/")) {
    return (
      <Link to={link} aria-label={`Ver projeto ${title}`} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ver projeto ${title}`}
      className="block h-full"
    >
      {cardContent}
    </a>
  );
};

export default ProjectCard;

import React from "react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  isHighlighted?: boolean; // Adicionado para permitir destaque opcional
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image,
  tags,
  link,
  isHighlighted = false, // Valor padrão é false
}) => {
  return (
    <a href={link || "#"}>
      <div
        id={id}
        className={`group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 transition-all hover:scale-[1.02] ${isHighlighted ? 'ring-2 ring-accent scale-105' : ''
          }`}
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-display font-bold mb-2 text-white uppercase">{title}</h3>
          <p className="text-gray-400 mb-4 font-sans font-light">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-accent/10 text-accent px-3 py-1 rounded-none text-sm font-display uppercase tracking-wider font-bold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;

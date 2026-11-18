import React, { ReactNode } from 'react';

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-xl text-left hover:border-[#B91C1C] transition-colors">
      <div className="inline-flex p-2.5 bg-[#B91C1C]/10 text-[#B91C1C] rounded-lg mb-3">
        {icon}
      </div>
      <h3 className="font-extrabold text-sm uppercase tracking-tight text-white mb-1">{title}</h3>
      <p className="text-xs text-gray-400 font-medium">{description}</p>
    </div>
  );
};

export default SkillCard;

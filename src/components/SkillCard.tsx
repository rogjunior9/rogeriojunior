import React, { ReactNode } from 'react';

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-zinc-800 p-2 rounded-lg text-center hover:bg-zinc-700 transition-colors">
      <div className="inline-block p-3 bg-blue-500/10 rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="font-bold mb-1">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default SkillCard;
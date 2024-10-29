import React from 'react';
import { Tool } from '../types';
import * as Icons from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
  onClick: (url: string) => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick }) => {
  const Icon = Icons[tool.icon as keyof typeof Icons];

  return (
    <div 
      onClick={() => onClick(tool.url)}
      className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl will-change-transform"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-lg bg-[#001c39] text-white transform transition-all duration-300 group-hover:rotate-12">
          <Icon size={24} />
        </div>
        {tool.featured && (
          <span className="ml-auto text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full transition-all duration-300 hover:bg-yellow-200">
            Featured
          </span>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#001c39]">{tool.name}</h3>
      <p className="text-gray-600">{tool.description}</p>
    </div>
  );
};
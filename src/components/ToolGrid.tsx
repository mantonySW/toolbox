import React from 'react';
import { ToolCard } from './ToolCard';
import { Tool } from '../types';

interface ToolGridProps {
  tools: Tool[];
  onToolSelect: (url: string) => void;
}

export const ToolGrid: React.FC<ToolGridProps> = ({ tools, onToolSelect }) => {
  const featuredTools = tools.filter(tool => tool.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {featuredTools.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-6 text-[#001c39]">Featured Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} onClick={onToolSelect} />
            ))}
          </div>
        </>
      )}
      
      <h2 className="text-2xl font-bold mb-6 text-[#001c39]">All Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map(tool => (
          <ToolCard key={tool.id} tool={tool} onClick={onToolSelect} />
        ))}
      </div>
    </div>
  );
};
import React from 'react';
import { ToolCard } from './ToolCard';
import { Tool } from '../types';

interface ToolGridProps {
  tools: Tool[];
  onToolSelect: (url: string) => void;
}

export const ToolGrid: React.FC<ToolGridProps> = ({ tools, onToolSelect }) => {
  const featuredTools = tools.filter(tool => tool.featured);
  const regularTools = tools.map(tool => ({
    ...tool,
    featured: false // Remove featured tag in All Tools section
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {featuredTools.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-6 text-[#001c39] transition-all duration-300">Featured Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredTools.map((tool, index) => (
              <div
                key={tool.id}
                className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ToolCard tool={tool} onClick={onToolSelect} />
              </div>
            ))}
          </div>
        </>
      )}
      
      <h2 className="text-2xl font-bold mb-6 text-[#001c39] transition-all duration-300">All Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularTools.map((tool, index) => (
          <div
            key={tool.id}
            className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ToolCard tool={tool} onClick={onToolSelect} />
          </div>
        ))}
      </div>
    </div>
  );
};
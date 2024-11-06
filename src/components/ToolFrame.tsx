import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Tool } from '../types';

interface ToolFrameProps {
  tool: Tool;
}

export const ToolFrame: React.FC<ToolFrameProps> = ({ tool }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#001c39] p-4 flex items-center shadow-lg">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-white hover:text-gray-200 transition-all duration-300 hover:translate-x-[-4px]"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to SLX Toolbox
        </button>
      </div>
      <iframe
        src={tool.url}
        className="flex-1 w-full"
        title={tool.name}
      />
    </div>
  );
};
import React from 'react';
import { LayoutDashboard, LineChart, Target } from 'lucide-react';

interface HeaderProps {
  view: 'journey' | 'metrics' | 'strategy';
  onViewChange: (view: 'journey' | 'metrics' | 'strategy') => void;
}

export function Header({ view, onViewChange }: HeaderProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg mt-6 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-staccato-black">
          {view === 'journey' 
            ? 'VIP Journey Timeline' 
            : view === 'metrics' 
              ? 'Journey Metrics'
              : 'Strategy & Programs'}
        </h1>
        <div className="flex space-x-2">
          <button
            onClick={() => onViewChange('journey')}
            className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
              view === 'journey'
                ? 'bg-staccato-red text-white'
                : 'bg-gray-100 text-staccato-gray hover:bg-gray-200'
            }`}
          >
            <LineChart className="h-4 w-4" />
            <span>Journey</span>
          </button>
          <button
            onClick={() => onViewChange('metrics')}
            className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
              view === 'metrics'
                ? 'bg-staccato-red text-white'
                : 'bg-gray-100 text-staccato-gray hover:bg-gray-200'
            }`}
          >
            <LayoutDashboard className="h-4 w-4" />
            <span>Metrics</span>
          </button>
          <button
            onClick={() => onViewChange('strategy')}
            className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
              view === 'strategy'
                ? 'bg-staccato-red text-white'
                : 'bg-gray-100 text-staccato-gray hover:bg-gray-200'
            }`}
          >
            <Target className="h-4 w-4" />
            <span>Strategy</span>
          </button>
        </div>
      </div>
    </div>
  );
}
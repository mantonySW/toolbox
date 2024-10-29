import React from 'react';
import { getTimeOfDay } from '../utils/timeUtils';

export const Header: React.FC = () => {
  const timeOfDay = getTimeOfDay();
  const emoji = {
    morning: '☀️',
    afternoon: '🌤️',
    evening: '🌙'
  }[timeOfDay];

  return (
    <header className="text-center py-8 bg-gradient-to-r from-[#001c39] to-[#003366]">
      <img 
        src="https://slxcloud.app/wp-content/uploads/2024/03/SLX-logo-darkmode.png"
        alt="SLX Cloud Logo"
        className="h-12 mx-auto mb-6"
      />
      <h1 className="text-3xl font-bold text-white mb-2">
        Good {timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)} SLXers! {emoji}
      </h1>
      <p className="text-white/80 italic max-w-2xl mx-auto px-4">
        "We are not obligated to follow this calling because we have a talent or skill. 
        It's worth remembering that we are blessed to get to create. It's a privilege. 
        We're choosing it."
        <span className="block mt-2">- Rick Rubin</span>
      </p>
    </header>
  );
};
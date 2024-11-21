import React from 'react';
import { motion } from 'framer-motion';
import { Check, Circle, ArrowRight, MessageSquare, Phone, Mail } from 'lucide-react';
import { JourneyDay } from '../types';

interface TimelineProps {
  data: JourneyDay[];
  selectedDay: number;
  onDaySelect: (day: number) => void;
}

export function JourneyTimeline({ data, selectedDay, onDaySelect }: TimelineProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center space-x-16 overflow-x-auto pb-8 pt-8 px-8">
        {data.map((day, index) => (
          <TimelineNode
            key={day.day}
            day={day}
            index={index}
            isSelected={index === selectedDay}
            onSelect={() => onDaySelect(index)}
            isLast={index === data.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

function TimelineNode({ 
  day, 
  index, 
  isSelected, 
  onSelect, 
  isLast 
}: { 
  day: JourneyDay;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
  isLast: boolean;
}) {
  const getCommunicationIcons = (communications: JourneyDay['communications']) => {
    const icons = new Set(communications.map(c => c.channel));
    return (
      <div className="flex -space-x-1">
        {icons.has('email') && (
          <div className="w-4 h-4 bg-staccato-alice rounded-full flex items-center justify-center">
            <Mail className="w-2.5 h-2.5 text-staccato-primary" />
          </div>
        )}
        {icons.has('phone') && (
          <div className="w-4 h-4 bg-staccato-accent/10 rounded-full flex items-center justify-center">
            <Phone className="w-2.5 h-2.5 text-staccato-accent" />
          </div>
        )}
        {icons.has('text') && (
          <div className="w-4 h-4 bg-staccato-primary/10 rounded-full flex items-center justify-center">
            <MessageSquare className="w-2.5 h-2.5 text-staccato-primary" />
          </div>
        )}
      </div>
    );
  };

  const getStatusIcon = () => {
    if (isSelected) {
      return <ArrowRight className="w-5 h-5 text-white" />;
    }
    return day.completed ? (
      <Check className="w-5 h-5 text-staccato-accent" />
    ) : (
      <Circle className="w-5 h-5 text-staccato-primary" />
    );
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onSelect}
      className={`
        relative flex flex-col items-center min-w-[180px] pt-2
        ${isSelected ? 'scale-105' : ''}
      `}
    >
      <div
        className={`
          w-14 h-14 rounded-full flex items-center justify-center relative z-10
          ${isSelected 
            ? 'bg-staccato-primary ring-4 ring-staccato-alice' 
            : day.completed
              ? 'bg-staccato-accent/10'
              : 'bg-staccato-alice'
          }
        `}
      >
        {getStatusIcon()}
      </div>
      
      <div className="mt-4 text-sm font-medium text-staccato-primary">
        Day {day.day}
      </div>
      
      <div className="text-xs text-staccato-gray mt-1 max-w-[160px] text-center truncate">
        {day.title}
      </div>

      <div className="mt-3">
        {getCommunicationIcons(day.communications)}
      </div>

      {!isLast && (
        <div 
          className={`
            absolute top-9 left-[calc(50%+3.5rem)] w-[calc(100%-3.5rem)] h-[2px]
            ${day.completed ? 'bg-staccato-accent/20' : 'bg-staccato-alice'}
          `}
        />
      )}
    </motion.button>
  );
}
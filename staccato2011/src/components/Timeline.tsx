import React from 'react';
import { Check, Clock } from 'lucide-react';
import { JourneyDay } from '../types';

interface TimelineProps {
  data: JourneyDay[];
  selectedDay: number;
  onDaySelect: (day: number) => void;
}

export function Timeline({ data, selectedDay, onDaySelect }: TimelineProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <div className="flex items-center space-x-4">
        {data.map((day, index) => (
          <React.Fragment key={day.day}>
            <button
              onClick={() => onDaySelect(index)}
              className={`relative flex flex-col items-center group ${
                index === selectedDay ? 'scale-110' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  day.completed
                    ? 'bg-green-100 text-green-600'
                    : 'bg-staccato-red bg-opacity-10 text-staccato-red'
                }`}
              >
                {day.completed ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Clock className="h-4 w-4" />
                )}
              </div>
              <div className="mt-2 text-sm font-medium text-staccato-gray">
                Day {day.day}
              </div>
              {index < data.length - 1 && (
                <div className="absolute top-4 left-8 w-full h-0.5 bg-gray-200" />
              )}
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
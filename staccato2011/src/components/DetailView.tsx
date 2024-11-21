import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { JourneyDay } from '../types';

interface DetailViewProps {
  day: number;
  data: JourneyDay;
}

export function DetailView({ day, data }: DetailViewProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-staccato-black">{data.title}</h2>
            <p className="text-staccato-gray mt-1">{data.description}</p>
          </div>
          <div className={`px-3 py-1 rounded-full ${
            data.completed ? 'bg-green-100 text-green-800' : 'bg-staccato-red bg-opacity-10 text-staccato-red'
          }`}>
            {data.completed ? 'Completed' : 'Pending'}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <MetricCard
            title="Response Rate"
            value={data.metrics.responseRate}
            type="percentage"
          />
          <MetricCard
            title="Satisfaction"
            value={data.metrics.satisfaction}
            type="percentage"
          />
          <MetricCard
            title="Engagement"
            value={data.metrics.engagement}
            type="percentage"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-staccato-black">Communications</h3>
          <div className="space-y-3">
            {data.communications.map((comm, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-3 bg-staccato-silver rounded-lg"
              >
                <MessageSquare className="h-5 w-5 text-staccato-red mt-1" />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-staccato-black">
                      {comm.type === 'automated' ? 'Automated' : 'Personal'}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-staccato-gray">{comm.channel}</span>
                  </div>
                  <p className="text-staccato-gray mt-1">{comm.content}</p>
                  {comm.owner && (
                    <p className="text-sm text-staccato-gray mt-1">Owner: {comm.owner}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-staccato-black">Next Steps</h3>
          <div className="space-y-2">
            {data.nextSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-staccato-gray"
              >
                <ArrowRight className="h-4 w-4 text-staccato-red" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: number;
  type: 'percentage' | 'number';
}

function MetricCard({ title, value, type }: MetricCardProps) {
  return (
    <div className="bg-staccato-silver p-4 rounded-lg">
      <h4 className="text-sm font-medium text-staccato-gray">{title}</h4>
      <div className="mt-2 flex items-baseline">
        <span className="text-2xl font-bold text-staccato-black">
          {value}
        </span>
        {type === 'percentage' && (
          <span className="ml-1 text-staccato-gray">%</span>
        )}
      </div>
    </div>
  );
}
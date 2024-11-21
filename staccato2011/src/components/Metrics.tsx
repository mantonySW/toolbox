import React from 'react';
import { BarChart3, TrendingUp, Users } from 'lucide-react';
import { JourneyDay } from '../types';

interface MetricsProps {
  data: JourneyDay[];
}

export function Metrics({ data }: MetricsProps) {
  const overallMetrics = calculateOverallMetrics(data);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <MetricCard
          title="Overall Response Rate"
          value={overallMetrics.responseRate}
          icon={<BarChart3 className="h-6 w-6" />}
          trend={+2.5}
        />
        <MetricCard
          title="Average Satisfaction"
          value={overallMetrics.satisfaction}
          icon={<Users className="h-6 w-6" />}
          trend={+1.8}
        />
        <MetricCard
          title="Engagement Score"
          value={overallMetrics.engagement}
          icon={<TrendingUp className="h-6 w-6" />}
          trend={+3.2}
        />
      </div>

      <div className="bg-white shadow-sm rounded-lg p-6">
        <h3 className="text-lg font-semibold text-staccato-primary mb-4">Journey Progress</h3>
        <div className="space-y-4">
          {data.map((day, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-staccato-gray">Day {day.day}: {day.title}</span>
                <span className="text-sm text-staccato-gray">
                  Response Rate: {day.metrics.responseRate}%
                </span>
              </div>
              <div className="h-2 bg-staccato-alice rounded-full overflow-hidden">
                <div
                  className="h-full bg-staccato-graph rounded-full"
                  style={{ width: `${day.metrics.responseRate}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <CommunicationBreakdown data={data} />
        <SatisfactionTrend data={data} />
      </div>
    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  trend: number;
}

function MetricCard({ title, value, icon, trend }: MetricCardProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div className="text-staccato-graph">{icon}</div>
        <div className={`text-sm ${
          trend > 0 ? 'text-green-600' : 'text-red-600'
        }`}>
          {trend > 0 ? '+' : ''}{trend}%
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-staccato-gray">{title}</h3>
        <p className="mt-2 text-3xl font-bold text-staccato-primary">{value}%</p>
      </div>
    </div>
  );
}

function CommunicationBreakdown({ data }: { data: JourneyDay[] }) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <h3 className="text-lg font-semibold text-staccato-primary mb-4">
        Communication Breakdown
      </h3>
      <div className="space-y-4">
        {['email', 'phone', 'text'].map((channel) => {
          const percentage = calculateChannelPercentage(data, channel);
          return (
            <div key={channel} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="capitalize text-staccato-gray">{channel}</span>
                <span className="text-sm text-staccato-gray">{percentage}%</span>
              </div>
              <div className="h-2 bg-staccato-alice rounded-full overflow-hidden">
                <div
                  className="h-full bg-staccato-graph rounded-full"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SatisfactionTrend({ data }: { data: JourneyDay[] }) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <h3 className="text-lg font-semibold text-staccato-primary mb-4">
        Satisfaction Trend
      </h3>
      <div className="h-48 flex items-end space-x-2">
        {data.map((day, index) => (
          <div
            key={index}
            className="flex-1 bg-staccato-graph rounded-t"
            style={{ height: `${day.metrics.satisfaction}%` }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-sm text-staccato-gray">
        {data.map((day, index) => (
          <span key={index}>D{day.day}</span>
        ))}
      </div>
    </div>
  );
}

function calculateOverallMetrics(data: JourneyDay[]) {
  return {
    responseRate: Math.round(
      data.reduce((acc, day) => acc + day.metrics.responseRate, 0) / data.length
    ),
    satisfaction: Math.round(
      data.reduce((acc, day) => acc + day.metrics.satisfaction, 0) / data.length
    ),
    engagement: Math.round(
      data.reduce((acc, day) => acc + day.metrics.engagement, 0) / data.length
    ),
  };
}

function calculateChannelPercentage(data: JourneyDay[], channel: string) {
  const total = data.reduce(
    (acc, day) => acc + day.communications.length,
    0
  );
  const channelCount = data.reduce(
    (acc, day) =>
      acc +
      day.communications.filter((comm) => comm.channel === channel).length,
    0
  );
  return Math.round((channelCount / total) * 100);
}
import React from 'react';
import { Award, TrendingUp, Users, Target } from 'lucide-react';
import { StrategyProgram } from '../types';
import { referralPrograms, repurchasePrograms } from '../data/strategyData';

export function StrategyView() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-6">
        <ProgramSection
          title="Referral Programs"
          programs={referralPrograms}
          icon={<Users className="h-6 w-6 text-blue-600" />}
        />
        <ProgramSection
          title="Repurchase Programs"
          programs={repurchasePrograms}
          icon={<Target className="h-6 w-6 text-blue-600" />}
        />
      </div>
      
      <PerformanceMetrics />
    </div>
  );
}

function ProgramSection({ title, programs, icon }: {
  title: string;
  programs: StrategyProgram[];
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        {icon}
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
      
      <div className="space-y-4">
        {programs.map((program) => (
          <div key={program.name} className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-gray-900">{program.name}</h3>
                <p className="text-sm text-gray-600">{program.description}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-sm ${
                program.status === 'active' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {program.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <MetricItem
                label="Conversion"
                value={program.metrics.conversionRate}
              />
              <MetricItem
                label="Participation"
                value={program.metrics.participationRate}
              />
              <MetricItem
                label="Satisfaction"
                value={program.metrics.satisfactionScore}
              />
              <MetricItem
                label="Engagement"
                value={program.metrics.engagementRate}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MetricItem({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-600">{label}</span>
      <span className="font-semibold text-gray-900">{value}%</span>
    </div>
  );
}

function PerformanceMetrics() {
  const metrics = {
    referral: {
      total: 245,
      growth: 12.5,
      quality: 94
    },
    repurchase: {
      rate: 68,
      value: 15.8,
      satisfaction: 96
    }
  };

  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Overall Performance</h2>
      
      <div className="grid grid-cols-3 gap-6">
        <MetricCard
          title="Total Referrals"
          value={metrics.referral.total}
          trend={metrics.referral.growth}
          icon={<Users className="h-6 w-6" />}
        />
        <MetricCard
          title="Repurchase Rate"
          value={metrics.repurchase.rate}
          trend={metrics.repurchase.value}
          icon={<TrendingUp className="h-6 w-6" />}
          isPercentage
        />
        <MetricCard
          title="Program Quality"
          value={metrics.referral.quality}
          trend={5.2}
          icon={<Award className="h-6 w-6" />}
          isPercentage
        />
      </div>
    </div>
  );
}

function MetricCard({ 
  title, 
  value, 
  trend, 
  icon, 
  isPercentage 
}: { 
  title: string; 
  value: number; 
  trend: number; 
  icon: React.ReactNode;
  isPercentage?: boolean;
}) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-blue-600">{icon}</div>
        <div className={`text-sm ${
          trend > 0 ? 'text-green-600' : 'text-red-600'
        }`}>
          {trend > 0 ? '+' : ''}{trend}%
        </div>
      </div>
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      <p className="mt-2 text-2xl font-bold text-gray-900">
        {value}{isPercentage ? '%' : ''}
      </p>
    </div>
  );
}
import React from 'react';
import { MessageSquare, Clock, Shield, Users } from 'lucide-react';

export function Guidelines() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <GuidelineSection
          title="Brand Voice"
          icon={<MessageSquare className="h-6 w-6 text-staccato-blue" />}
          items={[
            'Professional but warm',
            'Knowledgeable and confident',
            'Personal and authentic',
            'Solution-oriented'
          ]}
        />
        
        <GuidelineSection
          title="Response Times"
          icon={<Clock className="h-6 w-6 text-staccato-blue" />}
          items={[
            'Texts: Within 1 hour',
            'Calls: Same business day',
            'Emails: Within 4 hours',
            'Issues: Immediate escalation'
          ]}
        />

        <GuidelineSection
          title="Communication Standards"
          icon={<Shield className="h-6 w-6 text-staccato-blue" />}
          items={[
            'Reference previous conversations',
            "Use client preferred name",
            'Mention specific purchase details',
            'Focus on unique goals'
          ]}
        />

        <GuidelineSection
          title="Channel Selection"
          icon={<Users className="h-6 w-6 text-staccato-blue" />}
          items={[
            'Honor stated preferences',
            'Match urgency to channel',
            'Vary contact methods',
            'Maintain consistency'
          ]}
        />
      </div>

      <JourneyFlexibility />
      <DataCollection />
    </div>
  );
}

function GuidelineSection({ 
  title, 
  icon, 
  items 
}: { 
  title: string; 
  icon: React.ReactNode; 
  items: string[];
}) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center space-x-3 mb-4">
        {icon}
        <h3 className="text-lg font-semibold text-staccato-navy">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-staccato-blue" />
            <span className="text-staccato-gray">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function JourneyFlexibility() {
  const flexibilityPoints = [
    'Adjust timing based on client engagement',
    'Customize communication style to client preference',
    'Accelerate or decelerate based on response',
    'Add touchpoints for high-engagement clients',
    'Modify approach based on purchase history'
  ];

  return (
    <div className="bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
      <h3 className="text-lg font-semibold text-staccato-navy mb-4">Journey Flexibility</h3>
      <p className="text-staccato-gray mb-4">
        This journey should be treated as a framework rather than a rigid script.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {flexibilityPoints.map((point, index) => (
          <div key={index} className="flex items-start space-x-3 bg-staccato-alice p-3 rounded-lg">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <span className="text-staccato-blue text-sm font-medium">{index + 1}</span>
            </div>
            <span className="text-staccato-gray">{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DataCollection() {
  const dataPoints = [
    'Interaction success/failure',
    'Client response sentiment',
    'Next action triggers',
    'Preference updates',
    'Opportunity notes'
  ];

  return (
    <div className="bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
      <h3 className="text-lg font-semibold text-staccato-navy mb-4">Data Collection Requirements</h3>
      <p className="text-staccato-gray mb-4">
        Each touchpoint should gather the following information:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dataPoints.map((point, index) => (
          <div 
            key={index}
            className="bg-staccato-alice p-4 rounded-lg border-l-4 border-staccato-blue"
          >
            <span className="text-staccato-gray">{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
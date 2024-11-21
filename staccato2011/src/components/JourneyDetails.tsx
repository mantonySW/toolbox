import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  ArrowRight, 
  Mail, 
  Phone, 
  CheckCircle,
  Clock,
  BarChart2,
  FileText
} from 'lucide-react';
import { JourneyDay } from '../types';
import { TemplateModal } from './TemplateModal';
import { templates } from '../data/templateData';

interface DetailsProps {
  day: number;
  data: JourneyDay;
}

export function JourneyDetails({ day, data }: DetailsProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<null | {
    title: string;
    content: string;
    type: 'email' | 'script';
  }>(null);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={day}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="grid grid-cols-3 gap-6"
        >
          {/* Main Content */}
          <div className="col-span-2 space-y-6">
            <MainInfoCard data={data} />
            <CommunicationsCard 
              communications={data.communications}
              onViewTemplate={(template) => setSelectedTemplate(template)}
              dayNumber={data.day}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <MetricsCard metrics={data.metrics} />
            <NextStepsCard steps={data.nextSteps} />
          </div>
        </motion.div>
      </AnimatePresence>

      <TemplateModal
        isOpen={selectedTemplate !== null}
        onClose={() => setSelectedTemplate(null)}
        template={selectedTemplate || { title: '', content: '', type: 'email' }}
      />
    </>
  );
}

function MainInfoCard({ data }: { data: JourneyDay }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-staccato-navy">{data.title}</h2>
          <p className="text-staccato-gray mt-1">{data.description}</p>
        </div>
        <div className={`px-3 py-1 rounded-full ${
          data.completed 
            ? 'bg-green-100 text-green-800' 
            : 'bg-staccato-alice text-staccato-blue'
        }`}>
          {data.completed ? 'Completed' : 'Pending'}
        </div>
      </div>
    </div>
  );
}

function CommunicationsCard({ 
  communications, 
  onViewTemplate,
  dayNumber
}: { 
  communications: JourneyDay['communications'];
  onViewTemplate: (template: { title: string; content: string; type: 'email' | 'script' }) => void;
  dayNumber: number;
}) {
  const getIcon = (channel: string) => {
    switch (channel) {
      case 'email': return Mail;
      case 'phone': return Phone;
      default: return MessageSquare;
    }
  };

  // Only show template button if templates exist for this specific day
  const hasTemplates = templates.hasOwnProperty(dayNumber);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-staccato-navy mb-4">Communications</h3>
      <div className="space-y-4">
        {communications.map((comm, index) => {
          const Icon = getIcon(comm.channel);
          const template = hasTemplates ? templates[dayNumber]?.[index] : null;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-4 p-4 bg-staccato-alice rounded-lg"
            >
              <div className="flex-shrink-0">
                <Icon className="w-5 h-5 text-staccato-blue" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-staccato-navy">
                      {comm.type === 'automated' ? 'Automated' : 'Personal'}
                    </span>
                    <span className="text-staccato-gray">•</span>
                    <span className="text-sm text-staccato-gray">{comm.channel}</span>
                  </div>
                  {template && (
                    <button
                      onClick={() => onViewTemplate({
                        title: `Day ${dayNumber} - ${comm.type} ${comm.channel}`,
                        content: template,
                        type: comm.channel === 'email' ? 'email' : 'script'
                      })}
                      className="flex items-center space-x-1 text-sm text-staccato-blue hover:text-staccato-navy transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      <span>View Template</span>
                    </button>
                  )}
                </div>
                <p className="mt-1 text-staccato-gray">{comm.content}</p>
                {comm.owner && (
                  <p className="mt-2 text-sm text-staccato-gray">Owner: {comm.owner}</p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function MetricsCard({ metrics }: { metrics: JourneyDay['metrics'] }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-staccato-navy mb-4">Metrics</h3>
      <div className="space-y-4">
        <MetricItem
          label="Response Rate"
          value={metrics.responseRate}
          icon={<MessageSquare className="w-5 h-5" />}
        />
        <MetricItem
          label="Satisfaction"
          value={metrics.satisfaction}
          icon={<CheckCircle className="w-5 h-5" />}
        />
        <MetricItem
          label="Engagement"
          value={metrics.engagement}
          icon={<BarChart2 className="w-5 h-5" />}
        />
      </div>
    </div>
  );
}

function MetricItem({ 
  label, 
  value, 
  icon 
}: { 
  label: string; 
  value: number; 
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between p-3 bg-staccato-alice rounded-lg">
      <div className="flex items-center space-x-3">
        <div className="text-staccato-blue">{icon}</div>
        <span className="text-staccato-gray">{label}</span>
      </div>
      <span className="font-semibold text-staccato-navy">{value}%</span>
    </div>
  );
}

function NextStepsCard({ steps }: { steps: string[] }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-staccato-navy mb-4">Next Steps</h3>
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-3 bg-staccato-alice rounded-lg"
          >
            <div className="flex-shrink-0 mt-1">
              <Clock className="w-5 h-5 text-staccato-blue" />
            </div>
            <span className="text-staccato-gray">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
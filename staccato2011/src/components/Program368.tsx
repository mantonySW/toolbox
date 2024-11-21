import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Star, 
  Award, 
  Crosshair,
  ChevronRight,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { program368Data } from '../data/program368Data';

export function Program368() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<any | null>(null);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  const handlePathSelect = (pathId: string) => {
    setSelectedPath(pathId);
    setSelectedProgram(null);
  };

  const handleProgramSelect = (program: any) => {
    setSelectedProgram(program);
  };

  const handleStepComplete = (stepId: string) => {
    setCompletedSteps([...completedSteps, stepId]);
  };

  return (
    <div className="space-y-8">
      {/* Program Introduction */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-playfair text-staccato-primary mb-6">
            Staccato 368: Liberty Through Excellence
          </h1>
          <div className="grid grid-cols-3 gap-4">
            <Stat label="Community Members" value="5,000+" />
            <Stat label="Training Hours" value="25,000+" />
            <Stat label="Success Rate" value="94%" />
          </div>
        </div>
      </div>

      {/* Path Selection */}
      {!selectedPath && (
        <div className="grid grid-cols-3 gap-6">
          {program368Data.paths.map((path) => (
            <PathCard
              key={path.id}
              path={path}
              onSelect={() => handlePathSelect(path.id)}
            />
          ))}
        </div>
      )}

      {/* Selected Path View */}
      {selectedPath && !selectedProgram && (
        <div className="space-y-6">
          <button
            onClick={() => setSelectedPath(null)}
            className="flex items-center text-staccato-primary hover:text-staccato-accent"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            <span>Back to Paths</span>
          </button>
          
          <div className="grid grid-cols-2 gap-6">
            {program368Data.paths
              .find(p => p.id === selectedPath)
              ?.programs.map((program) => (
                <ProgramCard
                  key={program.id}
                  program={program}
                  onSelect={() => handleProgramSelect(program)}
                />
              ))}
          </div>
        </div>
      )}

      {/* Selected Program View */}
      {selectedProgram && (
        <div className="space-y-6">
          <button
            onClick={() => setSelectedProgram(null)}
            className="flex items-center text-staccato-primary hover:text-staccato-accent"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            <span>Back to Programs</span>
          </button>
          
          <ProgramDetails
            program={selectedProgram}
            completedSteps={completedSteps}
            onStepComplete={handleStepComplete}
          />
        </div>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-staccato-alice rounded-lg p-4">
      <div className="text-2xl font-bold text-staccato-primary">{value}</div>
      <div className="text-sm text-staccato-gray">{label}</div>
    </div>
  );
}

function PathCard({ path, onSelect }: { path: any; onSelect: () => void }) {
  const icons = {
    referral: Users,
    repurchase: Target,
    mastery: Star,
  };

  const Icon = icons[path.id as keyof typeof icons];

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className="bg-white rounded-xl shadow-sm p-6 text-left hover:shadow-md transition-shadow"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-staccato-alice flex items-center justify-center">
          <Icon className="w-6 h-6 text-staccato-primary" />
        </div>
        <h3 className="text-xl font-playfair text-staccato-primary">{path.name}</h3>
      </div>
      <p className="text-staccato-gray mb-4">{path.description}</p>
      <div className="flex items-center text-staccato-accent">
        <span>Explore Path</span>
        <ArrowRight className="w-4 h-4 ml-2" />
      </div>
    </motion.button>
  );
}

function ProgramCard({ program, onSelect }: { program: any; onSelect: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className="bg-white rounded-xl shadow-sm p-6 text-left hover:shadow-md transition-shadow"
    >
      <h4 className="text-lg font-playfair text-staccato-primary mb-2">
        {program.name}
      </h4>
      <p className="text-staccato-gray mb-4">{program.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-staccato-accent">
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </div>
        <div className="flex items-center space-x-1">
          <Award className="w-4 h-4 text-staccato-primary" />
          <span className="text-sm text-staccato-gray">{program.reward}</span>
        </div>
      </div>
    </motion.button>
  );
}

function ProgramDetails({ 
  program, 
  completedSteps,
  onStepComplete 
}: { 
  program: any;
  completedSteps: string[];
  onStepComplete: (stepId: string) => void;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-playfair text-staccato-primary mb-6">
          {program.name}
        </h2>
        
        <div className="space-y-6">
          {program.steps.map((step: any, index: number) => (
            <div
              key={step.id}
              className="border rounded-lg p-4"
            >
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-staccato-alice flex items-center justify-center flex-shrink-0">
                  <span className="text-staccato-primary font-medium">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-staccato-primary mb-2">
                    {step.name}
                  </h3>
                  <p className="text-staccato-gray mb-4">{step.description}</p>
                  
                  {step.script && (
                    <div className="bg-staccato-alice rounded-lg p-4 mb-4">
                      <h4 className="text-sm font-medium text-staccato-primary mb-2">
                        Suggested Script
                      </h4>
                      <p className="text-staccato-gray">{step.script}</p>
                    </div>
                  )}
                  
                  {!completedSteps.includes(step.id) && (
                    <button
                      onClick={() => onStepComplete(step.id)}
                      className="flex items-center space-x-2 text-staccato-accent hover:text-staccato-primary transition-colors"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>Mark as Complete</span>
                    </button>
                  )}
                </div>
                
                {completedSteps.includes(step.id) && (
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span>Completed</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Header } from './components/Header';
import { ToolGrid } from './components/ToolGrid';
import { tools } from './data/tools';
import { ArrowLeft } from 'lucide-react';

function App() {
  const [selectedToolUrl, setSelectedToolUrl] = useState<string | null>(null);

  const handleToolSelect = (url: string) => {
    setSelectedToolUrl(url);
  };

  const handleBack = () => {
    setSelectedToolUrl(null);
  };

  if (selectedToolUrl) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="bg-[#001c39] p-4 flex items-center">
          <button
            onClick={handleBack}
            className="flex items-center text-white hover:text-gray-200 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to SLX Toolbox
          </button>
        </div>
        <iframe
          src={selectedToolUrl}
          className="flex-1 w-full"
          title="Selected Tool"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto py-8">
        <ToolGrid tools={tools} onToolSelect={handleToolSelect} />
      </main>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { Header } from './components/Header';
import { ToolGrid } from './components/ToolGrid';
import { AuthScreen } from './components/AuthScreen';
import { tools } from './data/tools';
import { ArrowLeft } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedToolUrl, setSelectedToolUrl] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState<string>();

  const handleToolSelect = (url: string) => {
    setIsTransitioning(true);
    setSelectedToolUrl(url);
  };

  const handleBack = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedToolUrl(null);
    }, 300);
  };

  const handleAuthenticate = (password: string) => {
    if (password === 'IRHCQKLGUrNnx2O') {
      setIsAuthenticated(true);
      setAuthError(undefined);
    } else {
      setAuthError('Incorrect password. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return <AuthScreen onAuthenticate={handleAuthenticate} error={authError} />;
  }

  if (selectedToolUrl) {
    return (
      <div className={`min-h-screen flex flex-col transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
           onTransitionEnd={() => setIsTransitioning(false)}>
        <div className="bg-[#001c39] p-4 flex items-center shadow-lg">
          <button
            onClick={handleBack}
            className="flex items-center text-white hover:text-gray-200 transition-all duration-300 hover:translate-x-[-4px]"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to SLX Toolbox
          </button>
        </div>
        <iframe
          src={selectedToolUrl}
          className="flex-1 w-full"
          title="Selected Tool"
          onLoad={() => setIsTransitioning(false)}
        />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
         onTransitionEnd={() => setIsTransitioning(false)}>
      <Header />
      <main className="container mx-auto py-8">
        <ToolGrid tools={tools} onToolSelect={handleToolSelect} />
      </main>
    </div>
  );
};

export default App;
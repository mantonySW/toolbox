import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { ToolGrid } from './components/ToolGrid';
import { AuthScreen } from './components/AuthScreen';
import { ToolFrame } from './components/ToolFrame';
import { tools } from './data/tools';

export const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState<string>();

  const handleAuthenticate = (email: string, password: string, path?: string) => {
    if (path === '/Staccato2011') {
      if (email.toLowerCase() === 'kristin.burke@staccato2011.com' && password === 'Culper368$s') {
        setIsAuthenticated(true);
        setAuthError(undefined);
      } else {
        setAuthError('Invalid email or password. Please try again.');
      }
    } else {
      if (email.toLowerCase() === 'design@saleslabx.com' && password === 'IRHCQKLGUrNnx2O') {
        setIsAuthenticated(true);
        setAuthError(undefined);
      } else {
        setAuthError('Invalid email or password. Please try again.');
      }
    }
  };

  return (
    <BrowserRouter>
      <AppContent 
        isAuthenticated={isAuthenticated} 
        authError={authError} 
        onAuthenticate={handleAuthenticate} 
      />
    </BrowserRouter>
  );
};

const AppContent: React.FC<{
  isAuthenticated: boolean;
  authError?: string;
  onAuthenticate: (email: string, password: string, path?: string) => void;
}> = ({ isAuthenticated, authError, onAuthenticate }) => {
  const location = useLocation();

  if (!isAuthenticated) {
    return <AuthScreen onAuthenticate={(email, password) => onAuthenticate(email, password, location.pathname)} error={authError} />;
  }

  return (
    <Routes>
      <Route
        path="/Staccato2011"
        element={
          <iframe
            src="https://jolly-druid-241225.netlify.app/"
            style={{ width: '100vw', height: '100vh', border: 'none' }}
            title="Staccato Portal"
          />
        }
      />
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto py-8">
              <ToolGrid tools={tools} />
            </main>
          </div>
        }
      />
      {tools.map(tool => (
        <Route
          key={tool.id}
          path={`/${tool.path}`}
          element={<ToolFrame tool={tool} />}
        />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
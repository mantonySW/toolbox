import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { ToolGrid } from './components/ToolGrid';
import { AuthScreen } from './components/AuthScreen';
import { ToolFrame } from './components/ToolFrame';
import { tools } from './data/tools';

export const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState<string>();

  const handleAuthenticate = (email: string, password: string) => {
    if (email.toLowerCase() === 'design@saleslabx.com' && password === 'IRHCQKLGUrNnx2O') {
      setIsAuthenticated(true);
      setAuthError(undefined);
    } else {
      setAuthError('Invalid email or password. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return <AuthScreen onAuthenticate={handleAuthenticate} error={authError} />;
  }

  return (
    <BrowserRouter>
      <Routes>
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
    </BrowserRouter>
  );
};
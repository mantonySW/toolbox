import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';

interface AuthScreenProps {
  onAuthenticate: (email: string, password: string) => void;
  error?: string;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ onAuthenticate, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAuthenticate(email, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#001c39] to-[#003366] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 transform transition-all">
        <div className="text-center mb-8">
          <div className="mb-6">
            <img 
              src="https://slxcloud.app/wp-content/uploads/2024/03/SLX-logo-darkmode.png"
              alt="SLX Cloud Logo"
              className="h-12 mx-auto"
            />
          </div>
          <div className="bg-[#001c39] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome to SLX Toolbox™</h2>
          <p className="text-gray-600 mt-2">Please sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#001c39] focus:border-transparent transition-all outline-none"
              placeholder="Email address"
              autoFocus
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#001c39] focus:border-transparent transition-all outline-none"
              placeholder="Password"
            />
          </div>
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-[#001c39] text-white py-3 rounded-lg hover:bg-[#002b57] transition-colors duration-300 font-medium"
          >
            Access Toolbox
          </button>
        </form>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (email.toLowerCase() === 'kristin.burke@staccato2011.com' && password === 'Culper368$s') {
      // Login successful
      setError('');
      // Add navigation logic here
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-staccato-smoke flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Logo Section */}
        <div className="text-center mb-8">
          <img 
            src="https://saleslabx.wpenginepowered.com/wp-content/uploads/2021/04/SLX-logo.png"
            alt="SalesLabX Logo"
            className="h-12 mx-auto mb-2"
          />
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-staccato-gray mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-staccato-alice focus:border-staccato-primary focus:ring-1 focus:ring-staccato-primary transition-colors"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-staccato-gray mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-staccato-alice focus:border-staccato-primary focus:ring-1 focus:ring-staccato-primary transition-colors"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-staccato-gray hover:text-staccato-primary transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-600 text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-staccato-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2"
            >
              <LogIn className="w-5 h-5" />
              <span>Sign In</span>
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-staccato-gray">
          Powered by SalesLabX
        </div>
      </motion.div>
    </div>
  );
}

export default App;
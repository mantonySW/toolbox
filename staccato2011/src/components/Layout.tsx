import React from 'react';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-staccato-smoke font-poppins">
      <nav className="bg-staccato-white border-b border-staccato-alice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24">
            <div className="flex items-center space-x-12">
              <img 
                src="https://images.contentstack.io/v3/assets/blted16ad9939ec9fa0/bltb001693ac96d0c49/6627d41cb0544163e299f600/blue-268-logo.png"
                alt="Staccato Logo"
                className="h-20 object-contain"
              />
              <div className="md:flex items-center">
                <span className="font-playfair text-h2 text-staccato-primary tracking-wide">VIP Journey</span>
              </div>
            </div>
            <div className="flex items-center opacity-40 hover:opacity-70 transition-opacity duration-200">
              <span className="text-xs text-staccato-gray mr-2">Powered by</span>
              <img 
                src="https://saleslabx.wpenginepowered.com/wp-content/uploads/2021/04/SLX-logo.png"
                alt="SalesLabX Logo"
                className="h-6 object-contain"
              />
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
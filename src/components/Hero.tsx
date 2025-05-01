import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToCategories = () => {
    const section = document.getElementById('sorting');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10%] opacity-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full mix-blend-screen filter blur-xl animate-blob"
              style={{
                background: `radial-gradient(circle, ${['rgba(66, 139, 202, 0.8)', 'rgba(147, 51, 234, 0.8)', 'rgba(59, 130, 246, 0.8)', 'rgba(139, 92, 246, 0.8)', 'rgba(248, 113, 113, 0.8)', 'rgba(236, 72, 153, 0.8)'][i % 6]} 0%, transparent 70%)`,
                width: `${Math.random() * 20 + 30}%`,
                height: `${Math.random() * 20 + 30}%`,
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${Math.random() * 10 + 20}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Algorithm Visualizers
            </span>
            <span className="block">Made Beautiful</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8">
            An interactive way to understand and visualize complex algorithms through elegant animations and step-by-step breakdowns.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#sorting" 
              onClick={(e) => { e.preventDefault(); scrollToCategories(); }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              Explore Visualizers
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <button 
            onClick={scrollToCategories}
            className="text-white/70 hover:text-white transition-colors p-2"
            aria-label="Scroll Down"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
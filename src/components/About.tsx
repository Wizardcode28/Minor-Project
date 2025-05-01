import React from 'react';
import { Code, GitBranch, BookOpen, Braces } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Code className="h-6 w-6 text-blue-400" />,
      title: 'Interactive Visualizations',
      description: 'Step through algorithms at your own pace with intuitive controls and real-time visualization.'
    },
    {
      icon: <GitBranch className="h-6 w-6 text-purple-400" />,
      title: 'Multiple Algorithms',
      description: 'Explore a wide range of algorithms from sorting and pathfinding to tree and graph traversals.'
    },
    {
      icon: <BookOpen className="h-6 w-6 text-pink-400" />,
      title: 'Educational Resources',
      description: 'Learn about time and space complexity, implementation details, and real-world applications.'
    },
    {
      icon: <Braces className="h-6 w-6 text-teal-400" />,
      title: 'Open Source',
      description: 'All visualizers are open source, allowing you to explore the code and contribute improvements.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About This Project
          </h2>
          
          <p className="text-white/80">
            This collection of algorithm visualizers was created to help students, developers, and anyone interested in computer science understand complex algorithms through interactive and visual learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="bg-blue-900/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              
              <p className="text-white/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl backdrop-blur-sm border border-white/10">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white">Ready to Dive In?</h3>
            <p className="text-white/80 mt-2">Choose any of the visualizers above to start exploring algorithms in a whole new way.</p>
          </div>
          
          <div className="flex justify-center">
            <a 
              href="#sorting"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              Explore Visualizers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
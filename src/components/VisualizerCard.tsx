import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { Visualizer } from '../types';

interface VisualizerCardProps {
  visualizer: Visualizer;
}

const VisualizerCard: React.FC<VisualizerCardProps> = ({ visualizer }) => {
  return (
    <div 
      className="group bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:border-white/20"
    >
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={visualizer.image} 
          alt={visualizer.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent transition-opacity duration-300"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex flex-wrap gap-2">
            {visualizer.tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs font-semibold px-2 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {visualizer.title}
        </h3>
        
        <p className="text-white/70 text-sm mb-4">
          {visualizer.description}
        </p>
        
        {/* <div className="flex flex-wrap gap-4 mb-4 text-xs text-white/60">
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>Time: {visualizer.complexity.time}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <HardDrive className="h-3.5 w-3.5" />
            <span>Space: {visualizer.complexity.space}</span>
          </div>
        </div> */}
        
        <div className="flex items-center gap-4">
          <a 
            href={visualizer.url}
            className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium text-sm group-hover:gap-2 transition-all"
          >
            View Visualizer <ArrowRight className="h-4 w-4" />
          </a>
          
          <a 
            href={visualizer.github}
            className="inline-flex items-center gap-1 text-white/70 hover:text-white font-medium text-sm transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" />
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default VisualizerCard;
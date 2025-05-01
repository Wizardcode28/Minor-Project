import React from 'react';
import VisualizerCard from './VisualizerCard';
import { Visualizer } from '../types';

interface VisualizerGridProps {
  visualizers: Visualizer[];
  category: string;
  title: string;
}

const VisualizerGrid: React.FC<VisualizerGridProps> = ({ visualizers, category, title }) => {
  if (!visualizers.length) return null;
  
  return (
    <section id={category} className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visualizers.map(visualizer => (
            <VisualizerCard key={visualizer.id} visualizer={visualizer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualizerGrid;
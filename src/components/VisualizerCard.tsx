import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Visualizer } from '../types';

interface VisualizerCardProps {
  visualizer: Visualizer;
}

const VisualizerCard: React.FC<VisualizerCardProps> = ({ visualizer }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
    >
      <div className="aspect-video relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        <img
          src={visualizer.image}
          alt={visualizer.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {visualizer.github && (
            <a
              href={visualizer.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 backdrop-blur-md rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-colors"
              title="View Source"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Code2 className="w-5 h-5 text-blue-500" />
          {visualizer.title}
        </h3>

        <p className="text-slate-600 text-sm mb-6 line-clamp-2">
          {visualizer.description}
        </p>

        <a
          href={visualizer.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md group-hover:shadow-lg shadow-blue-500/20"
        >
          Launch Visualizer
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default VisualizerCard;
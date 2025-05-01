import React from 'react';
import { Code2, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black/40 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-white" />
            <span className="text-xl font-bold text-white">AlgoViz</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {/* <div>
              <h4 className="text-sm font-semibold text-white mb-3">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#sorting" className="text-white/70 hover:text-white text-sm transition-colors">Sorting</a></li>
                <li><a href="#pathfinding" className="text-white/70 hover:text-white text-sm transition-colors">Pathfinding</a></li>
                <li><a href="#tree" className="text-white/70 hover:text-white text-sm transition-colors">Tree Algorithms</a></li>
                <li><a href="#graph" className="text-white/70 hover:text-white text-sm transition-colors">Graph Algorithms</a></li>
              </ul>
            </div> */}
            
            {/* <div>
              <h4 className="text-sm font-semibold text-white mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Documentation</a></li>
                <li><a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Contribute</a></li>
                <li><a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Report Issue</a></li>
              </ul>
            </div> */}
            
            {/* <div>
              <h4 className="text-sm font-semibold text-white mb-3">Contact</h4>
              <ul className="space-y-2">
                <li><a href="mailto:contact@example.com" className="text-white/70 hover:text-white text-sm transition-colors">Email</a></li>
                <li><a href="#" className="text-white/70 hover:text-white text-sm transition-colors">About</a></li>
              </ul>
            </div> */}
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">&copy; {new Date().getFullYear()} AlgoViz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
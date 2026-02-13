import React from 'react';
import { Code2, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-slate-900">AlgoViz</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {/* Same links structure if needed, or keeping cleaned version */}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 text-center">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} AlgoViz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
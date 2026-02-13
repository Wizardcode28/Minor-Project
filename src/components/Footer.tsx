import React from 'react';
import { Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-slate-900">AlgoViz</span>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 text-center">
          <div className="flex flex-col gap-2 mb-6">
            <p className="text-slate-700 font-medium text-lg">
              Project created under mentorship of <span className="font-bold text-blue-700">Dr. Ashish Kumar Sahu sir</span>
            </p>
            <p className="text-cyan-900 font-bold">
              <span className="font-semibold text-slate-800">Student Team:</span> Sarthak Mittal, Chandan Gupta, Aryan Chilkewar, Agrim Salhotra
            </p>
          </div>
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} AlgoViz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

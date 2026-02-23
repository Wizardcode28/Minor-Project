import React from 'react';
import { Code2, Mail, Phone, GraduationCap, Briefcase, Microscope } from 'lucide-react';
import mentorImg from '../assets/mentor.png';

const Footer: React.FC = () => {
  const studentTeam = [
    'Sarthak Mittal',
    'Chandan Gupta',
    'Aryan Chilkewar',
    'Agrim Salhotra'
  ];

  return (
    <footer className="py-16 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12 items-start">
          {/* Logo Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Code2 className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900 tracking-tight">AlgoViz</span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              An interactive platform designed to visualize complex algorithms and data structures, making learning intuitive and engaging.
            </p>
            <div className="space-y-3">
              <p className="text-slate-900 font-bold border-b border-slate-100 pb-2 inline-block">Student Team:</p>
              <ul className="space-y-1.5">
                {studentTeam.map((name, index) => (
                  <li key={index} className="text-cyan-700 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mentor Profile Section */}
          <div className="lg:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm transition-all hover:shadow-md">
            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left">
              <div className="relative group shrink-0">
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-600 via-cyan-400 to-indigo-500 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
                <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-xl bg-white">
                  <img
                    src={mentorImg}
                    alt="Dr. Ashish Kumar Sahu"
                    className="h-56 w-44 object-cover object-top transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Dr. Ashish Kumar Sahu</h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-600 text-sm font-semibold">
                    <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100">
                      <Briefcase className="h-4 w-4 text-blue-500" />
                      Assistant Professor
                    </span>
                    <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100">
                      <GraduationCap className="h-4 w-4 text-blue-500" />
                      Ph.D
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-bold text-slate-800 flex items-center gap-2 justify-center md:justify-start uppercase tracking-wider">
                    <Microscope className="h-4 w-4 text-blue-600" />
                    Research Expertise
                  </p>
                  <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                    Recommender Systems, Machine Learning, Transfer Learning, Image Processing.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-8 border-t border-slate-200 pt-6 text-sm">
                  <div className="space-y-3">
                    <p className="font-bold text-slate-800 flex items-center gap-2 justify-center md:justify-start">
                      <Mail className="h-4 w-4 text-blue-600" /> Email Address
                    </p>
                    <div className="text-slate-600 space-y-1 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                      <p className="hover:text-blue-600 cursor-pointer">sahuashishcs@gmail.com</p>
                      <p className="hover:text-blue-600 cursor-pointer">ashish.sahu@manit.ac.in</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="font-bold text-slate-800 flex items-center gap-2 justify-center md:justify-start">
                      <Phone className="h-4 w-4 text-blue-600" /> Contact Number
                    </p>
                    <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                      <p className="text-slate-600 font-medium">+91-9506347438</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} AlgoViz. All rights reserved.</p>
          <div className="text-slate-700 text-xs font-medium tracking-wide border-l border-slate-300 pl-4 h-4 flex items-center">
            MAULANA AZAD NATIONAL INSTITUTE OF TECHNOLOGY (MANIT) BHOPAL
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

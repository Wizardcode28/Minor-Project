import React from 'react';
import { motion } from 'framer-motion';
import { Code, GitBranch, Cpu, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: 'Interactive Learning',
      description: 'Step-by-step visualizations make complex algorithms intuitive and easy to understand.'
    },
    {
      icon: <GitBranch className="w-8 h-8 text-purple-400" />,
      title: 'Comprehensive Library',
      description: 'Explore a vast collection covering Sorting, Graphs, Trees, and Data Structures.'
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      title: 'Performance Analysis',
      description: 'Visualize time and space complexity differences in real-time scenarios.'
    }
  ];

  return (
    <section id="about" className="relative py-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-50/80 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Why AlgoViz?
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            We bridge the gap between theory and implementation. Designed for students, developers, and enthusiasts to master computer science concepts through visual exploration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:translate-y-[-4px] transition-all"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-blue-100 text-blue-600">
                {feature.icon instanceof Object ? React.cloneElement(feature.icon as React.ReactElement, { className: "w-8 h-8 text-blue-600" }) : feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default AboutSection;
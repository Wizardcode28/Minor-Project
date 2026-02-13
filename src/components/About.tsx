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
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-50/80 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Why AlgoViz?
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            We bridge the gap between theory and implementation. Designed for students, developers, and enthusiasts to master computer science concepts through visual exploration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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

        {/* Call to Action Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-2xl shadow-blue-500/30 p-12 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:32px_32px]" />
          <div className="relative z-10">
            <Globe className="w-12 h-12 text-white/50 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Open Source & Community Driven</h3>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Join our community of developers. Contribute new algorithms, fix bugs, or improve visualizations.
              The code is open for everyone.
            </p>
            <a
              href="https://github.com/Wizardcode28"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg"
            >
              <GitBranch className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
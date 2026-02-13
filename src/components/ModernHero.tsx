import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const ModernHero: React.FC = () => {
    const scrollToContent = () => {
        const content = document.getElementById('visualizers-section');
        if (content) {
            content.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl mx-auto"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8"
                >
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-blue-700">Next Gen Algorithm Visualization</span>
                </motion.div>

                <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 text-slate-900">
                    <span className="text-slate-900 drop-shadow-sm">Master Algorithms</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-transparent bg-clip-text drop-shadow-sm">
                        Visually
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Interactive visualizations for Sorting, Graphs, Trees, and more.
                    Understand complex algorithms through beautiful, step-by-step animations.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToContent}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30"
                >
                    Explore Visualizers
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
            </motion.div>
        </section>
    );
};

export default ModernHero;

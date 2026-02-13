import React from 'react';
import { motion } from 'framer-motion';
import { Visualizer } from '../types';
import VisualizerCard from './VisualizerCard';

interface CategorySectionProps {
    title: string;
    visualizers: Visualizer[];
    index: number;
    id: string; // Add id prop
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, visualizers, index, id }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mb-20"
        >
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4">
                    {title}
                </h2>
                <div className="h-[1px] flex-1 bg-slate-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visualizers.map((viz, idx) => (
                    <motion.div
                        key={viz.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                        <VisualizerCard visualizer={viz} />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default CategorySection;

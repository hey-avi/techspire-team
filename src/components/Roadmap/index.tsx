// Create this file: src/components/Roadmap/index.tsx

import { motion } from 'framer-motion';
import { roadmapMilestones } from '../../utils/constants';
import { FaCheckCircle, FaClock, FaHourglassHalf } from 'react-icons/fa';

const Roadmap = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <FaCheckCircle className="text-green-500 w-6 h-6" />;
      case 'current':
        return <FaHourglassHalf className="text-blue-500 w-6 h-6 animate-pulse" />;
      case 'upcoming':
        return <FaClock className="text-gray-500 w-6 h-6" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500';
      case 'current':
        return 'border-blue-500';
      case 'upcoming':
        return 'border-gray-500';
      default:
        return 'border-gray-300';
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Our Journey
        </motion.h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
          
          <div className="space-y-16">
            {roadmapMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: index * 0.2 }
                }}
                viewport={{ once: true }}
                className={`flex ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } items-center justify-center gap-8 relative`}
              >
                <div className={`w-1/2 ${
                  index % 2 === 0 ? 'text-right' : 'text-left'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="space-y-2"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {milestone.description}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {milestone.date}
                    </p>
                  </motion.div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`relative flex items-center justify-center w-12 h-12 
                             bg-white dark:bg-gray-800 rounded-full border-4 
                             ${getStatusColor(milestone.status)} z-10`}
                >
                  {getStatusIcon(milestone.status)}
                </motion.div>
                
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

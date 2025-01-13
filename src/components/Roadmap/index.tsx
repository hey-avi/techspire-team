// src/components/Roadmap/index.tsx
import { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { FaCheckCircle, FaClock, FaHourglassHalf } from 'react-icons/fa';
import { roadmapMilestones } from '../../utils/constants';
import { Milestone, MilestoneStatus } from '../../types/roadmap';

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const milestoneVariants: Variants = {
  hidden: (isEven: boolean) => ({
    opacity: 0,
    x: isEven ? -50 : 50
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

interface MilestoneCardProps {
  milestone: Milestone;
  index: number;
}

interface StatusIconProps {
  status: MilestoneStatus;
}

const Roadmap: FC = () => (
  <section id="roadmap" className="py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <SectionHeader />
      <TimelineContainer />
    </div>
  </section>
);

const SectionHeader: FC = () => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
  >
    Our Journey
  </motion.h2>
);

const TimelineContainer: FC = () => (
  <div className="relative max-w-4xl mx-auto">
    <TimelineLine />
    <motion.div
      className="space-y-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {roadmapMilestones.map((milestone, index) => (
        <MilestoneCard
          key={milestone.id}
          milestone={milestone}
          index={index}
        />
      ))}
    </motion.div>
  </div>
);

const TimelineLine: FC = () => (
  <div 
    className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" 
    aria-hidden="true"
  />
);

const MilestoneCard: FC<MilestoneCardProps> = ({ milestone, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={milestoneVariants}
      custom={isEven}
      viewport={{ once: true }}
      className={`flex ${
        isEven ? 'flex-row' : 'flex-row-reverse'
      } items-center justify-center gap-8 relative`}
    >
      <MilestoneContent milestone={milestone} isEven={isEven} />
      <StatusIndicator status={milestone.status} />
      <div className="w-1/2" />
    </motion.div>
  );
};

const MilestoneContent: FC<{ milestone: Milestone; isEven: boolean }> = ({
  milestone,
  isEven
}) => (
  <div className={`w-1/2 ${isEven ? 'text-right' : 'text-left'}`}>
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
      <time className="text-sm text-gray-500 dark:text-gray-400">
        {milestone.date}
      </time>
    </motion.div>
  </div>
);

const StatusIndicator: FC<StatusIconProps> = ({ status }) => (
  <motion.div
    whileHover={{ scale: 1.2 }}
    className={`relative flex items-center justify-center w-12 h-12 
               bg-white dark:bg-gray-800 rounded-full border-4 
               ${getStatusColor(status)} z-10`}
    role="status"
    aria-label={`Milestone status: ${status}`}
  >
    <StatusIcon status={status} />
  </motion.div>
);

const StatusIcon: FC<StatusIconProps> = ({ status }) => {
  const icons = {
    completed: <FaCheckCircle className="text-green-500 w-6 h-6" />,
    current: <FaHourglassHalf className="text-blue-500 w-6 h-6 animate-pulse" />,
    upcoming: <FaClock className="text-gray-500 w-6 h-6" />
  };

  return icons[status] || null;
};

const getStatusColor = (status: MilestoneStatus): string => {
  const colors = {
    completed: 'border-green-500',
    current: 'border-blue-500',
    upcoming: 'border-gray-500'
  };

  return colors[status] || 'border-gray-300';
};

export default Roadmap;

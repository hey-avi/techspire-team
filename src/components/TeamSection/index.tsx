// src/components/TeamSection/index.tsx
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, Variants } from 'framer-motion';
import TeamCard from './TeamCard';
import { teamMembers } from '../../utils/constants';
import { TeamMember } from '../../types/team';

// Animation variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

interface SectionHeaderProps {
  inView: boolean;
}

const TeamSection: FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader inView={inView} />
        <TeamGrid members={teamMembers} />
      </div>
    </section>
  );
};

const SectionHeader: FC<SectionHeaderProps> = ({ inView }) => (
  <motion.div
    className="text-center mb-16"
    variants={sectionVariants}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
  >
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
      Our Amazing Team
    </h2>
    <p className="text-xl text-gray-600 dark:text-gray-300">
      Meet the talented individuals behind TechSpire
    </p>
  </motion.div>
);

const TeamGrid: FC<{ members: TeamMember[] }> = ({ members }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {members.map((member, index) => (
      <TeamCard key={member.id} member={member} index={index} />
    ))}
  </div>
);

export default TeamSection;

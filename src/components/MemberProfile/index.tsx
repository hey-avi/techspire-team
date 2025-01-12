import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';
import { teamMembers } from '../../utils/constants';

const MemberProfiles = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team Members
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get to know the talented individuals driving innovation
          </p>
        </motion.div>

        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <ProfileCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberProfiles;
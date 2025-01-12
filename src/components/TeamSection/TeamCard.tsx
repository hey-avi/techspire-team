import { motion } from 'framer-motion';
import { TeamMember } from '../../types/team';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard = ({ member, index }: TeamCardProps) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
        <div className="relative">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {member.name}
          </h3>
          <p className="text-primary-600 dark:text-primary-400 mb-4">
            {member.role}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {member.degree}
          </p>
          
          <div className="flex space-x-4 justify-center">
            <SocialLink href={member.social.github} icon={FaGithub} />
            <SocialLink href={member.social.linkedin} icon={FaLinkedin} />
            <SocialLink href={member.social.instagram} icon={FaInstagram} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SocialLink = ({ href, icon: Icon }: { href: string; icon: React.ComponentType<any> }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
  >
    <Icon className="w-5 h-5" />
  </a>
);

export default TeamCard;
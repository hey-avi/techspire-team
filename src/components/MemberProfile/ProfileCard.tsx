import { motion } from 'framer-motion';
import { TeamMember } from '../../types/team';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

interface ProfileCardProps {
  member: TeamMember;
  index: number;
}

const ProfileCard = ({ member, index }: ProfileCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8"
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full md:w-48 object-cover"
            src={member.avatar}
            alt={member.name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-primary-600 dark:text-primary-400 font-semibold">
            {member.role}
          </div>
          <h2 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
            {member.name}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {member.degree}
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            {member.bio}
          </p>
          
          <div className="mt-6 flex space-x-4">
            <SocialIcon href={member.social.github} icon={FaGithub} label="GitHub" />
            <SocialIcon href={member.social.linkedin} icon={FaLinkedin} label="LinkedIn" />
            <SocialIcon href={member.social.instagram} icon={FaInstagram} label="Instagram" />
            <SocialIcon href={`mailto:${member.social.email}`} icon={FaEnvelope} label="Email" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SocialIcon = ({ href, icon: Icon, label }: { href: string; icon: React.ComponentType<any>; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
    aria-label={label}
  >
    <Icon className="w-6 h-6" />
  </a>
);

export default ProfileCard;
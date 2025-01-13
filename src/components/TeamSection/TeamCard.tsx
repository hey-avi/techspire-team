// src/components/TeamSection/TeamCard.tsx
import { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { TeamMember } from '../../types/team';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

interface SocialLinkProps {
  href: string;
  icon: IconType;
  label: string;
}

// Animation variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.2,
    },
  }),
};

const TeamCard: FC<TeamCardProps> = ({ member, index }) => {
  const socialLinks: SocialLinkProps[] = [
    { href: member.social.github, icon: FaGithub, label: 'GitHub' },
    { href: member.social.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
    { href: member.social.instagram, icon: FaInstagram, label: 'Instagram' },
    { href: `mailto:${member.social.email}`, icon: FaEnvelope, label: 'Email' },
  ];

  return (
    <motion.div
      className="relative group"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{ y: -10 }}
    >
      <Card member={member} socialLinks={socialLinks} />
    </motion.div>
  );
};

const Card: FC<{ member: TeamMember; socialLinks: SocialLinkProps[] }> = ({
  member,
  socialLinks,
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
    <ProfileImage src={member.avatar} name={member.name} />
    <CardContent member={member} socialLinks={socialLinks} />
  </div>
);

const ProfileImage: FC<{ src: string; name: string }> = ({ src, name }) => (
  <div className="relative">
    <img
      src={src}
      alt={`${name}'s profile`}
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

const CardContent: FC<{ member: TeamMember; socialLinks: SocialLinkProps[] }> = ({
  member,
  socialLinks,
}) => (
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
      {socialLinks.map((link) => (
        <SocialLink key={link.label} {...link} />
      ))}
    </div>
  </div>
);

const SocialLink: FC<SocialLinkProps> = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
  >
    <Icon className="w-5 h-5" />
  </a>
);

export default TeamCard;

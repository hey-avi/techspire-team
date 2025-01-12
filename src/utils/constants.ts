import { TeamMember } from '../types/team';

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Avinash",
    role: "Lead Developer",
    avatar: "https://via.placeholder.com/400x400",
    bio: "Full-stack developer with expertise in React, Node.js, and cloud technologies. Leading the technical direction of TechSpire.",
    degree: "B.Tech in Computer Science",
    social: {
      github: "https://github.com/hey-avi",
      linkedin: "https://linkedin.com/in/hey-avi",
      instagram: "https://instagram.com/hey.avi",
      email: "avinash@techspire.dev"
    }
  },
  {
    id: 2,
    name: "Neha",
    role: "IDEA Generator",
    avatar: "https://via.placeholder.com/400x400",
    bio: "Creative thinker and problem solver. Specializes in user experience design and product conceptualization.",
    degree: "Masters in Design Innovation",
    social: {
      github: "https://github.com/neha-tech",
      linkedin: "https://linkedin.com/in/neha-tech",
      instagram: "https://instagram.com/neha.tech",
      email: "neha@techspire.dev"
    }
  },
  {
    id: 3,
    name: "Deepak",
    role: "Bug Finder",
    avatar: "https://via.placeholder.com/400x400",
    bio: "Quality assurance expert with a keen eye for detail. Ensures robust and reliable software delivery.",
    degree: "B.E. in Software Engineering",
    social: {
      github: "https://github.com/deepak-debug",
      linkedin: "https://linkedin.com/in/deepak-debug",
      instagram: "https://instagram.com/deepak.debug",
      email: "deepak@techspire.dev"
    }
  },
  {
    id: 4,
    name: "Sanjana",
    role: "Web Designer",
    avatar: "https://via.placeholder.com/400x400",
    bio: "Creative web designer with a passion for creating beautiful and functional user interfaces.",
    degree: "BFA in Digital Design",
    social: {
      github: "https://github.com/sanjana-design",
      linkedin: "https://linkedin.com/in/sanjana-design",
      instagram: "https://instagram.com/sanjana.design",
      email: "sanjana@techspire.dev"
    }
  }
];

export const navigationLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

export const siteConfig = {
  name: 'TechSpire',
  description: 'Where Innovation Meets Excellence',
  socialLinks: {
    github: 'https://github.com/hey-avi',
    linkedin: 'https://linkedin.com/company/techspire',
    email: 'team@techspire.dev'
  }
};
// src/utils/constants.ts

import { TeamMember } from '../types/team';
import { Project } from '../types/project';
import { Milestone } from '../types/roadmap';

// Team Members Data
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Avinash",
    role: "Lead Developer",  // Professional role title
    avatar: "https://media.licdn.com/dms/image/v2/D4E03AQFXl3lksTMByw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714303630335?e=1742428800&v=beta&t=JC8CdSHDjUs5Hyuizfk6ila-XkMnmIeZccV9uMgTiAg",
    bio: "Full-stack developer with expertise in React, Node.js, and cloud technologies. Leading the technical direction of TechSpire.",
    degree: "B.Tech in Computer Science",
    social: {
      github: "https://github.com/hey-avi",
      linkedin: "https://www.linkedin.com/in/just-a-fresher/",
      instagram: "https://instagram.com/hey.avi",
      email: "avinash@techspire.dev"
    }
  },
  {
    id: 2,
    name: "Neha",
    role: "Product Designer",  // Professional role title
    avatar: "https://via.placeholder.com/400x400",
    bio: "Creative thinker and problem solver. Specializes in user experience design and product conceptualization.",
    degree: "B.Tech in Computer Science",
    social: {
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/in/neha-kumari-4505382a9/",
      instagram: "https://instagram.com/",
      email: "neha@techspire.dev"
    }
  },
  {
    id: 3,
    name: "Deepak",
    role: "Quality Assurance Engineer",  // Professional role title
    avatar: "https://via.placeholder.com/400x400",
    bio: "Quality assurance expert with a keen eye for detail. Ensures robust and reliable software delivery.",
    degree: "B.Tech in Computer Science",
    social: {
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/in/deepak-verma-6476112a3/",
      instagram: "https://instagram.com/",
      email: "deepak@techspire.dev"
    }
  },
  {
    id: 4,
    name: "Sanjana",
    role: "UI/UX Designer",  // Professional role title
    avatar: "https://via.placeholder.com/400x400",
    bio: "Creative web designer with a passion for creating beautiful and functional user interfaces.",
    degree: "B.Tech in Computer Science",
    social: {
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/in/sanjana-kumari-1217b52a6/",
      instagram: "https://instagram.com/",
      email: "sanjana@techspire.dev"
    }
  }
];

// Navigation Links (consolidated version)
export const navigationLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Team', href: '#team' },
  { name: 'Projects', href: '#projects' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Contact', href: '#contact' }
];

// Site Configuration
export const siteConfig = {
  name: 'TechSpire',
  description: 'Where Innovation Meets Excellence',
  socialLinks: {
    github: 'https://github.com/hey-avi',
    linkedin: 'https://linkedin.com/company/techspire',
    email: 'team@techspire.dev'
  }
};

// Projects Data
export const projects: Project[] = [
  {
    id: 1,
    title: "TechSpire Team Website",
    description: "Our team portfolio website showcasing our skills, projects, and journey. Built with modern web technologies focusing on responsive design and smooth animations.",
    githubUrl: "https://github.com/hey-avi/techspire-team",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/images/techspire-thumb.png"
  },
  {
    id: 2,
    title: "IRCTC Automatic Tatkal Booking System",
    description: "An automated system for booking tatkal tickets on IRCTC platform. Features include quick form filling, automated captcha handling, and multiple payment options integration.",
    githubUrl: "https://github.com/hey-avi/irctc-auto-booking",  // Updated with proper URL format
    technologies: ["Python", "Selenium", "OpenCV", "PyAutoGUI"],
    thumbnail: "/images/irctc-thumb.png"
  }
];

// Roadmap Milestones
export const roadmapMilestones: Milestone[] = [
  {
    id: 1,
    title: "Team Formation",
    description: "Forming our team and establishing core values and goals",
    date: "2024 Q4",
    status: "completed"
  },
  {
    id: 2,
    title: "Website Launch",
    description: "Developing and launching our team portfolio website",
    date: "2025 Q1",
    status: "current"
  },
  {
    id: 3,
    title: "IRCTC Project",
    description: "Development of Automated Tatkal Booking System",
    date: "2025 Q2",
    status: "current"
  },
  {
    id: 4,
    title: "Future Projects",
    description: "Expanding our portfolio with innovative solutions",
    date: "2025 Q3",
    status: "upcoming"
  }
];

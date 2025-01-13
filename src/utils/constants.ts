import { TeamMember } from '../types/team';

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Avinash",
    role: "PIRO",
    avatar: "https://via.placeholder.com/400x400",
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
    role: "IDEA Generator",
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
    role: "KANJOOS + CHITIYA",
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
    role: "Veli",
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
// Add this to: src/utils/constants.ts
// Add this alongside your existing constants

import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: "TechSpire Team Website",
    description: "Our team portfolio website showcasing our skills, projects, and journey. Built with modern web technologies focusing on responsive design and smooth animations.",
    githubUrl: "https://github.com/hey-avi/techspire-team",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/images/techspire-thumb.png"  // You'll need to add this image later
  },
  {
    id: 2,
    title: "IRCTC Automatic Tatkal Booking System",
    description: "An automated system for booking tatkal tickets on IRCTC platform. Features include quick form filling, automated captcha handling, and multiple payment options integration.",
    githubUrl: "https://github.com",  // You can update this later
    technologies: ["Python", "Selenium", "OpenCV", "PyAutoGUI"],
    thumbnail: "/images/irctc-thumb.png"  // You'll need to add this image later
  }
];

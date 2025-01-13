// src/components/ProjectShowcase/index.tsx
import { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../utils/constants';
import { Project } from '../../types/project';

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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

interface ProjectCardProps {
  project: Project;
}

interface TechnologyBadgeProps {
  tech: string;
}

const ProjectShowcase: FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeader />
        <ProjectGrid />
      </div>
    </section>
  );
};

const SectionHeader: FC = () => (
  <motion.h2 
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
  >
    Our Projects
  </motion.h2>
);

const ProjectGrid: FC = () => (
  <motion.div 
    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </motion.div>
);

const ProjectCard: FC<ProjectCardProps> = ({ project }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -10 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
  >
    <ProjectThumbnail project={project} />
    <ProjectContent project={project} />
  </motion.div>
);

const ProjectThumbnail: FC<ProjectCardProps> = ({ project }) => (
  project.thumbnail && (
    <div className="relative h-48 overflow-hidden">
      <img 
        src={project.thumbnail} 
        alt={`${project.title} preview`}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        loading="lazy"
      />
    </div>
  )
);

const ProjectContent: FC<ProjectCardProps> = ({ project }) => (
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
      {project.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      {project.description}
    </p>
    <TechnologyList technologies={project.technologies} />
    <GitHubLink url={project.githubUrl} />
  </div>
);

const TechnologyList: FC<{ technologies: string[] }> = ({ technologies }) => (
  <div className="flex flex-wrap gap-2 mb-4">
    {technologies.map((tech) => (
      <TechnologyBadge key={tech} tech={tech} />
    ))}
  </div>
);

const TechnologyBadge: FC<TechnologyBadgeProps> = ({ tech }) => (
  <span
    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 
              text-primary-600 dark:text-primary-300 
              rounded-full text-sm"
  >
    {tech}
  </span>
);

const GitHubLink: FC<{ url: string }> = ({ url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-4 py-2 
              bg-gray-900 dark:bg-gray-700 text-white rounded-lg 
              hover:bg-gray-800 dark:hover:bg-gray-600 
              transition-colors"
    aria-label="View project on GitHub"
  >
    <FaGithub className="w-5 h-5" />
    View on GitHub
  </a>
);

export default ProjectShowcase;

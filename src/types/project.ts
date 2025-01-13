// src/types/project.ts

// Project status enum for type safety
export enum ProjectStatus {
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed',
  PLANNED = 'planned'
}

// Technology category for better organization
export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
  version?: string;
}

// Links related to the project
export interface ProjectLinks {
  github: string;
  demo?: string;
  documentation?: string;
  deployment?: string;
}

// Project interface with improved structure
export interface Project {
  id: number;
  title: string;
  description: string;
  githubUrl: string;
  technologies: string[];
  thumbnail?: string;
  status?: ProjectStatus;
  startDate?: string;
  endDate?: string;
  teamMembers?: number[];  // IDs of team members involved
  features?: string[];     // Key features of the project
  links?: ProjectLinks;    // Additional project links
  highlights?: string[];   // Key achievements or highlights
  category?: 'web' | 'mobile' | 'desktop' | 'automation' | 'other';
}

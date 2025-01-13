// Create this file: src/types/project.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  githubUrl: string;
  technologies: string[];
  thumbnail?: string;
}

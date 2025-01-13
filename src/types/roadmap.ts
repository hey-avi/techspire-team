// Create this file: src/types/roadmap.ts

export interface Milestone {
  id: number;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'current' | 'upcoming';
  icon?: string;
}

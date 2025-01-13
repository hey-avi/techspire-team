// src/types/roadmap.ts

// Status type for milestones
export type MilestoneStatus = 'completed' | 'current' | 'upcoming';

// Priority levels for milestones
export enum MilestonePriority {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low'
}

// Milestone dependencies
export interface MilestoneDependency {
  id: number;
  type: 'blocks' | 'blocked-by' | 'relates-to';
}

// Resources needed for milestone
export interface MilestoneResource {
  type: 'technology' | 'team' | 'infrastructure' | 'other';
  name: string;
  description?: string;
}

// Enhanced Milestone interface
export interface Milestone {
  id: number;
  title: string;
  description: string;
  date: string;
  status: MilestoneStatus;
  icon?: string;
  priority?: MilestonePriority;
  dependencies?: MilestoneDependency[];
  resources?: MilestoneResource[];
  assignees?: number[];        // Team member IDs
  completionPercent?: number;  // 0-100
  tags?: string[];            // Categories or labels
  deliverables?: string[];    // Expected outputs
}

// Quarter type for organizing milestones
export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';

// Year-Quarter combination
export interface TimeFrame {
  year: number;
  quarter: Quarter;
}

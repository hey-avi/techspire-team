// src/types/team.ts

// Interface for social media links
export interface SocialLinks {
  github: string;
  linkedin: string;
  instagram: string;
  email: string;
}

// Enum for standardized team roles
export enum TeamRole {
  LEAD_DEVELOPER = "Lead Developer",
  PRODUCT_DESIGNER = "Product Designer",
  QA_ENGINEER = "Quality Assurance Engineer",
  UI_UX_DESIGNER = "UI/UX Designer"
}

// Main TeamMember interface
export interface TeamMember {
  id: number;
  name: string;
  role: TeamRole | string;
  avatar: string;
  bio: string;
  degree: string;
  social: SocialLinks;
}

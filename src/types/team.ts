export interface TeamMember {
    id: number;
    name: string;
    role: string;
    avatar: string;
    bio: string;
    degree: string;
    social: {
      github: string;
      linkedin: string;
      instagram: string;
      email: string;
    };
  }
  
  export interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
  }
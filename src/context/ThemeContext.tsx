// src/context/ThemeContext.tsx
import { createContext, useContext, useEffect, useState, FC, ReactNode } from 'react';
import { ThemeContextType } from '../types/theme'; // Note: Moved from team.ts to theme.ts

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: 'light' | 'dark';
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ 
  children, 
  defaultTheme 
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return defaultTheme || 'light';
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme as 'light' | 'dark';
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

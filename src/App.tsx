// src/App.tsx
import { useEffect, FC } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeamSection from './components/TeamSection';
import MemberProfiles from './components/MemberProfile';
import Contact from './components/Contact';
import ProjectShowcase from './components/ProjectShowcase';
import Roadmap from './components/Roadmap';

// Type for smooth scroll event handler
interface SmoothScrollTarget extends EventTarget {
  tagName?: string;
  getAttribute?: (attr: string) => string | null;
}

const App: FC = () => {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as SmoothScrollTarget;
      
      if (target?.tagName === 'A' && target.getAttribute?.('href')?.startsWith('#')) {
        e.preventDefault();
        const hashId = target.getAttribute('href');
        
        if (hashId) {
          const element = document.querySelector(hashId);
          element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main className="flex flex-col">
          <Hero />
          <TeamSection />
          <Roadmap />
          <ProjectShowcase />
          <MemberProfiles />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

// Separate Footer component for better organization
const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date('2025-01-13').toLocaleDateString();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <p>© {currentYear} TechSpire. All rights reserved.</p>
        <p className="mt-2">Last updated: {lastUpdated}</p>
      </div>
    </footer>
  );
};

export default App;

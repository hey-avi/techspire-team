import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeamSection from './components/TeamSection';
import MemberProfiles from './components/MemberProfile';
import Contact from './components/Contact';

function App() {
  // Smooth scroll implementation
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
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
        <main>
          <Hero />
          <TeamSection />
          <MemberProfiles />
          <Contact />
        </main>
        <footer className="bg-gray-50 dark:bg-gray-800 py-8">
          <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} TechSpire. All rights reserved.</p>
            <p className="mt-2">
              Last updated: {new Date('2025-01-12').toLocaleDateString()}
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
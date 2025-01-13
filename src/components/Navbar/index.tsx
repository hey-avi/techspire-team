// src/components/Navbar/index.tsx
import { useState, useEffect, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

// Types
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '#home', label: 'Home' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' }
];

const Navbar: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuClick = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <DesktopNav navItems={navItems} theme={theme} toggleTheme={toggleTheme} />
          <MobileMenuButton isOpen={isMobileMenuOpen} onClick={handleMobileMenuClick} />
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && <MobileMenu navItems={navItems} />}
      </AnimatePresence>
    </nav>
  );
};

const Logo: FC = () => (
  <div className="flex-shrink-0">
    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
      TechSpire
    </h1>
  </div>
);

const DesktopNav: FC<{
  navItems: NavItem[];
  theme: string;
  toggleTheme: () => void;
}> = ({ navItems, theme, toggleTheme }) => (
  <div className="hidden md:flex md:items-center md:space-x-8">
    {navItems.map((item) => (
      <NavLink key={item.href} href={item.href}>
        {item.label}
      </NavLink>
    ))}
    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
  </div>
);

const NavLink: FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </a>
);

const MobileMenuButton: FC<{ isOpen: boolean; onClick: () => void }> = ({ 
  isOpen, 
  onClick 
}) => (
  <div className="md:hidden">
    <button
      onClick={onClick}
      className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
    </button>
  </div>
);

const ThemeToggle: FC<{ theme: string; toggleTheme: () => void }> = ({ 
  theme, 
  toggleTheme 
}) => (
  <button
    onClick={toggleTheme}
    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    aria-label="Toggle theme"
  >
    {theme === 'dark' ? 
      <FiSun className="w-5 h-5 text-yellow-400" /> : 
      <FiMoon className="w-5 h-5 text-gray-600" />
    }
  </button>
);

const MobileMenu: FC<{ navItems: NavItem[] }> = ({ navItems }) => (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.3 }}
    className="md:hidden bg-white dark:bg-gray-900"
  >
    <div className="px-2 pt-2 pb-3 space-y-1">
      {navItems.map((item) => (
        <MobileNavLink key={item.href} href={item.href}>
          {item.label}
        </MobileNavLink>
      ))}
    </div>
  </motion.div>
);

const MobileNavLink: FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
  >
    {children}
  </a>
);

export default Navbar;

// src/components/Hero/index.tsx
import { FC } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedElementProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const Hero: FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <AnimatedElement delay={0.2} className="mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Welcome to <span className="text-primary-600 dark:text-primary-400">TechSpire</span>
            </h1>
          </AnimatedElement>
          
          <AnimatedElement delay={0.4} className="mb-8">
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
              Where Innovation Meets Excellence
            </p>
          </AnimatedElement>
          
          <AnimatedElement delay={0.6}>
            <CallToActionButton />
          </AnimatedElement>

          <AnimatedElement delay={0.8}>
            <HeroImage />
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

const AnimatedElement: FC<AnimatedElementProps> = ({ 
  children, 
  delay = 0, 
  className = '' 
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
  >
    {children}
  </motion.div>
);

const CallToActionButton: FC = () => (
  <a
    href="#team"
    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors duration-300"
  >
    Meet Our Team
  </a>
);

const HeroImage: FC = () => (
  <div className="mt-12">
    <motion.img
      src="https://via.placeholder.com/800x400"
      alt="Team collaboration"
      className="mx-auto rounded-lg shadow-xl dark:opacity-90"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    />
  </div>
);

export default Hero;

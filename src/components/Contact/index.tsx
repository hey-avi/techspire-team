import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Have a question or want to collaborate? Reach out to us!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <ContactCard
              icon={FaEnvelope}
              title="Email"
              content="team@techspire.dev"
              href="mailto:team@techspire.dev"
            />
            <ContactCard
              icon={FaGithub}
              title="GitHub"
              content="techspire-team"
              href="https://github.com/hey-avi"
            />
            <ContactCard
              icon={FaLinkedin}
              title="LinkedIn"
              content="TechSpire"
              href="https://linkedin.com/company/techspire"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface ContactCardProps {
  icon: React.ComponentType<any>;
  title: string;
  content: string;
  href: string;
}

const ContactCard = ({ icon: Icon, title, content, href }: ContactCardProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transition-transform hover:-translate-y-2"
  >
    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4" />
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{content}</p>
  </a>
);

export default Contact;
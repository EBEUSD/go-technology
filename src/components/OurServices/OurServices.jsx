import styles from './OurServices.module.css';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaLock } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode />,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for scalability and performance.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile Apps',
    description: 'iOS and Android apps designed to engage users and grow your business.',
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Solutions',
    description: 'Infrastructure, deployment, and automation for the modern cloud-native enterprise.',
  },
  {
    icon: <FaLock />,
    title: 'Cybersecurity',
    description: 'Secure architectures, audits, and best practices to protect your digital assets.',
  },
];

function OurServices() {
  return (
    <section id="services" className={styles.services}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>Our Services</h2>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default OurServices;

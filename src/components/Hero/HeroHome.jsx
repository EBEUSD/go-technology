import styles from './HeroHome.module.css';
import { motion } from 'framer-motion';
import video from '../../Media/bgv.mp4';

function HeroHome() {
  return (
    <section id="home" className={styles.hero}>
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
        src={video}
        type="video/mp4"
      />

      <div className={styles.overlay} />

      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Empowering Your Business<br />Through Technology
        </motion.h1>

        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          We build innovative solutions that drive growth, efficiency, and success.
        </motion.p>

        <motion.a 
          href="#about"
          className={styles.cta}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Learn More
        </motion.a>
      </motion.div>
    </section>
  );
}

export default HeroHome;

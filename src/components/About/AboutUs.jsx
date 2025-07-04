import styles from './AboutUs.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

function AboutUs() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const leftControl = useAnimation();
  const rightControl = useAnimation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      if (inView) {
        leftControl.start({ opacity: 1, x: 0 });
        rightControl.start({ opacity: 1, x: 0 });
      } else {
        leftControl.start({ opacity: 0, x: -100 });
        rightControl.start({ opacity: 0, x: 100 });
      }
    }
  }, [inView, leftControl, rightControl, isMobile]);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.text}>
          At <strong>Go Technology</strong>, we specialize in crafting tailored digital solutions
          that empower businesses to grow and evolve. With a team of expert developers, designers,
          and strategists, we turn ideas into reliable, scalable, and innovative technology products.
        </p>

        <div className={styles.grid} ref={ref}>
          {isMobile ? (
            <>
              <div className={styles.card}>
                <h3>Mission</h3>
                <p>
                  To deliver high-quality digital solutions that drive business success through
                  innovation, performance, and reliability.
                </p>
              </div>

              <div className={styles.card}>
                <h3>Vision</h3>
                <p>
                  To be the leading technology partner for companies seeking to embrace the digital
                  future and transform their industries.
                </p>
              </div>
            </>
          ) : (
            <>
              <motion.div
                className={styles.card}
                animate={leftControl}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <h3>Mission</h3>
                <p>
                  To deliver high-quality digital solutions that drive business success through
                  innovation, performance, and reliability.
                </p>
              </motion.div>

              <motion.div
                className={styles.card}
                animate={rightControl}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <h3>Vision</h3>
                <p>
                  To be the leading technology partner for companies seeking to embrace the digital
                  future and transform their industries.
                </p>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

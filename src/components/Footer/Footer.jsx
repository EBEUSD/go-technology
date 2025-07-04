import styles from './Footer.module.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>Go Technology</div>

        <div className={styles.links}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className={styles.social}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:info@gotechnology.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className={styles.copy}>
        © {new Date().getFullYear()} Go Technology. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

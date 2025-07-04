import styles from './Contact.module.css';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>Get in Touch</h2>
        <p className={styles.subtitle}>
          Interested in working together? Fill out the form below and we’ll get back to you soon.
        </p>

        <form
          className={styles.form}
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;

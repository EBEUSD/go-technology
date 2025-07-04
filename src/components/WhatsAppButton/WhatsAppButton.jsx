import styles from './WhatsAppButton.module.css';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  const phoneNumber = '541126989956'; 

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className={styles.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;

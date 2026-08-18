import { FaWhatsapp } from "react-icons/fa";
import "./whatsappButton.css";

const phoneNumber = "351913965124";
const message = "Oi Will, vi seu Portifolio Web, quero falar contigo sobre musica";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const WhatsAppButton = () => (
  <a
    className="whatsapp-button"
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar com Will pelo WhatsApp"
    title="Falar comigo pelo WhatsApp"
  >
    <FaWhatsapp aria-hidden="true" />
  </a>
);

export default WhatsAppButton;

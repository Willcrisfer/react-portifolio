import "./footer.css";
import { socialNetworks } from "../iconsSocial/IconsSocial";
import { useProfile } from "../../context/ProfileContext";

const Footer = () => {
  const { profile } = useProfile();
  return (
    <footer id="footer">
      <div className="footer__content max-width mb-0">
        <span className="eyebrow">Contacto</span>
        <h2 className="secondary-title">Vamos criar<br />algo juntos?</h2>
        <p>{profile?.descriptionFooter}</p>
        <div className="footer__socials">
          {socialNetworks.map((network) => (
            <a key={network.name} href={network.link} className="social-btn" target="_blank" rel="noopener noreferrer" aria-label={network.name}>
              {network.name} {network.icon}
            </a>
          ))}
        </div>
        <p className="footer__copyright">&copy; {new Date().getFullYear()} {profile?.name || "Willian Fernandes"}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

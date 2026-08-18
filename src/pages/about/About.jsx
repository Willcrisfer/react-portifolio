import "./about.css";
import { useProfile } from "../../context/ProfileContext";

const About = () => {
    const { profile } = useProfile();
    
    return (
        <section id="about" className="about max-width">
            <div className="section-label">01 / Sobre</div>
            <div className="about__left">
                <h2 className="secondary-title">{profile?.aboutTitle || "Sobre mim"}</h2>
            </div>
            <div className="about__right">
                <p className="about__lead">{profile?.aboutWhoAmI}</p>
                <p>{profile?.aboutDescriptionMusic}</p>
                <a className="text-link" href="#footer">Disponível para novos projetos <span aria-hidden="true">→</span></a>
            </div>
        </section>
    );
};

export default About;

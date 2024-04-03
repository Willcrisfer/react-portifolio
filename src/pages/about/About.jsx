import React from "react";
import "./about.css";
import { socialNetworks } from "../../components/iconsSocial/IconsSocial";
import { useProfile } from "../../context/ProfileContext";

const About = () => {
    const { profile } = useProfile();
    
    return (
        <section id="about" className="about max-width">
            <div className="about__left">
                <h2 className="secondary-title">{profile?.aboutTitle || "Sobre mim"}</h2>
                <p>{profile?.aboutWhoAmI || "Perdi a minha identidade, sorry."}</p>
                <div className="social-networks">
                    {socialNetworks.map((network) => (
                        <a 
                            href={network.link} 
                            className="social-btn" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                        >
                            {network.icon} 
                        </a>
                    ))}   
                </div>
                <p>{profile?.aboutDescriptionMusic || "Sem músicas no Momento"}</p>  
            </div>
            <div className="about__right">
                <h3 className="tertiary-title mb-m">{profile?.aboutTitleTech || "Minhas Habilidades Técnicas"}</h3>
                <h3>{profile?.aboutSubtitleTech || "Descrição sobre minhas habilidades não disponível"} </h3>
                <p>{profile?.aboutDescriptionTech1 || "Perdi minhas Habilidades, Espero que temporariamente (;"}</p>
                <p>{profile?.aboutDescriptionTech2 || "Perdi minhas Habilidades, Espero que temporariamente (;"}</p>
            </div>
        </section>
    );
};

export default About;

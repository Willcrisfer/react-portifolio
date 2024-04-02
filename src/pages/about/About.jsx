import React from "react";
import "./about.css";
import { socialNetworks } from "../../components/iconsSocial/IconsSocial";
import { useProfile } from "../../context/ProfileContext";
const About = () => {
    const {profile} = useProfile();
    
    return (
        
        <section id="about"  className="about max-width">
            <div className="about__left">
                <h2 className="secondary-title">{profile?.aboutTitle}</h2>
                <p> {profile?.aboutWhoAmI} </p>
                {socialNetworks.map((network) => (
                    <a href={network.link} className="social-btn" target='_blank' id={network.name} key={network.name}  >
                        {network.icon} 
                  
                    </a>
                    ))}   
                <p>{profile?.aboutDescriptionMusic}</p>  
            </div>
            <div className="about__right">
                <h3 className="tertiary-title mb-m">{profile?.aboutTitleTech}</h3>
                <h3>{profile?.aboutSubtitleTech} </h3>
                <p>{profile?.aboutDescriptionTech1}</p>
                <p>{profile?.aboutDescriptionTech2}</p>
            </div>
        </section>
    );
};

export default About;
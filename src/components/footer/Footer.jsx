import React from "react";
import "./footer.css";
import { socialNetworks } from "../iconsSocial/IconsSocial";
import { useProfile } from "../../context/ProfileContext";

const Footer = () => {
    const { profile } = useProfile();

    return (
        <footer id="footer">
            <div className="footer__content max-width mb-0">
                <h2 className="tertiary-title mb-s">Vamos conversar?</h2>
                <p>{profile?.descriptionFooter || "Descrição do perfil não disponível"}</p>
                <div className="footer__contact mb-m">
                    <span className="mb-m">{profile?.email || "Email não disponível"}</span>
                    <span>{profile?.phone || "Telefone não disponível"}</span>
                </div>
                
                {socialNetworks.map((network) => (
                    <a 
                        href={network.link} 
                        className="social-btn" 
                        target='_blank' 
                        rel='noopener noreferrer' 
                    >
                        {network.icon} 
                    </a>
                ))} 
            
                <p className="footer__copyright">
                    &copy; {new Date().getFullYear()} {profile?.name || "Nome do perfil Indisponivel"}, All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;

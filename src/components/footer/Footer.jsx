import React from "react";
import "./footer.css";
import { socialNetworks } from "../iconsSocial/IconsSocial";
import { useProfile } from "../../context/ProfileContext";



const Footer = () => {
    const {profile} = useProfile();

    return (
        <footer id="footer">
            <div className="footer__content max-width mb-0">
                <h2 className="tertiary-title mb-s">Vamos conversar?</h2>
                <p>{profile?.descriptionFooter}</p>
                <div className="footer__contact mb-m">
                    <span className="mb-m">{profile?.email}</span>
                    <span>{profile?.phone} </span>
                </div>
                
                {socialNetworks.map((network) => (

                      <a href={network.link} className="social-btn" target='_blank' id={network.name} key={network.name}  >
                          {network.icon} 
                    
                      </a>))} 
            
                <p className="footer__copyright">
                    &copy; 2024 Willian Fernandes, All rights reserved
                </p>
            </div>
        </footer>
    );
  };

  export default Footer;
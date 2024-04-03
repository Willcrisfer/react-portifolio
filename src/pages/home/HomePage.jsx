import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useProfile } from "../../context/ProfileContext";
import imgprofile from "../../assets/homePage/profile.png";
import abstract from "../../assets/homePage/abstract.svg";
import scrollToTop from "../../components/scrollToTop/ScrollToTop";
import "./homepage.css";


function HomePage() {
    
 const { profile }  = useProfile();

    if (!profile) {    
        return <div> <p>Nenhum Perfil no Momento</p></div>;
    }

    return (
        <section id="home" className="max-width">
            <div className="home__left">
                <h1>{profile?.name || "Willian Fernandes"}</h1>
                <p>{profile?.homeDescription || "Sem descrição no Momento"}</p>
                <NavLink to="/about"><button className="btn btn-primary" onClick={scrollToTop}>Sobre mim</button></NavLink>
            </div>
            <div className="home__right">
                <div className="home__image">
                    <img src={imgprofile} alt="Willian Fernandes" className="profile__img" />
                    <img src={abstract} alt="background" className="home__background" />
                </div>
            </div>
        </section>
    );
};


export default HomePage;



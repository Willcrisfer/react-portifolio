import React, { useState } from "react";
import imgprofile from "../../assets/profile.png";
import abstract from "../../assets/abstract.svg";
import { NavLink } from "react-router-dom";
import { useProfile } from "../../context/ProfileContext";
import scrollToTop from "../../components/scrollToTop/ScrollToTop";
import "./homepage.css";




function HomePage() {
    
 const { profile }  = useProfile();

    return (
        <header id="header" className="max-width">
            <div className="header__left">
                <h1>{profile?.name}</h1>
                <p>{profile?.homeDescription}</p>
                <NavLink to="/about"><button className="btn btn-primary" onClick={scrollToTop} >Sobre mim</button></NavLink>
            </div>
            <div className="header__right">
                <div className="header__image">
                    <img src={imgprofile} alt="Willian Fernandes" className="profile__img" />
                    <img src={abstract} alt="background" className="background" />
                </div>
            </div>
        </header>
    );
};


export default HomePage;



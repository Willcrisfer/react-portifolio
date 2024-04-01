import React from "react";
import "./skills.css";
import { useProfile } from "../../context/ProfileContext";

import MyComponent from "../../components/cardSkills/CardSkills";




const Skills = () => {

const {profile} = useProfile();

    
    return (
        <section id="skills" className="skills">
            <div className="skills__content max-width">
                <h2 className="tertiary-title">{profile?.skillsTitle}</h2>
                <p className="skills__primary" >{profile?.skillsSubtitle}</p>

                <ul>
                    <MyComponent />
                </ul>
            </div>
        </section>
    );
  };

  export default Skills;
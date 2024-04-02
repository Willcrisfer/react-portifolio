import React from "react";
import "./skills.css";
import { useProfile } from "../../context/ProfileContext";
import CardSkills from "../../components/cardSkills/CardSkills";




const Skills = () => {

const {profile} = useProfile();

    
    return (
        <section id="skills" className="skills">
            <div className="skills__content max-width">
                <h2 className="tertiary-title">{profile?.skillsTitle}</h2>
                <p className="skills__primary" >{profile?.skillsSubtitle}</p>

                <ul>
                    <CardSkills />
                </ul>
            </div>
        </section>
    );
  };

  export default Skills;
import React from 'react';
import { useProfile } from '../../context/ProfileContext';

const CardSkills = () => {
    const { profile } = useProfile();

    if (!profile?.skills || profile.skills.length === 0) {
        return <p>Perdi Minhas Habilidades "Temporariamente espero Eu...".</p>;
    }

    return (
        <ul className="skills__list">
            {profile.skills.map(skill => (
                <li key={skill.id}>
                    {skill.img && <img src={skill.img} alt="Descriptions" />}
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                </li>
            ))}
        </ul>
    );
}

export default CardSkills;

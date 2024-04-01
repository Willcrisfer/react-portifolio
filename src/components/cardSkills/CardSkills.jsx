import React from 'react';
import { useProfile } from '../../context/ProfileContext';

const MyComponent = () => {
    const { profile } = useProfile();

    return (
        <ul className="skills__list">
            {profile?.skills.map((skill, index) => (
                <li key={index}>
                    <img src={skill.img} alt="" />
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                </li>
            ))}
        </ul>
    );
}

export default MyComponent;

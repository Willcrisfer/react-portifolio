import { useProfile } from '../../context/ProfileContext';
import './cardSkills.css';

const CardSkills = () => {
    const { profile } = useProfile();

    if (!profile?.skills || profile.skills.length === 0) {
        return <p>Habilidades temporariamente indisponíveis.</p>;
    }

    return (
        <ol className="skills__list">
            {profile.skills.map(skill => (
                <li key={skill.id}>
                    <span>{skill.number}</span>
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                </li>
            ))}
        </ol>
    );
}

export default CardSkills;

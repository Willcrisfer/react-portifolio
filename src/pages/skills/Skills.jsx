import "./skills.css";
import { useProfile } from "../../context/ProfileContext";
import CardSkills from "../../components/cardSkills/CardSkills";


const Skills = () => {

const {profile} = useProfile();

    if (!profile) {
        return <div> <p>Erro ao Obter Habilidades</p></div>
    }

    return (
        <section id="skills" className="skills">
            <div className="skills__content max-width">
                <div className="section-label">04 / Experiência</div>
                <h2 className="secondary-title">{profile?.skillsTitle ||"Minhas Habilidades"}</h2>
                <p className="skills__primary" >{profile?.skillsSubtitle || "Sem habilidades no Momento ;("}</p>

                <CardSkills />

            </div>
        </section>
    );
  };

  export default Skills;

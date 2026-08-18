import { useProfile } from "../../context/ProfileContext";
import imgprofile from "../../assets/portfolio/live-smile-color.jpg";
import "./homepage.css";


function HomePage() {
    
 const { profile }  = useProfile();

    if (!profile) {    
        return <div> <p>Nenhum Perfil no Momento</p></div>;
    }

    return (
        <section id="home" className="hero max-width">
            <div className="home__left">
                <span className="eyebrow">{profile.eyebrow}</span>
                <h1>{profile?.name || "Willian Fernandes"}</h1>
                <p>{profile?.homeDescription || "Sem descrição no Momento"}</p>
                <div className="hero__actions">
                    <a className="btn btn-primary" href="#projects">Ver performances</a>
                    <a className="text-link" href="#footer">Vamos trabalhar juntos <span aria-hidden="true">↗</span></a>
                </div>
            </div>
            <div className="home__right">
                <div className="home__image">
                    <img src={imgprofile} alt="Willian Fernandes a tocar bateria ao vivo" className="profile__img" />
                    <span className="image__caption">Drums · Voice · Live</span>
                </div>
            </div>
        </section>
    );
}


export default HomePage;



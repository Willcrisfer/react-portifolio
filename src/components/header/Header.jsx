import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/SwitchTheme";
import menu from "../../assets/menu.svg";
import logo from "../../assets/logo.jpg";
import "./header.css";

const Header = () => {
    const { theme, setTheme } = useTheme();
    const [known, setKnown] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar__content max-width mb-0">
                <NavLink to="/">
                    <img src={logo} alt="Willian Fernandes" />
                </NavLink>

                <ul className="navbar__links">
                    <li>
                        <NavLink to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">Sobre</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Skills">Habilidade</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Projects">Projetos</NavLink>
                    </li>
                    <li>
                        <a href="#footer">Contato</a>
                    </li>
                </ul>

                <button
                    className="btn__theme"
                    onClick={() => {setTheme(theme === "light" ? "dark" : "light");setKnown(!known);}}
                >
                    {known ? "Light" : "Dark"}
                </button>

                <div className="navbar__mobile">
                    <img src={menu} alt="Menu" className="burguer" />
                    <ul className="mobile__links">
                        <li>
                            <NavLink to="/">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About">Sobre</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Skills">Habilidade</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Projects">Projetos</NavLink>
                        </li>
                        <li>
                            <a href="#footer">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;

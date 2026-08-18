import { useState } from "react";
import { useTheme } from "../../context/SwitchTheme";
import menu from "../../assets/header/menu.svg";
import "./header.css";

const links = [
  ["Início", "home"],
  ["Sobre", "about"],
  ["Galeria", "gallery"],
  ["Vídeos", "projects"],
  ["Experiência", "skills"],
  ["Contacto", "footer"],
];

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="header" aria-label="Navegação principal">
      <div className="header__content max-width mb-0">
        <a className="wordmark" href="#home" aria-label="Início">WF<span>.</span></a>
        <ul className="header__links">
          {links.map(([label, id]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
        </ul>
        <button
          className="btn__theme"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label={`Ativar tema ${theme === "light" ? "escuro" : "claro"}`}
        >
          {theme === "light" ? "●" : "○"}
        </button>
        <div className={`header__mobile ${menuOpen ? "active" : ""}`}>
          <button className="menu__button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menu">
            <img src={menu} alt="" />
          </button>
          <ul className="mobile__links">
            {links.map(([label, id]) => (
              <li key={id}><a href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

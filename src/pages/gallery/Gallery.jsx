import { useState } from "react";
import liveKit from "../../assets/portfolio/live-kit-bw.jpg";
import liveSmileBw from "../../assets/portfolio/live-smile-bw.jpg";
import liveSmileColor from "../../assets/portfolio/live-smile-color.jpg";
import liveFocus from "../../assets/portfolio/live-focus-bw.jpg";
import liveMotion from "../../assets/portfolio/live-motion-color.jpg";
import livePortrait from "../../assets/portfolio/live-portrait-color.jpg";
import rehearsal from "../../assets/portfolio/studio-rehearsal.jpg";
import drumKitPortrait from "../../assets/portfolio/drum-kit-portrait.jpg";
import "./gallery.css";

const photos = [
  { src: liveSmileColor, alt: "Willian sorrindo enquanto toca bateria ao vivo", label: "Ao vivo · Porto" },
  { src: liveKit, alt: "Willian atrás do kit de bateria numa fotografia a preto e branco", label: "Drum room" },
  { src: liveSmileBw, alt: "Willian durante uma performance a preto e branco", label: "Entre canções" },
  { src: liveFocus, alt: "Retrato de perfil durante uma atuação", label: "Concentração" },
  { src: liveMotion, alt: "Willian em movimento durante uma atuação com luz azul", label: "Em movimento" },
  { src: livePortrait, alt: "Retrato de Willian com baquetas durante uma atuação", label: "No palco" },
  { src: rehearsal, alt: "Ensaio de banda visto a partir da bateria", label: "Em estúdio" },
  { src: drumKitPortrait, alt: "Willian com o seu kit de bateria visto de cima", label: "O kit" },
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const previous = () => setCurrent((index) => (index - 1 + photos.length) % photos.length);
  const next = () => setCurrent((index) => (index + 1) % photos.length);
  const photo = photos[current];

  return (
    <section id="gallery" className="gallery max-width">
      <div className="gallery__intro">
        <div className="section-label">02 / Galeria</div>
        <h2 className="secondary-title">Entre o palco<br />e o estúdio</h2>
        <p>Momentos que mostram a energia, a concentração e a alegria por trás de cada performance.</p>
      </div>

      <div className="carousel" tabIndex="0" aria-label="Carrossel de fotografias. Use as setas para navegar." onKeyDown={(event) => {
        if (event.key === "ArrowLeft") previous();
        if (event.key === "ArrowRight") next();
      }}>
        <div className="carousel__stage" aria-live="polite">
          <img src={photo.src} alt={photo.alt} />
          <span className="carousel__label">{photo.label}</span>
          <span className="carousel__count">{String(current + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span>
          <div className="carousel__controls">
            <button type="button" onClick={previous} aria-label="Fotografia anterior">←</button>
            <button type="button" onClick={next} aria-label="Fotografia seguinte">→</button>
          </div>
        </div>
        <div className="carousel__thumbs" aria-label="Escolher fotografia">
          {photos.map((item, index) => (
            <button
              type="button"
              className={index === current ? "active" : ""}
              onClick={() => setCurrent(index)}
              aria-label={`Ver fotografia ${index + 1}: ${item.label}`}
              aria-pressed={index === current}
              key={item.src}
            >
              <img src={item.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

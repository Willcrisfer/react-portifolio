import { useState } from "react";
import { useProfile } from "../../context/ProfileContext";
import vimeoThumbnail from "../../assets/portfolio/live-smile-color.jpg";
import "./cardProjects.css";

function CardProjects() {
  const { profile } = useProfile();
  const videos = [
    ...(profile?.projects || []).map((video) => ({ ...video, format: "Performance", platform: video.platform || "youtube" })),
    ...(profile?.shorts || []).map((video) => ({ ...video, format: "Short", platform: "youtube", isShort: true })),
  ].map((video) => ({ ...video, key: `${video.platform}-${video.format}-${video.id}` }));
  const [selectedKey, setSelectedKey] = useState(null);
  const selected = videos.find((video) => video.key === selectedKey) || videos[0];

  if (!selected) return <p>Nenhum vídeo no momento.</p>;

  const isVimeo = selected.platform === "vimeo";
  const embedUrl = isVimeo
    ? `https://player.vimeo.com/video/${selected.videoId}?h=${selected.videoHash}&title=0&byline=0&portrait=0`
    : `https://www.youtube-nocookie.com/embed/${selected.videoId}?rel=0`;

  return (
    <div className="video-gallery">
      <div className={`video-player ${selected.isShort ? "video-player--portrait" : ""}`}>
        <iframe
          key={selected.key}
          src={embedUrl}
          title={selected.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="video-now-playing">
        <div>
          <span className="project__category">A assistir · {selected.format}</span>
          <h3 className="tertiary-title">{selected.title}</h3>
        </div>
        <a href={selected.link} target="_blank" rel="noopener noreferrer">
          Abrir no {isVimeo ? "Vimeo" : "YouTube"} <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="video-playlist" aria-label="Escolher vídeo">
        {videos.map((video, index) => (
          <button
            type="button"
            className={video.key === selected.key ? "video-card active" : "video-card"}
            onClick={() => setSelectedKey(video.key)}
            aria-pressed={video.key === selected.key}
            key={video.key}
          >
            <span className={`video-card__image ${video.isShort ? "video-card__image--short" : ""}`}>
              <img
                src={video.platform === "vimeo" ? (video.thumbnail || vimeoThumbnail) : `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
                alt=""
                loading="lazy"
              />
              {video.platform === "vimeo" && <span className="video-card__provider">Vimeo</span>}
              <span className="video-card__play" aria-hidden="true">▶</span>
            </span>
            <span className="video-card__meta">
              <span>{String(index + 1).padStart(2, "0")} · {video.format}</span>
              <strong>{video.title}</strong>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default CardProjects;

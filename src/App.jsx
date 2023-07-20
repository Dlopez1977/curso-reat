import { useState } from "react";
import "./App.css";

export const App = ({ children, userName }) => {
  const [isfollowing, setIsfollowing] = useState(false);
    const imgUser = `https://unavatar.io/${userName}`;
  
  const text = isfollowing ? "siguiendo" : "seguir";
  const buttonClassName = isfollowing
    ? "tw-followCard-button is-following"
    : "tw-following-button";

  const handleClick = () => {
    setIsfollowing(!isfollowing);
  };
  return (
    <>
    
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={imgUser} alt="Cristopher"/>
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">dejar de seguir</span>
        </button>
      </aside>
    </article>
  
    </>
  );
};



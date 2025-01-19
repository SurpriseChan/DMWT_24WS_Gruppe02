import React, { useState } from "react";
import { useRouter } from "next/router";

const ThirdPage = () => {
  const [animate, setAnimate] = useState(false);
  const [clickCount, setClickCount] = useState(0); // Track button clicks
  const [bubbleText, setBubbleText] = useState(
    "Diese Solarplatinen fangen das Licht der Sonne ein und wandeln es durch den Photovoltaischen Effekt in elektrische Energie um, die wir für Häuser Geräte und alles andere nutzen."
  ); // Speech bubble text
  const router = useRouter(); //Macht das man Seite Wechseln Kann
  const handleNavigate = () => {
    // Geht zur Zweiten Seite
    router.push("/3rdPage");
  };

  const triggerAnimation = () => {
    if (clickCount === 1) {
      handleNavigate(); // Redirect to the next page
    } else {
      setAnimate(true);
      setClickCount(clickCount + 1);
      setBubbleText(
        "Die Sonne erzeugt keine Abgase und hinterlässt keine schädlichen Rückstände. Dieser Glorreichee Ball aus Feuer wird in gegenzatz zu Fossilen Brennstoffen noch für Millarden von Jahren brennen. Ein Wahres Symbol der Ewigekeit"
      ); // Update speech bubble text
    }
  };

  return (
    <div className="Second-Page">
      <header className="header">
        <div className="header-text"></div>
        <div className="header-links">
          <a href="/">Home Page</a>
          <a href="/2ndPage">Solar Energy</a>
          <a href="/3rdPage">Wind Energy</a>
          <a href="/4thPage">Hydro Energy</a>
          <a href="/SearchPage">Search Page</a>
        </div>
      </header>

      <div className={`solair-side-img ${animate ? "animate" : ""}`}>
        <img src="../components/Solair_side.png" alt="Solair Side" />
        <div className={`speech-bubble-container ${animate ? "animate" : ""}`}>
          <div className="speech-bubble">{bubbleText}</div>
        </div>
      </div>
      <button onClick={triggerAnimation} className="next-button"></button>
    </div>
  );
};
export default ThirdPage;

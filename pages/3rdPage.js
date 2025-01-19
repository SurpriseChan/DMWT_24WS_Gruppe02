import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function ThirdPage() {
  const [bubbleText, setBubbleText] = useState(
    "Diese Gigantischen Maschinen nutzten die Kraft des Windes um Energie erzeugen, indem es ihre gigantischen Rotorblätter zu drehen bringt.Diese Bewegung wird in einem Generator in Strom umgewandelt. Einfach, sauber und *unendlich verfügbar. – *solange der Wind weht!"
  );
  const [clickCount, setClickCount] = useState(0);
  const router = useRouter();
  const handleNavigate = () => {
    // Geht zur Zweiten Seite
    router.push("/4thPage");
  };

  const triggerSpeech = () => {
    if (clickCount === 1) {
      handleNavigate(); // Redirect to the next page
    } else {
      setClickCount(clickCount + 1);
      setBubbleText(
        "Größe ist hier der Schlüssel. Je größer die Blätter, desto mehr Wind kann einfangen und in Energie umwandelt werden. Manche Turbinen reichen bis zu 200 Meter in den Himmel!"
      ); // Update speech bubble text
    }
  };

  return (
    <div className="third-Page">
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

      <div className="speech-bubble-2">{bubbleText}</div>
      <button onClick={triggerSpeech} className="next-button"></button>
    </div>
  );
}

export default ThirdPage;

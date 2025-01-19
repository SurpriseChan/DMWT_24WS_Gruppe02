import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EnergyOptionCard from "../components/EnergyOptionCard";

/*function StartPage() {
  const router = useRouter();   //Macht das man Seite Wechseln Kann

  const handleNavigate = () => {  // Geht zur Zweiten Seite
    router.push('/2ndPage');
  };

  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={handleNavigate}>Zweite Seite</button>
      <li>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"/>
      </li>
    </div>
  );
}*/
function StartPage() {
  const router = useRouter();
  const handleNavigate = () => {
    // Geht zur Zweiten Seite
    router.push("/2ndPage");
  };

  return (
    <div className="start-page">
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
      <button onClick={handleNavigate} className="next-button"></button>
    </div>
  );
}
export default StartPage;

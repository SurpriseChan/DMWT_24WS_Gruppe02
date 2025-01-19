import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function fifthPage() {
  const router = useRouter();
  const handleNavigate = () => {
    // Geht zur Zweiten Seite
    router.push("/SearchPage");
  };

  return (
    <div className="fifth-page">
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
export default fifthPage;

import EnergyOptionCard from "../components/EnergyOptionCard";
import { useEffect, useState } from "react";
import React from "react";
function SearchPage() {
  const [energyOptions, setEnergyOptions] = useState([]);

  useEffect(() => {
    async function fetchEnergyOptions() {
      const res = await fetch("/api/energy-options");
      const data = await res.json();
      if (data.success) {
        setEnergyOptions(data.data);
      }
    }

    fetchEnergyOptions();
  }, []);

  return (
    <div className="search-page">
      <header className="header">
        <div className="header-text"></div>
        <div className="header-links">
          <a href="/">Home Page</a>
          <a href="/2ndPage">Solar Energy</a>
          <a href="/3rdPage">Wind Energy</a>
          <a href="/4thPage">Thermal Energy</a>
          <a href="/SearchPage">Search Page</a>
        </div>
      </header>
      <h1>Search Page</h1>
      <div className="search-bar">
        <input type="text" placeholder="Energy options" />
        <input type="text" placeholder="Location" />
        <button>Search</button>
      </div>
      <div className="energy-options-container">
        {energyOptions.map((option, index) => (
          <EnergyOptionCard key={index} {...option} />
        ))}
      </div>
    </div>
  );
}
export default SearchPage;

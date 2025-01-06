import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import EnergyOptionCard from '../components/EnergyOptionCard';

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
  const [energyOptions, setEnergyOptions] = useState([]);

  useEffect(() => {
    async function fetchEnergyOptions() {
      const res = await fetch('/api/energy-options');
      const data = await res.json();
      if (data.success) {
        setEnergyOptions(data.data);
      }
    }

    fetchEnergyOptions();
  }, []);

  return (
    <div className="home-container">
      <h1>Green Energy Options</h1>
      <div className="energy-options-container">
        {energyOptions.map((option, index) => (
          <EnergyOptionCard key={index} {...option} />
        ))}
      </div>
    </div>
  );
}
export default StartPage;

import React from 'react';
import { useRouter } from 'next/router';

function StartPage() {
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
}

export default StartPage;

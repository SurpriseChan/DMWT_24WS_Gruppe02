import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function ApiPage() {
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setData(data.slice(0, 10))) // Ersten 10 Daten
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  
  const handleBack = () => {
    router.push('/'); // Zurück zur Start Seite
  };

  return (
    <div className='Second-Page'>
      <h1>API Seite</h1>
      {data && data.length > 0 ? (  // Prüft ob data frei ist und ob es sachen hat
        <div>
          <h2>Ersten 10 Kommentare von der API:</h2>
          <button onClick={handleBack}>Start Seite</button>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <p><strong>Kommentar:</strong> {item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
  
//<p><strong>Email:</strong> {item.name}</p>  //Name
//<p><strong>Email:</strong> {item.email}</p> //Email

export default ApiPage;

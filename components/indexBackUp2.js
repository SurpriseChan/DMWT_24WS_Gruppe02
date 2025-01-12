/*import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClickfront() {
    if (index == 11) {
      setIndex(0);
    }
    else{
      setIndex(index + 1);
    }
  }

  function handleClickback() {
    if (index == 0) {
      setIndex(11);
    }
    else{
      setIndex(index - 1);
    }
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClickfront}>
        Next
      </button>
      <button onClick={handleClickback}>
        Back
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}*/
//by {sculpture.artist}

import React from 'react';
import './EksInTerior.css';

function EksInTerior({img,title,word}) {
  return (
  <div className='container-terior'>
      <div>
          <h3>{title}</h3>
      </div>
      <div>
          <img src={img} className='img-terior'></img>
      </div>

      <div className='wrapper-word'>
          <a className='word-button' href='#'>
              {word}
          </a>
      </div>
  </div>
  );
}

export default EksInTerior;

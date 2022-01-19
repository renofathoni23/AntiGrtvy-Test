import React from 'react';
import'./ServiceInfo.css';
import pemesanan from "../../assets/images/pesan-servis.png"
import sukucadang from "../../assets/images/sukucadang.png"

function ServiceInfo() {
  return (
      <div className='container-service'>
          <a href='#'>
              <img src={pemesanan} className='image-service'></img>
          </a>
          <a href='#'>
              <img src={sukucadang} className='image-service'></img>
          </a>
      </div>
  );
}

export default ServiceInfo;

import React from 'react';
import "./FloatingBar.css"
import wa from "../../assets/images/Mask Group.png"
import harga from "../../assets/images/Group 68.png"
import servis from "../../assets/images/Group 69.png"
import simulasi from "../../assets/images/Group 70.png"
function FloatingBar() {
  return (
  <div className='floating-container'>
      <div className='floating-wrapper'>
          <div className='floating-items'>
              <a className='col-item' href='#'>
                  <img src={wa} className='img-floating-icon'></img>
                  <span>WhatsApp</span>
              </a>
          </div>

          <div className='floating-items'>
              <a className='col-item' href='#'>
                  <img src={harga} className='img-floating-icon'></img>
                  <span>Daftar Harga</span>
              </a>
          </div>

          <div className='floating-items'>
              <a className='col-item' href='#'>
                  <img src={servis} className='img-floating-icon'></img>
                  <span>Pesan Servis</span>
              </a>
          </div>

          <div className='floating-items'>
              <a className='col-item' href='#'>
                  <img src={simulasi} className='img-floating-icon'></img>
                <span>Simulasi Kredit</span>
              </a>
          </div>
      </div>
  </div>
  );
}

export default FloatingBar;

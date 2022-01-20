import React from 'react';
import wa from "../../assets/images/Mask Group.png"
import simulasi from "../../assets/images/Group 70.png"
import './FloatingBooking.css'

function FloatingBooking() {
  return (
  <div>
    <div className='floating-container'>
      <div className='floating-wrapper'>

        <div className='booking'>
              <a className='col-item-booking' href='#'>
                  <span className='booking-mobil'>Booking Mobil</span>
              </a>
          </div>

          <div className='floating-items'>
              <a className='col-item' href='#'>
                  <img src={wa} className='img-floating-icon'></img>
                  <span>WhatsApp</span>
              </a>
          </div>

          <div className='floating-items'>
              <a className='col-item'>
                  <img src={simulasi} className='img-floating-icon'></img>
                <span>Simulasi Kredit</span>
              </a>
          </div>
      </div>
    </div>
  </div>
  );
}

export default FloatingBooking;

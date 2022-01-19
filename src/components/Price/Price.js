import React from 'react';
import './Price.css'

function Price({mobil}) {
  return (
  <div className='container-price'>
      <div className='item-wrapper'>
          <h5>{mobil.tipe}</h5>
      </div>

      <div className='item-wrapper'>
            <h5>{mobil.harga}</h5>
      </div>
  </div>);
}

export default Price;

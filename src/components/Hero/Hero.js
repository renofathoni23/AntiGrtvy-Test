import React from 'react';
import './Hero.css'
import hero from "../../assets/images/image 16.png"
import name from "../../assets/images/image 17.png"
import gear from "../../assets/images/image 18.png"


function Hero() {
  return(
    <div className='container-hero'>
        <div className='upper-hero'>
            <img className='img-hero-background' src={hero}></img>
            <img className='img-hero-title' src={name}></img>
        </div>

        <div className='lower-hero'>
            <div className='gear-wrapper'>
                <img src={gear} className='hero-gear'></img>
                <p className='p-gear'>Suzuki XL7 hadir dengan tampilan maskulin, tangguh dan berkarakter. Desain modern SUV 7-Seater memberikan kebanggaan dan kepercayaan bagi penggunanya. Dilengkapi dengan fitur canggih semakin membuat XL7 menjadi SUV yang luar biasa di kelasnya</p>
            </div>
            <div className='line'></div>
            <div className='button-wrap'>
                <div className='button-item'>
                    <a className='brosur-button' href='#'>
                        UNDUH BROSUR
                    </a>
                </div>
                <div className='button-item'>
                    <a className='harga-button'>
                        HARGA
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;

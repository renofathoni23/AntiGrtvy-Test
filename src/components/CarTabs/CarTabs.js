import React, {useState} from 'react';
import './CarTabs.css'
import {CommercialCar} from './CommercialCar'
import {PassangerCar} from './PassangerCar'



function CarTabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    }


  return(
    <div className='contianer-car'>
        <div className='container-find-car'>
            <div className='title'>
                <h2 className='title-find-car'> Temukan Mobil Suzuki yang tepat untuk Anda</h2>
            </div>
            <div className='container-tabs'>
                <div className={toggleState === 1 ? "car-tabs active-tabs": "car-tabs"} onClick={() => toggleTab(1)}>
                    <h3>Passanger Car</h3>
                </div>
                <div className={toggleState === 2 ? "car-tabs active-tabs": "car-tabs"}  onClick={() => toggleTab(2)}>
                    <h3>Commercial Car</h3>
                </div>
            </div>
        </div>


        <div className='containter-detail-car'>
            <div className={toggleState === 2 ? "content active-content": "content"}>
                {CommercialCar && CommercialCar.length > 0 && CommercialCar.map((cars)=>(
                    <a href='/overview'className='wrapper-list'>
                        <div className='contain'>
                            <div className='details'>
                                <div className='image-car-container'>
                                    <img src={cars.image} className='image-car'></img>
                                </div>
                            
                                <div className='car-detail'>
                                    <h4 className='car-tipe items'>{cars.type}</h4>
                                    <span className='start-price items'>Mulai Dari</span>
                                    <h4 className='price items'>{cars.price}</h4>
                                    <div className='container-button'>
                                        <a className='button-detail items'>
                                            Lihat Detail
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='line'></div>
                        </div>
                    </a>
                ))}
                <div className='container-lihat-mobil'>
                    <a className='button-lihat-semua-mobil'>
                        Lihat Semua Mobil
                    </a>
                </div>
            </div>

            <div className={toggleState === 1 ? "content active-content": "content"}>
                {PassangerCar && PassangerCar.length > 0 && PassangerCar.map((cars)=>(
                    <a href='/overview' className='wrapper-list'>
                        <div className='contain'>
                            <div className='details'>
                                <div className='image-car-container'>
                                    <img src={cars.image} className='image-car'></img>
                                </div>
                            
                                <div className='car-detail'>
                                    <h4 className='car-tipe items'>{cars.type}</h4>
                                    <span className='start-price items'>Mulai Dari</span>
                                    <h4 className='price items'>{cars.price}</h4>
                                    <div className='container-button'>
                                        <a className='button-detail items'>
                                            Lihat Detail
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='line'></div>
                        </div>
                    </a>
                ))}
                <div className='container-lihat-mobil'>
                    <a className='button-lihat-semua-mobil'>
                        Lihat Semua Mobil
                    </a>
                </div>
            </div>
        </div>
    </div>  
  )
}


export default CarTabs;

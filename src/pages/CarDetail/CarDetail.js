import React from 'react';
import EksInTerior from '../../components/EksInTerior/EksInTerior';
import Hero from '../../components/Hero/Hero';
import './CarDetail.css'
import interior from "../../assets/images/xl7-interior.png"
import eksterior from "../../assets/images/xl7-eksterior.png"
import {PriceList} from "../../components/Price/PriceList"
import Price from '../../components/Price/Price';
function CarDetail() {
  return (
    <div className='container'>
        <div className='row'>
            <Hero></Hero>
            <EksInTerior img={eksterior} title={"EKSTERIOR"} word={"Lihat Semua Eksterior"}></EksInTerior>
            <EksInTerior img={interior} title={"INTERIOR"} word={"Lihat Semua Interior"}></EksInTerior>
            <div className='container-price-car'>
                <div className='title-price-car'>
                    <h4>DAFTAR HARGA XL7</h4>
                </div>
                <div className='card-price-car'>
                {PriceList && PriceList.length>0 && PriceList.map((mobil)=>(
                    <Price mobil={mobil}></Price>
                ))}
                </div>
                <div className='price-button-wrapper'>
                    <a className='button-price-car'>
                        Lihat Semua Harga Mobil
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CarDetail;

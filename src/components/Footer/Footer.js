import React from 'react'
import './Footer.css'
import { FiMapPin } from "react-icons/fi"
import { BsTelephone } from "react-icons/bs"
import hotlineImage from "../../assets/images/image 12.png"
import suzukiImage from "../../assets/images/image 13.png"
import ecstarImage from "../../assets/images/image 14.png"

function Footer() {
    return (
        <div className='footer-container'>
            <div className='menu-section'>
                <ul className='menu-items'>
                    <li className='item'><a href='/' className='item-a'>Beranda</a></li>
                    <li className='item'><a href='#' className='item-a'>Tentang Kami</a></li>
                    <li className='item'><a href='/outlet' className='item-a'>Outlet</a></li>
                    <li className='item'><a href='#' className='item-a'>Blog</a></li>
                    <li className='item'><a href='#' className='item-a'>Promo</a></li>
                </ul>
            </div>

            <div className='line'></div>
            <div className='address-section'>
                <div className='address-wrapper'>
                    <h2 className='address-title'>ALAMAT</h2>
                    <h3 className='office-name'>Suzuki Nusantara Jaya Sentosa</h3>
                    <h4 className='address'>Jl. Soekarno - Hatta no. 289, Bojongloa Kidul Bandung 40234</h4>
                    <div className='container-map'>
                        <a className='maps-wrapper' href='#'>
                            <FiMapPin className='icon-footer'></FiMapPin>
                            <h4 className='map-words'>CEK GOOGLE MAPS</h4>
                        </a>

                        <a className='telp-wrapper' href='#'>
                            <BsTelephone className='icon-footer'></BsTelephone>
                            <h4 className='notelp-words'>(022) 5204645</h4>
                        </a>
                    </div>
                </div>
            </div>

            <div className='line'></div>
            <div className='hotline-section'>
                <div className='hotline-wrapper'>
                    <h2 className='hotline-title'>HOTLINE 24 JAM (Bebas Pulsa)</h2>
                    <a href='#'>
                        <img src={hotlineImage} className='logo-hotline'></img>
                    </a>
                    
                </div>

                <div className='hotline-wrapper'>
                    <h2 className='download-title'>DOWNLOAD MY SUZUKI</h2>
                    <a href='#'>
                        <img src={suzukiImage} className='logo-suzuki'></img>
                    </a>

                    <a href='#'>
                        <img src={ecstarImage} className='logo-ecstar'></img>
                    </a>
                </div>
            </div>

            <div className='rights-section'>
                <div className='rights-wrapper'>
                    <h5 className='rights-word'> © 2020 Suzuki Indonesia.</h5>
                    <h5 className='rights-word'>All rights reserved.</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer

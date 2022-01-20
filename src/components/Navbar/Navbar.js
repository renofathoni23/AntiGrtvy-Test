import React, { useState } from 'react';
import * as FiMenu from "react-icons/fi"
import * as AiIcons from "react-icons/ai";
import Suzuki from '../../assets/images/logo (5).png'
import hotlineImage from "../../assets/images/image 12.png"
import suzukiImage from "../../assets/images/image 13.png"
import './Navbar.css'

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    

    return (
        <div className='nav'>
            <div className='logo-company-wrapper'>
                <a href='/' className='beranda'>
                    <img src={Suzuki} className='logo'></img>
                </a>
            </div>

            <div className='menu-wrapper'>
                <FiMenu.FiMenu className='menu' onClick={showSidebar}></FiMenu.FiMenu>
            </div>
            <div>
                <nav className= {sidebar ? 'nav-menu active': 'nav-menu'} onClick={showSidebar}>
                    <ul>
                        <li className='close-menu'>
                            <AiIcons.AiOutlineClose className='close-icon' onClick={showSidebar}></AiIcons.AiOutlineClose>
                        </li>
                        <a href='/' className='beranda'>
                            <li className='ham-items'>Beranda</li>
                        </a>

                        <a href='/' className='beranda'>
                            <li className='ham-items'>Tentang Kami</li>
                        </a>
                        
                        <a href='/outlet' className='beranda'>
                            <li className='ham-items'>Outlet</li>
                        </a>

                        <a href='/' className='beranda'>
                            <li className='ham-items'>Blog</li>
                        </a>

                        <a href='/' className='beranda'>
                            <li className='ham-items'>Promo</li>
                        </a>
                    </ul>

                    <div className='line-nav'></div>
                    <div className='nav-logo-container'>
                        <div className='contain-telp'>
                            <a className='link-telp' href='#'>
                                (022) 5204645
                            </a>
                        </div>
                        <div className='logos-container'>
                            <div className='hotline-nav-container'>
                                <img src={hotlineImage} className='logo-ham hotline'></img>
                            </div>

                            <div className='hotline-nav-container'>
                                <img src={suzukiImage}className='logo-ham suz'></img>
                            </div>
                            
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar

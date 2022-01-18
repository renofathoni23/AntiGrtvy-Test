import React, { useState } from 'react';
import * as FiMenu from "react-icons/fi"
import * as AiIcons from "react-icons/ai";
import Suzuki from '../../assets/images/logo (5).png'
import './Navbar.css'

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    

    return (
        <div className='nav'>
            <div className='logo-company-wrapper'>
                <img src={Suzuki} className='logo'></img>
            </div>

            <div className='menu-wrapper'>
                <FiMenu.FiMenu className='menu' onClick={showSidebar}></FiMenu.FiMenu>
            </div>
            <div>
                <nav className= {sidebar ? 'nav-menu active': 'nav-menu'}>
                    <ul>
                        <li className='close-menu'>
                            <AiIcons.AiOutlineClose className='close-icon' onClick={showSidebar}></AiIcons.AiOutlineClose>
                        </li>
                        <li>Beranda</li>
                        <li>Tentang Kami</li>
                        <li>Outlet</li>
                        <li>Blog</li>
                        <li>Promo</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar

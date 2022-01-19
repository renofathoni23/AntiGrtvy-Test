import React from 'react'
import image from "../../assets/images/image 15 (1).png"
import "./CardOutlet.css"
import { FaMapMarkerAlt } from "react-icons/fa"
import { BsFillTelephoneFill } from "react-icons/bs"

function CardOutlet({outlet}) {
    return (
        
            <div className='card'>
                <a href='#' className='wrapper-list-outlet'>
                    <div className='card-upper'>
                        <img src={image} className='img-outlet'></img>
                    </div>
                    <div className='card-buttom'>
                        <h3 className='tipe'>{outlet.tipe}</h3>
                        <h2 className='nama'>{outlet.nama}</h2>
                        <div className='info-telp'>
                            <BsFillTelephoneFill className='telp-icon'></BsFillTelephoneFill>
                            <span className='notelp'>{outlet.noTelp}</span>
                        </div>
                        
                        <div className='info-loct'>
                            <FaMapMarkerAlt className='location-icon'></FaMapMarkerAlt>
                            <span className='alamat'>{outlet.alamat}</span>
                        </div>

                        <div className='button-wrapper'>
                            <a className='button-outlet'>
                                Kunjungi Website Outlet
                            </a>
                        </div>
                    </div>
                </a>
            </div>
    )
}

export default CardOutlet

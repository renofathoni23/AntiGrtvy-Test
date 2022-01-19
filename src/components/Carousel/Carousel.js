import React from 'react'
import './Carousel.css'
import imageCarousel from "../../assets/images/image 1.png"

function Carousel() {
    return (
        <div>
            <img src={imageCarousel} className='img-carousel'></img>
        </div>
    )
}

export default Carousel

import React from 'react'
import "./CardNews.css"
import img from "../../assets/images/image 8.png"

function CardNews({news}) {
    return (
        <div>
            <div className='card-news'>
                <div className='card-upper'>
                    <img className='img-news' src={img}></img>
                </div>

                <div className='card-buttom'>
                    <span>{news.date}</span>
                    <h3>{news.title}</h3>
                </div>
            </div>
        </div>
    )
}

export default CardNews

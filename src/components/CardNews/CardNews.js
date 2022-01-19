import React from 'react'
import "./CardNews.css"


function CardNews({news}) {
    return (
        <div>
            <div className='card-news'>
                <a className='wrapper-list-news' href='#'>
                    <div className='card-upper'>
                        <img className='img-news' src={news.image}></img>
                    </div>

                    <div className='card-buttom'>
                        <span className='news-date'>{news.date}</span>
                        <h4 className='news-title'>{news.title}</h4>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default CardNews

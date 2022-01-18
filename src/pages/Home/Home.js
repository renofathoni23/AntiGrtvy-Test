import React, {useState, useEffect} from 'react'
import CardOutlet from '../../components/CardOutlet/CardOutlet';
import "./Home.css"
import {NewItems} from '../../components/CardNews/NewsItems';
import CardNews from '../../components/CardNews/CardNews';

function Home() {
    const [outlet, setOutlet] = useState([])
    const getData = () =>{
        fetch('dataOutlet.json'
        , {
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }
        ).then(function(response){
            return response.json();
        })
        .then(function(myJson){
            setOutlet(myJson)
        });
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='container'>
            <div className='container-title'>
                <h2 className='home-title'>Temukan Outlet Suzuki terdekat di daerah sekitar Anda</h2>
            </div>
            <div className='container-outlet'>
                <div className='row'>
                    {
                        outlet && outlet.length>0 && outlet.map((outlet)=>(
                            <CardOutlet outlet = {outlet}></CardOutlet>
                        ))
                    }
                </div>
            </div>

            <div className='container-title news'>
                <div className='row-title'>
                    <h1 className='home-title upper'>Informasi Terbaru</h1>
                    <h2 className='home-title lower'>
                        Seputar Promo, Berita, Event dari Suzuki
                    </h2>
                </div>
            </div>
            <div className='container-outlet'>
                <div className='row'>
                    {
                        NewItems && NewItems.length>0 && NewItems.map((news)=>(
                            <CardNews news = {news}></CardNews>
                        ))
                    }
                </div>
            </div>

            <div className='info-wrapper'>
                <div className='button-information'>
                    <a>
                        Lihat Semua Informasi
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Home

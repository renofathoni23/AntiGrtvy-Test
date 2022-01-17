import React, {useState, useEffect} from 'react'
import CardOutlet from '../../components/CardOutlet/CardOutlet';
import "./Home.css"

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
            console.log(response)
            return response.json();
        })
        .then(function(myJson){
            console.log(myJson)
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
        </div>
    )
}

export default Home

import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import CarTabs from '../../components/CarTabs/CarTabs'
import FloatingBar from '../../components/FloatingBar/FloatingBar'
import ServiceInfo from '../../components/ServiceInfo/ServiceInfo'
import "./Outlet.css"

function Outlet() {
    return (
        <div className='container'>
            <div className='row'>
                <Carousel></Carousel>
                <CarTabs></CarTabs>
                <ServiceInfo></ServiceInfo>
                <FloatingBar></FloatingBar>
            </div>
        </div>
    )
}

export default Outlet

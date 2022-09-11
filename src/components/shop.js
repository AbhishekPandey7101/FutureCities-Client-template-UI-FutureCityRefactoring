import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ShogGrid from './shop-components/shop-right-sidebar';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import { useLocation } from "react-router-dom"


const Shop_V1 = () => {
    const location = useLocation()
  
    console.log("Hello")
    console.log(location.state)
    return <div>
        <Navbar />
        <PageHeader headertitle={(location.state?location.state.title:"Housing Type")} />
        <ShogGrid housingTypeSlug = {(location.state?location.state.housingType:"-")}/>
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Shop_V1


import React from 'react';
import TopBar from './global-components/topbar';
import Navbar from './global-components/navbar-v3';
import BannerV5 from './section-components/banner-v5';
import Category from './section-components/category-v3';
import Service from './section-components/service-v2';
import CallToActionV3 from './section-components/call-to-action-v3';
import Video from './section-components/video-v3';
import Brand from './section-components/brand';
import Testimonial from './section-components/testimonial-v4';
import Gallery from './section-components/gallery-v1';
import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import UpComingProduct from './section-components/upcoming-product-v1';
const Home_V1 = () => {
    return <div>
        <Navbar CustomClass="ltn__header-transparent gradient-color-2" /> 
        <BannerV5 />
        <Category />
        <Service />
        <CallToActionV3 />
        <Video />
        <UpComingProduct />
        <Brand />
        <Testimonial />
        <Gallery />
        <BlogSlider sectionClass="pt-90" customClass="section-subtitle-2" />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Home_V1


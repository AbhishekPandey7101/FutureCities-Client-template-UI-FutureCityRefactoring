import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV5 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="ltn__slider-area ltn__slider-4">
				<div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">
				{/* ltn__slide-item */}
				<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-4 bg-image bg-overlay-theme-black-60" data-bs-bg={publicUrl+"assets/img/slider/11.jpeg"}>
					<div className="ltn__slide-item-inner text-left">
					<div className="container">
						<div className="row">
						<div className="col-lg-12 align-self-center">
							<div className="slide-item-car-dealer-form">
							<div className="ltn__car-dealer-form-tab">
								<div className="ltn__tab-menu  text-uppercase">
								<div className="nav">
									<a className="active show" data-bs-toggle="tab" href="#ltn__form_tab_1_1"><i className="fas fa-home" />Find a Home</a>
								</div>
								</div>
								<div className="tab-content">
								<div className="tab-pane fade active show" id="ltn__form_tab_1_1">
									<div className="car-dealer-form-inner">
									<form action="#" className="ltn__car-dealer-form-box row">
										<div className="car-price-filter-range col-lg-8">
										<h2 >Which housing type matches my profile?</h2>
										</div> 
										<div className="car-price-filter-range col-lg-12">
										<p >We've simplified the house selection process with our income range Plans. Based on income filters, we show you exactly the housing complexes that suits your profile, therefore instead of going through hundreds of different housing copmplexes, you go through only the categories that interests you & matches your profile .</p>
										</div> 
										<br/>
										<div className="car-price-filter-range col-lg-12">
										<h3 >Income Range</h3>
										</div> 
										<div className="car-price-filter-range col-lg-12">
										<div className="price_filter">
											<div className="price_slider_amount">
											<input type="submit" defaultValue="Your range:" /> 
											<input type="text" className="amount" name="price" placeholder="Add Your Price" /> 
											</div>
											<div className="slider-range" />
										</div>
										<div className="btn-wrapper text-center go-top">
											{/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
											<Link to="/shop-right-sidebar" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search Houses</Link>
										</div>
										</div>
									</form>
									</div>
								</div>
								
								</div>
							</div>                                        
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default BannerV5
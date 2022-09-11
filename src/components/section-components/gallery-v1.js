import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import img from '../assests/pic12.jpeg';
import img1 from '../assests/pic16.jpeg';
import img2 from '../assests/pic10.jpeg';
import img3 from '../assests/pic15.jpeg';
import img4 from '../assests/pic16.jpeg';
class Gallery extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="ltn__img-slider-area">
			<div className="container-fluid">
				<div className="row ltn__image-slider-4-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
					<div className="col-lg-12">
						<div className="ltn__img-slide-item-4">
							<a href={publicUrl + "assets/img/img-slide/21.jpg"} data-rel="lightcase:myCollection">
								<img src={img} alt="Image" />
							</a>
							<div className="ltn__img-slide-info">
								<div className="ltn__img-slide-info-brief gp-top">
									<h6>Heart of NYC</h6>
									<h1><Link to="/portfolio-details">Manhattan </Link></h1>
								</div>
								<div className="btn-wrapper go-top">
									<Link to="/portfolio-details" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="ltn__img-slide-item-4">
							<a href={publicUrl + "assets/img/img-slide/22.jpg"} data-rel="lightcase:myCollection">
								<img src={img1} alt="Image" />
							</a>
							<div className="ltn__img-slide-info">
								<div className="ltn__img-slide-info-brief gp-top">
									<h6>The luxury crib</h6>
									<h1><Link to="/portfolio-details">Upper East Side</Link></h1>
								</div>
								<div className="btn-wrapper go-top">
									<Link to="/portfolio-details" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="ltn__img-slide-item-4">
							<a href={publicUrl + "assets/img/img-slide/23.jpg"} data-rel="lightcase:myCollection">
								<img src={img2} alt="Image" />
							</a>
							<div className="ltn__img-slide-info">
								<div className="ltn__img-slide-info-brief gp-top">
									<h6>The Best City</h6>
									<h1><Link to="/portfolio-details">Jersey City</Link></h1>
								</div>
								<div className="btn-wrapper go-top">
									<Link to="/portfolio-details" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="ltn__img-slide-item-4">
							<a href={publicUrl + "assets/img/img-slide/24.jpg"} data-rel="lightcase:myCollection">
								<img src={img3} alt="Image" />
							</a>
							<div className="ltn__img-slide-info">
								<div className="ltn__img-slide-info-brief gp-top">
									<h6>Friendly neighborhood</h6>
									<h1><Link to="/portfolio-details">Queens </Link></h1>
								</div>
								<div className="btn-wrapper go-top">
									<Link to="/portfolio-details" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="ltn__img-slide-item-4">
							<a href={publicUrl + "assets/img/img-slide/22.jpg"} data-rel="lightcase:myCollection">
								<img src={img4} alt="Image" />
							</a>
							<div className="ltn__img-slide-info">
								<div className="ltn__img-slide-info-brief gp-top">
									<h6>The perfect city</h6>
									<h1><Link to="/portfolio-details">Greenville</Link></h1>
								</div>
								<div className="btn-wrapper go-top">
									<Link to="/portfolio-details" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default Gallery
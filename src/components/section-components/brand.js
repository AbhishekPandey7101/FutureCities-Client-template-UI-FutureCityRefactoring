import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import img from '../assests/pic19.jpeg';
import img1 from '../assests/pic17.jpeg';
import img2 from '../assests/pic19.jpeg';
import img3 from '../assests/pic20.jpeg';
import img4 from '../assests/pic17.jpeg';
import img5 from '../assests/pic17.jpeg';
class Brand extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return <div className="ltn__brand-logo-area ltn__brand-logo-1 bg-image bg-overlay-theme-black-90 pt-290 pb-110 plr--9" data-bs-bg="img/bg/7.jpg">
			<div className="container-fluid">
				<div className="row ltn__brand-logo-active">
					<div className="col-lg-12">
						<div className="ltn__brand-logo-item">
							<img src={img5} alt="Brand Logo" />
						</div>
					</div>
					<div className="col-lg-12">
						<div className="ltn__brand-logo-item">
							<img src={img1} alt="Brand Logo" />
						</div>
					</div>
					<div className="col-lg-12">
						<div className="ltn__brand-logo-item">
							<img src={img2} alt="Brand Logo" />
						</div>
					</div>
					<div className="col-lg-12">
						<div className="ltn__brand-logo-item">
							<img src={img3} alt="Brand Logo" />
						</div>
					</div>
					<div className="col-lg-12">
						<div className="ltn__brand-logo-item">
							<img src={img4} alt="Brand Logo" />
						</div>
					</div>
					<div className="col-lg-12">
						<div className="ltn__brand-logo-item">
							<img src={img} alt="Brand Logo" />
						</div>
					</div>
				</div>
			</div>
		</div>

	}
}

export default Brand
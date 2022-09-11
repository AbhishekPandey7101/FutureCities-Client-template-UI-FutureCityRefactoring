import React, { Component } from "react";
import { Link } from "react-router-dom";

let publicUrl = process.env.PUBLIC_URL + "/";

class CategoryV3 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="ltn__banner-area pt-120 go-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  Property
                </h6>
                <h1 className="section-title">Property By Categories</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div
                className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
                data-bs-bg={publicUrl + "assets/img/housing-complexes/BNG.jpeg"}
              >
                <div className="ltn__banner-info">
                  <h3>
                    <Link to={{pathname:"/shop", state:{ housingType: "bng", title: "Breaking New Grounds"}, }}> BNG</Link>
                  </h3>
                  <p>
                    {" "}
                    <b>Breaking New Grounds</b>
                  </p>
                  <p>Income Range</p>
                  <mark>0 - R3,500</mark>
                </div>
              </div>
            </div>
			<div className="col-lg-6 col-md-6">
              <div
                className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
                data-bs-bg={
                  publicUrl + "assets/img/housing-complexes/Social-Housing.jpeg"
                }
              >
                <div className="ltn__banner-info">
                  <h3>
                    <Link to={{pathname:"/shop",  state:{housingType: "social-housing", title: "Social Housing"}, }}> Social Housing</Link>
                  </h3>
                  <p>
                    {" "}
                    <b>Subsidised Houses avaialble for income ranges</b>
                  </p>
                  <p>Income Range</p>
                  <mark>R1,850 - R22,000</mark>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
                data-bs-bg={
                  publicUrl + "assets/img/housing-complexes/FLISP.jpeg"
                }
              >
                <div className="ltn__banner-info">
                  <h3>
                    <Link to={{pathname:"/shop", state:{ housingType: "flisp", title: "Finance Linked Individual Subsidy Programme"}, }}> FLISP</Link>
                  </h3>
                  <p>
                    {" "}
                    <b>Finance Linked Individual Subsidy Programme</b>
                  </p>
                  <p>Income Range</p>
                  <mark>R3,500 - R22,500</mark>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
                data-bs-bg={
                  publicUrl + "assets/img/housing-complexes/BondedHousing.jpeg"
                }
              >
                <div className="ltn__banner-info">
                  <h3>
                    <Link to={{pathname:"/shop", state:{ housingType: "bonded-housing", title: "Bonded Housing"}, }}> Bonded Hosuing</Link>
                  </h3>
                  <p>
                    <b> Great Deals Available</b>
                  </p>
                  <p>Income Range</p>
                  <mark>R10,000 - R30,000</mark>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image"
                data-bs-bg={
                  publicUrl + "assets/img/housing-complexes/RENTAL.jpeg"
                }
              >
                <div className="ltn__banner-info">
                  <h3>
                    <Link to={{pathname:"/shop", state: { housingType: "rentals", title: "Rentals"}, }}> Rentals</Link>
                  </h3>
                  <p>
                    {" "}
                    <b>Rental Properties</b>
                  </p>
                  <p>Income Range</p>
                  <mark> R22,500 - R45,000</mark>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryV3;

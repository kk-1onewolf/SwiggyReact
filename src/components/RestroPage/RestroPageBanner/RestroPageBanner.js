import React, { Component } from "react";
import "./RestroPageBanner.css";
import image from "./constants/restropagebanner.image.js"
function RestroPageBanner () {
    return (
      <div class="restro-page-banner">
        <div className="banner-left">
          <img
            className="restro-pic-banner"
            src={image}
          />
        </div>
        <div className="banner-center">
          <div className="banner-center-title">
            <h1>The Punjab Junction</h1>
          </div>
        
      </div>
      </div>
    );

}

export default RestroPageBanner;

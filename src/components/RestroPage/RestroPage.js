import React, { Component } from "react";

import RestroPageBanner from "./RestroPageBanner";
import RestroDetails from "./RestroDetails/RestroDetails";

 class RestroPage extends Component {
  render() {
    return (
      <div className="container">
        <RestroPageBanner />
        <RestroDetails/>
      </div>
    );
  }
}

export default RestroPage;

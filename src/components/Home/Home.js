import Header from "../Header";
import RestroPage from "../RestroPage";
import { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <RestroPage />
      </div>
    );
  }
}

export default Home;
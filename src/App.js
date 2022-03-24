
import "./App.css";
import Header from "./components/Header";
import RestroPage from "./components/RestroPage";

import { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RestroPage />
      </div>
    );
  }
}

export default App;

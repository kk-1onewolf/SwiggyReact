
import "./App.css";
import Header from "./components/Header/Header";
import "./MainContent/MainContent.js";
import { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;

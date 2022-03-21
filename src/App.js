
import "./App.css";
import Header from "./components/Header/Header";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      restroClickedFlag: false,
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;

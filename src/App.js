

import Header from "./components/Header";
import RestroPage from "./components/RestroPage";
import ThankYou from "./components/ThankYou"
import {BrowserRouter as Router,Routes,Route, Redirect} from "react-router-dom";
import { Component } from "react";
import Search from "./components/Search"
import Offers from "./components/Offers"
import SignIn from "./components/SignIn"
 import Cart from "./components/RestroPage/RestroDetails/Cart"

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<div className="App">
        <Header />
        <RestroPage />
        </div>} />
        <Route path="/home" element={<div className="App"> <RestroPage /> </div>} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Offers" element={<Offers />} />
       
      </Routes>

    </div>
  )
}
export default App;

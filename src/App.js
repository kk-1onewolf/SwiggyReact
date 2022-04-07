

import RestroPage from "./components/RestroPage";
import ThankYou from "./components/ThankYou"
import {Routes,Route} from "react-router-dom";
import Search from "./components/Search"
import Offers from "./components/Offers"
import SignIn from "./components/SignIn"
import Cart from "./components/RestroPage/RestroDetails/Cart"
import Home from "./components/Home"
function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<RestroPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Offers" element={<Offers />} />
      </Routes>

    </div>
  )
}
export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home.jsx";
import Battlefield from "./components/Battlefield/Battlefield.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Workshop from "./components/Workshop/Workshop.jsx";
import Dictionary from "./components/Dictionary/Dictionary.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<Login />}/> 
        <Route path="/home" element={<Home />}/>

        <Route path="/battlefield" element={<Battlefield />}/>
        <Route path="/inventory" element={<Inventory />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/workshop" element={<Workshop />}/>
        <Route path="/dictionary" element={<Dictionary />}/>
      </Routes>
    </Router>
  );
}

export default App;

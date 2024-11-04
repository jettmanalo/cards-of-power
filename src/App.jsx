import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Battlefield from "./components/Battlefield/Battlefield";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<LandingPage />}/> */}
        {/* <Route path="/login" element={<Login />}/>  */}
        {/* <Route path="/home" element={<Home />}/> */}

        {/* <Route path="/battlefield" element={<Battlefield />}/> */}
        {/* <Route path="/inventory" element={<Inventory />}/> */}
        {/* <Route path="/shop" element={<Shop />}/> */}
        {/* <Route path="/workshop" element={<Workshop />}/> */}
        {/* <Route path="/dictionary" element={<Dictionary />}/> */}

        {/* DELETE: */}
        <Route path="/" element={<Battlefield />}/>
      </Routes>
    </Router>
  );
}

export default App;

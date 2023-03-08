import "./App.css";
import { Routes, Route } from "react-router-dom";
 
// import Navbar from "./components/Navbar"; 
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import Beer from "./pages/Beer";
 
 
function App() {
  return (
    <div className="App"> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} /> 
        <Route path="/beers/:beerId" element={<Beer />} /> 
        <Route path="/random-beer" element={<RandomBeer />} /> 
        <Route path="/new-beer" element={<NewBeer />} /> 
        {/* <Route path="/apartments/new" element={<AddApartmentPage />} /> */}
      </Routes>
    </div>
  );
}
 
export default App;

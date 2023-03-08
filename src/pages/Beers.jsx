 import Navbar from "../components/NavBar";
 import { useState, useEffect } from "react";     
 import { Link } from "react-router-dom";
 import axios from "axios";   
 
function Beers() {

  const [beers, setBeers] = useState([]);
 
  useEffect(() => {                                // <== ADD THE EFFECT
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log('response.data', response.data);
        setBeers(response.data)
      });
    
  }, [] );

  return (
    <div className="beers"> 
    <Navbar/> 
   {beers.map((beer) => (
        <div key={beer._id} className="beer-card">
          <img src={beer.image_url} alt="beer" style={{maxWidth:"100px"}} />
          <Link to={`/beers/${beer._id}`}><h3>{beer.name}</h3></Link>
          <p>{beer.tagline}</p> 
          <p> <b>Created by: </b> {beer.contributed_by}</p>
          <hr/>
        </div>
      ))}
    </div>
  );
}
 
export default Beers;

 
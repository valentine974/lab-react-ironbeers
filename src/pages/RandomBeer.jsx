import Navbar from "../components/NavBar";
import { useState, useEffect } from "react";    
import axios from "axios";   

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([]); 
 
  useEffect(() => {                                
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        console.log('response.data', response.data);
        setRandomBeer(response.data)
      });
    
  }, [] );
 
  return (
    <div className="random-beer"> 
    <Navbar/>  
        <div key={randomBeer._id} className="beer-card">
          <img src={randomBeer.image_url} alt="beer" style={{maxWidth:"100px"}} />
         <h3>{randomBeer.name}</h3> 
         <p>{randomBeer.tagline}</p> 
         <p>{randomBeer.first_brewed}</p> 
         <p>{randomBeer.attenuation_level}</p> 
         <p>{randomBeer.description}</p> 
         <p> <b>Created by: </b> {randomBeer.contributed_by}</p>
        </div> 
    </div>
  );
  }
   
  export default RandomBeer;
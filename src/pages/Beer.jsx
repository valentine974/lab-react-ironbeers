import Navbar from "../components/NavBar";
import { useState, useEffect } from "react";   
import { useParams } from "react-router-dom";
import axios from "axios";   

function Beer() {

 const [beer, setBeer] = useState([]);
 const { beerId } = useParams();
 console.log('projectId -->', beerId);

 useEffect(() => {                                
   axios
     .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
     .then((response) => {
       console.log('response.data', response.data);
       setBeer(response.data)
     });
   
 }, [beerId] );

 return (
   <div className="beer"> 
   <Navbar/>  
       <div key={beer._id} className="beer-card">
         <img src={beer.image_url} alt="beer" style={{maxWidth:"100px"}} />
         <h3>{beer.name}</h3> 
         <p>{beer.tagline}</p> 
         <p>{beer.first_brewed}</p> 
         <p>{beer.attenuation_level}</p> 
         <p>{beer.description}</p> 
         <p> <b>Created by: </b> {beer.contributed_by}</p>
       </div> 
   </div>
 );
}

export default Beer;

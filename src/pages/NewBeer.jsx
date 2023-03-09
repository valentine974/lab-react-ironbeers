import Navbar from "../components/NavBar";
import { useState } from "react";   
import axios from "axios";
 
function NewBeer() {
  const [name, setName] = useState("");   
  const [tagline, setTagline] = useState("");   
  const [description, setDescription] = useState("");  
  const [firstBrewed, setFirstBrewed] = useState("");  
  const [brewersTips, setBrewersTips] = useState("");  
  const [attenuationLevel, setAttenuationLevel] = useState("");  
  const [contributedBy, setContributedBy] = useState("");  

  function handleSubmit (e){
    e.preventDefault()
    const newBeer = {name, tagline, description,firstBrewed,brewersTips,attenuationLevel,contributedBy}
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new',newBeer)
    .then(()=>{
      setName("")
      setTagline("")
      setDescription("")
      setFirstBrewed("")
      setBrewersTips("")
      setAttenuationLevel("")
      setContributedBy("")

    })
  }


    return (
      <div className="new-beer"> 
      <Navbar/>
      <h1>New beer</h1>
      <form action="" onSubmit={handleSubmit} >
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
 
        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          onChange={(e) => setFirstBrewed(e.target.value)}
          value={firstBrewed}
        />

        <label>Brewers tips</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={(e) => setBrewersTips(e.target.value)}
          value={brewersTips}
        />
        <label>Attenuation level</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={(e) => setAttenuationLevel(e.target.value)}
          value={attenuationLevel}
        />
        <label>Contributed by</label>
        <input
          type="text"
          name="contributed_by"
          onChange={(e) => setContributedBy(e.target.value)}
          value={contributedBy}
        />
        
        <button type="submit">Add a new beer</button>
        
      </form>
      </div>
    );
  }
   
  export default NewBeer;
  
 
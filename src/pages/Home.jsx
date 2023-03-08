 import { Link } from "react-router-dom";
 
function Home() {
  return (
    <div className="home">  

    <div>
        <img src={require("../assets/beers.png")} alt="beers" />
        <Link to="/beers">All Beers</Link>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione incidunt natus fugit pariatur ullam, excepturi labore porro non veritatis sunt ut quae hic ipsa, vero illum corporis! Nulla, reiciendis doloremque!</p>
    </div>
    <div>
        <img src={require("../assets/random-beer.png")} alt="random beer" />
        <Link to="/random-beer">Random Beer</Link>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione incidunt natus fugit pariatur ullam, excepturi labore porro non veritatis sunt ut quae hic ipsa, vero illum corporis! Nulla, reiciendis doloremque!</p>
    </div>
    <div>
        <img src={require("../assets/new-beer.png")} alt="new beer" />
        <Link to="/new-beer">New Beer</Link>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione incidunt natus fugit pariatur ullam, excepturi labore porro non veritatis sunt ut quae hic ipsa, vero illum corporis! Nulla, reiciendis doloremque!</p>
    </div>
       
    </div>
  );
}
 
export default Home;

import { NavLink } from "react-router-dom";
 
function Navbar() {
  return (
    <nav style={{backgroundColor:"#3CC3FC", height:"100px"}}>
      <NavLink to="/">
        <img src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png" alt ="Home" style={{maxWidth:"50px"}} />
      </NavLink>
       
    </nav>
  );
}
 
export default Navbar;
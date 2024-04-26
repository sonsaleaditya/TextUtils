import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Navbar(props) {

  const [Colour, setNavColour] = useState({navColour : 'light', textColour : 'light'});
  useEffect(()=>{
    if(props.mode){
    setNavColour({navColour:'light', textColour:'dark'});
  }else{
    setNavColour({navColour:'dark', textColour:'light'});
  }
  } ,[props.mode]);
 
      
  return (
    <nav className={`navbar navbar-expand-lg navabar bg-${Colour.navColour}`}>
      <div className="container-fluid">
        <h1 className={`text-${Colour.textColour}`} >{props.title}</h1>
        <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          
          <div className="offcanvas-body ">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
               <Link  to="/" className={`nav-link active text-${Colour.textColour}`} aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={`nav-link text-${Colour.textColour}`} >About Us</Link>
              </li>
            </ul>
          
            <div className={`form-check form-switch text-${Colour.textColour} py-2`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark</label>
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
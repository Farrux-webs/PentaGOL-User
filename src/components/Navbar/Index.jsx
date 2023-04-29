import { React } from 'react';
import {NavLink} from "react-router-dom"
import Logo from "../../assets/images/Logo-Navbar.svg"
import "./style.scss"
// import "../../UI/colors/style.scss"

const Index = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-box flex">
          <NavLink to="" width="136" height="53">
            <img src={Logo} alt="" />
          </NavLink>

          <button className="mode-btn">
            <i className="bi bi-sun "></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index
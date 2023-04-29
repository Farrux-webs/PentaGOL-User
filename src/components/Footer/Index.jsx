import { React } from 'react';
import {NavLink} from "react-router-dom"
import "./style.scss"


const Footer = () => {
  return (
    <div className="footer">
       <div className="container">
          <div className="footer-box flex">
            <div className="footer-log">
              <img src="../../../src/assets/images/Logo-Navbar.svg" alt="" />
            </div>
            <div className="footer-menu">
              <NavLink to="" className="footer-link">main</NavLink>
              <NavLink to="" className="footer-link">match center</NavLink>
              <NavLink to="" className="footer-link">football</NavLink>
              <NavLink to="" className="footer-link">tennis</NavLink>
              <NavLink to="" className="footer-link">cybersport</NavLink>
            </div>
            
            <div className="footer-menu">
              <NavLink to="" className="footer-link">main</NavLink>
              <NavLink to="" className="footer-link">match center</NavLink>
              <NavLink to="" className="footer-link">football</NavLink>
              <NavLink to="" className="footer-link">tennis</NavLink>
              <NavLink to="" className="footer-link">cybersport</NavLink>
            </div>
            <div className="footer-social-media">
              <div className="footer-third">
                     <img src="../../src/assets/icons/Twitter.svg" alt="" />
                     <img src="../../src/assets/icons/YouTube.svg" alt="" />
                     <img src="../../src/assets/icons/Vkontakte (VK).svg" alt="" />
              </div>
              <div className="footer-forth">
                     <img src="../../../src/assets/icons/Skype.svg" alt="" />
                     <img src="../../../src/assets/icons/Instagram.svg" alt="" />
                     <img src="../../../src/assets/icons/Facebook.svg" alt="" />
                     <img src="../../../src/assets/icons/Telegram.svg" alt="" />
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Footer;
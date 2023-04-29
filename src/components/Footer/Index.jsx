import "./style.scss"
import { React } from 'react';


const Footer = () => {
  return (
    <div className="footer">
       <div className="container">
          <div className="footer-box flex">
            <div className="footer-log">
              <img src="../../../src/assets/images/Logo-Navbar.svg" alt="" />
            </div>
            <div className="footer-menu">
              <a href="">main</a>
              <a href="">match center</a>
              <a href="">football</a>
              <a href="">tennis</a>
              <a href="">cybersport</a>
            </div>
            <div className="footer-menu">
              <a href="">main</a>
              <a href="">match center</a>
              <a href="">football</a>
              <a href="">tennis</a>
              <a href="">cybersport</a>
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
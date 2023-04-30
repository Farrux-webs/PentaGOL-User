import React from "react";
import "./style.scss"
import defaultImg from "../../assets/images/Cristiano.png"
import { NavLink } from 'react-router-dom';



const Index = () => {
  return (
    <>
      <div className="main-news-grid">
        <NavLink
          to="news/:id"
          className="grid-item"
          style={{
            backgroundImage: `url(${defaultImg})`,
          }}
        >
          <h2 className="grid-item-title">
            Faqatgina muvaffaqiyatli qura Rossiyani Jahon chempionatiga olib
            boradi: bo'g'inlar oldidagi barcha maketlar
          </h2>
          <span className="grid-item-time">2 soat oldin</span>
        </NavLink>
        <NavLink
          to="news/:id"
          className="grid-item"
          style={{
            backgroundImage: `url(${defaultImg})`,
          }}
        >
          <h2 className="grid-item-title">
            Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi
          </h2>
          <span className="grid-item-time">2 soat oldin</span>
        </NavLink>
        <NavLink
          to="news/:id"
          className="grid-item"
          style={{
            backgroundImage: `url(${defaultImg})`,
          }}
        >
          <h2 className="grid-item-title">
            Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi
          </h2>
          <span className="grid-item-time">2 soat oldin</span>
        </NavLink>
        <NavLink
          to="news/:id"
          className="grid-item"
          style={{
            backgroundImage: `url(${defaultImg})`,
          }}
        >
          <h2 className="grid-item-title">
            Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi
          </h2>
          <span className="grid-item-time">2 soat oldin</span>
        </NavLink>
        <NavLink
          to="news/:id"
          className="grid-item"
          style={{
            backgroundImage: `url(${defaultImg})`,
          }}
        >
          <h2 className="grid-item-title">
            Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi
          </h2>
          <span className="grid-item-time">2 soat oldin</span>
        </NavLink>
        <NavLink
          to="news/:id"
          className="grid-item"
          style={{
            backgroundImage: `url(${defaultImg})`,
          }}
        >
          <h2 className="grid-item-title">
            Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi
          </h2>
          <span className="grid-item-time">2 soat oldin</span>
        </NavLink>
        <NavLink
          to="news/:id"
          className="grid-item"
          style={{
            backgroundImage: `url(${defaultImg})`,
          }}
        >
          <h2 className="grid-item-title">
            Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi
          </h2>
          <span className="grid-item-time">2 soat oldin</span>
        </NavLink>
      </div>
    </>
  );
};

export default Index;

import React from 'react'
import "./style.scss"
import { NavLink } from 'react-router-dom';

const Index = (props) => {
  return (
            <NavLink to="news/:id" className="latest-news-card">
                <img src={props.img} alt=""  height="231" className="latest-news-card-img" />
                <div className="card-body">
                    <h3 className="latest-news-card-heading">
                        {props.heading}
                    </h3>
                    <p className="latest-news-card-desc">{props.desc}</p>
                    <span className="latest-news-card-date">{props.date}</span>
                </div>
            </NavLink>
  )
}

export default Index
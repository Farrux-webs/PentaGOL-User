import React from 'react'
import "./style.scss"

const Index = (props) => {
  return (
            <div className="latest-news-card">
                <img src={props.img} alt=""  height="231" className="latest-news-card-img" />
                <div className="card-body">
                    <h3 className="latest-news-card-heading">
                        {props.heading}
                    </h3>
                    <p className="latest-news-card-desc">{props.desc}</p>
                    <span className="latest-news-card-date">{props.date}</span>
                </div>
            </div>
  )
}

export default Index
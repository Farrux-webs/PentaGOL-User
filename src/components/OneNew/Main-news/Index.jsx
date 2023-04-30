import React from 'react'
import "./style.scss"

const Index = () => {
  return (
    <div className="main-news-card">
      <h2 className="main-news-card-heading">Asosiy</h2>
      <div className="main-news-inline">
        <p className="news-desc">
          Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi
        </p>
        <span className="news-posted-date">12.05.2021 12:54</span>
      </div>
    </div>
  );
}

export default Index
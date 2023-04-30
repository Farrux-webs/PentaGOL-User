import React from 'react'
import Top from "./OneNewTop/Index"
import MainLeft from "./OneNewsMain/Index"
import MainNewsRight from "./Main-news/Index"
import "./style.scss"

const Index = () => {
  return (
    <div className="one-new--page">
      <div className="container">
        <Top />
        <div className="full-news-main">
          <MainLeft/>
          <MainNewsRight/>
        </div>
      </div>
    </div>
  );
}

export default Index
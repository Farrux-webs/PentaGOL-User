import React from "react";
import "./style.scss"
import defaultImg from "../../assets/images/Cristiano.png"


const Index = () => {
  return (
    <>
          <div className="main-news-grid">
            <div
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
            </div>
          </div>
    </>
  );
};

export default Index;

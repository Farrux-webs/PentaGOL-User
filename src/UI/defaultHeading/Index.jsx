import React from "react";
import "./style.scss";

const Index = (props) => {
  return (
        <div className="news-heading-div">
          <h2 className="news-heading">{props.heading}</h2>
        </div>
  );
};

export default Index;

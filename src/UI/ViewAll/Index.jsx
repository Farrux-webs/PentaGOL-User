import React from "react";
import "./style.scss";

const Index = (props) => {
  return (
    <div className="view-all-heading-div">
      <h2 className="view-all-heading">{props.heading}</h2>
    </div>
  );
};

export default Index;

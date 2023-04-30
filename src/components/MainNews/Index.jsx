import React from "react";
import News from "./News";
import Table from "./Table/Table";
import "./style.scss";

const Index = () => {
  return (
    <div className="main-news">
      <div className="container">
        <div className="main-news-wrapper">
          <News />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Index;

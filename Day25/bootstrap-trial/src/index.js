import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Cards from "./components/cards";
import NavBar from "./components/navbar";
import MyCarousel from "./components/carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="big-container">
      <NavBar className="madeNav" />
      <MyCarousel className="madeCarousel" />
      <div className="cards">
        <Cards title="Shoe 1" imgPath="url(../../imgs/1.jpeg)" />
        <Cards title="Shoe 2" imgPath="url(../../imgs/2.jpg)" />
        <Cards title="Shoe 3" imgPath="url(../../imgs/3.jpg)" />
        <Cards title="Shoe 4" imgPath="url(../../imgs/4.png)" />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

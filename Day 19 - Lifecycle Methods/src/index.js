import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/button.jsx";
import "./style.css";

const App = () => {
  return (
    <div className="container">
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import MoviesApp from "./MoviesApp";
import "./style.css";

function App() {
  return (
    <div className="loading">
      <MoviesApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

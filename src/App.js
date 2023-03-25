import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather"; 


export default function App() {
  return (
    <div className="App">
      <div className="container">
      < Weather defaultCity="Pretoria"/>
      <footer>
      This Project was coded by {""} Tlhale Matjila
      and is {""} <a href="/" target="_blank" rel="noopener noreferrer"
      >
      open-sourced on Github
      </a>
      </footer>

    </div>
    </div>
  );
}
         

import { useState, useEffect } from "react";
import ResultCard from "./ResultCard";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes,Route } from "react-router-dom";
import Results from "./pages/Results";

function App(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/results" element={<Results />} />
    </Routes>
  )
}


export default App;
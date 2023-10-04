import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import "./index.css";
import Footer from "./Footer";

function App() {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/service" Component={Services} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
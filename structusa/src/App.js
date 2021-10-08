import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cover from "./components/cover/Cover";
import Carousel from "./components/carousel/Carousel";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar isScrolling={scrollHeight} />
        <Carousel />
        <Cover />
      </div>
    </BrowserRouter>
  );
}

export default App;

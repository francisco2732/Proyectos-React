import React, {useState, useEffect} from "react";
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Slider from "./components/slider/Slider";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";


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
      <div className="App">
        <Navbar isScrolling={scrollHeight} />
        <Switch>
        <Route path="/" exact component= {Home}/>
        <Route path="/about" exact component= {About}/>
        <Route path="/slider" exact component= {Slider}/>
        <Route path="/info" exact component= {Info}/>
        <Route path="/footer" exact component= {Footer}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

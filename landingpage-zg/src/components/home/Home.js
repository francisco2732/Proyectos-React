import React from 'react'
import Cover from "../../components/cover/Cover";
import About from '../../components/about/About';
import Slider from "../../components/slider/Slider";
import Info from "../../components/info/Info";
import Footer from "../../components/footer/Footer";


const Home = () => {
    return (
        <div>
        <Cover />
        <About />
        <Slider />
        <Info />
        <Footer />
        </div>
    )
}

export default Home

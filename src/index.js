import React from "react";
import ReactDOM from "react-dom";
import CarouselDiv from "./components/Carousel";
import '../public/images/bg1.jpg';
import '../public/images/bg2.jpg';
import '../public/images/bg3.jpg';
import '../public/images/bg4.jpg';
import '../public/images/bg5.jpg';
import '../public/images/bg6.jpg';
import '../public/data/carousel_data.json';
import './app.scss';
ReactDOM.render(<CarouselDiv />, document.getElementById("app"));
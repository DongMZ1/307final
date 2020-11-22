import React, { Component } from "react";
import "./static/home.css";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import car1 from "./pictures/carousel1.png";
import car2 from "./pictures/carousel2.png";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "react-bootstrap";
import bot  from './pictures/bot.jpg'; 
import covid from './pictures/covid.jpg'; 
import ml from './pictures/ml.jpg'; 


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const settings = {
      dot: true,
      infinite: true,
      speed: 500,
      slideToShow: 1,
      slideToScroll: 2,
      cssEase: "linear",
    };

    return (
      <div className="home">
        <Carousel>
          <Carousel.Item className="wrapper" interval={2000}>
            <img
              //   className="h-75 d-inline-block"
              src={bot}
              alt="Third slide"
            />
            <div className="overlay">
              <div className="desc">
                  Robotics at McGill! Click to learn more! More Description here.
              </div>
            </div>
            <Carousel.Caption className="caption">
              {/* <h3>First slide label</h3> */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              src={covid}
              alt="Third slide"
            />
            <Carousel.Caption className="caption">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              //   className="h-75 d-inline-block"
              src={ml}
              alt="Third slide"
            />
            <Carousel.Caption className="caption">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default HomePage;

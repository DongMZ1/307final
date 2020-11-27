import React, { Component } from "react";
import "./static/home.css";
//import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap.css";
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
              src={bot}
              alt="First Slide"
            />
            <div className="overlay">
              <div className="desc">
                  McGill Robotics is an engineering design team that builds robots for international competitions as well as organizes RoboHacks annually. 
                  The team’s goal is to foster an interest in robotics through competition and to cultivate a relationship with the surrounding Montreal community. 
                  <br></br>
                  <button type="button" class="btn btn-primary" href="https://mcgillrobotics.com/">Read More</button>
              </div>
            </div>
            <Carousel.Caption className="caption">
              <h3>McGill Robotics</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="wrapper" interval={2000}>
            <img
              src={covid}
              alt="Second Slide"
            />
            <div className="overlay">
              <div className="desc">
                The truth is that doctors and radiologists can have error rates as high as 30% in reading chest X-Rays. 
                In today’s world, an early and especially accurate COVID diagnosis is crucial. 
                A late or incorrect diagnosis could see an infectious patient sent home...
                <br></br>
                <button type="button" class="btn btn-primary" href="https://www.cs.ubc.ca/news/2020/10/how-ai-helping-battle-against-covid-19">Read More</button>
              </div>
            </div>
            <Carousel.Caption className="caption">
              <h3>How AI can see through COVID-19</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="wrapper" interval={2000}>
            <img
              src={ml}
              alt="Third Slide"
            />
            <div className="overlay">
              <div className="desc">
                McGill AI Society aims to make AI more accessible by hosting events, bootcamps, and workshops that 
                give students an opportunity to learn about AI in a peer-based, supportive environment.
                <br></br>
                <button type="button" class="btn btn-primary" href="https://www.mcgillai.com/">Read More</button>
              </div>
            </div>
            <Carousel.Caption className="caption">
              <h3>Machine Learning at McGill</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm" style={{padding: "8%"}}>
            <div class="button_base b07_3d_double_roll">
                <div>COVID-19 Information</div>
                <div>COVID-19 Information</div>
                <div>COVID-19 Information</div>
                <div>COVID-19 Information</div>
            </div>
            </div>
            <div class="col-sm" style={{padding: "8%"}}>
              <div class="button_base b07_3d_double_roll">
                <div>Teaching @ CS</div>
                <div>Teaching @ CS</div>
                <div>Teaching @ CS</div>
                <div>Teaching @ CS</div>
            </div>
            </div>
            <div class="col-sm" style={{padding: "8%"}}>
              <div class="button_base b07_3d_double_roll">
                  <div>Events @ CS</div>
                  <div>Events @ CS</div>
                  <div>Events @ CS</div>
                  <div>Events @ CS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default HomePage;

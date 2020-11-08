import React, { Component } from "react";
import "./CSS/carousel.css";
import { Carousel, Card } from "react-bootstrap";
import Carousel1 from "./pictures/carousel1.png";
import Carousel2 from "./pictures/carousel2.png";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="gallery">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Carousel1}
                    alt="First slide"
                  />
                  <Carousel.Caption style={{ color: "black" }}>
                    <h3>First slide label</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Carousel2}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Carousel1}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
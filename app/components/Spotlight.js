import React from "react";
import { Col, FormGroup, Radio, Checkbox, Button } from "react-bootstrap";
import CarouselSp from "./CarouselSp";
import ContentBottom from "../components/ContentBottom";

var Slider = require("react-slick");

export default class Spotlight extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Col sm={6} md={8}>
          <CarouselSp />
        </Col>
        <Col sm={6} md={4}>
          <h3 className="headingH13">POLL</h3>
          <span>
            <h4>How was the first hand experience with the portal?</h4>
          </span>
          <FormGroup>
            <ul>
              <li>
                {" "}
                <Radio inline>Super Cool</Radio>
              </li>
              <li>
                {" "}
                <Radio inline>cool</Radio>
              </li>
              <li>
                {" "}
                <Radio inline>Cool</Radio>
              </li>
              <li>
                <Radio inline>Not so cool</Radio>
              </li>
            </ul>
            <Button bsStyle="danger" type="submit">
              Submit
            </Button>
          </FormGroup>
        </Col>
        <ContentBottom />
      </div>
    );
  }
}

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./feature.css";
import feature from "../../../assets/feaimg.png";
import card from "../../../assets/card.png"
const Feature = () => {
  return (
    <>
      <section id="feature">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="feaimg">
                <img src={feature} alt="feature" />
              </div>
            </Col>
            <Col lg={{ span: 5, offset: 1 }}>
              <div className="feacontent">
                <h2>OUR FEATURE</h2>
                <h3>Receive payments quickly from anywhere</h3>
                <p>
                  Why kept very ever home mrs. Considered sympathize ten
                  uncommonly occasional assistance sufficient not. Letter of on
                  become he tended active enable to.{" "}
                </p>
              </div>
              <div className="btn">
                <a href="#">Get Started</a>
              </div>
            </Col>
          </Row>
          <Row className="back">
            <Col lg={{ span: 5, offset: 1 }}>
              <div className="feacon">
                <h3>Our Feature</h3>
                <h2>Receive payments quickly from anywhere</h2>
                <p>
                  Why kept very ever home mrs. Considered sympathize ten
                  uncommonly occasional assistance sufficient not. Letter of on
                  become he tended active enable to.{" "}
                </p>
              </div>
            </Col>
            <Col lg={{ span: 4, offset: 1 }}>
              <div className="form">
                <h4>Get Started for Free</h4>
                <input type="text" placeholder="Email Address" />
                <input type="password" placeholder="Password" /> <br />
                <button>Get Started</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="fea">
                <h4>Our Feature</h4>
                <h5>All payments are linked to your Financy account</h5>
                <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
              </div>
              <div className="btn1">
                <a href="">Get Started</a>
              </div>
            </Col>
            <Col lg={{span:6, offset:0}}>
                <div className="imgg">
                    <img src={card} alt="card" />
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Feature;

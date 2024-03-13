import React from "react";
import "./banner.css";
import { Container, Row, Col } from "react-bootstrap";
import ban from "../../../assets/banner.png";
import logos from "../../../assets/Logos.png"
const Banner = () => {
  return (
    <>
      <section id="banner">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="bancontent">
                <h1>Managing business payments has never been easier</h1>
                <p>
                  End-to-end payments and financial management in a single
                  solution. Meet the right platform to help realize.
                </p>
              </div>
              <div className="btn">
                <a href="#" className="get">
                  Get Started
                </a>
                <a href="#" className="see">
                  <i class="fa-solid fa-circle-play"></i>See How It Works
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="banimg">
                <img src={ban} alt="ban" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="last">
                <h2>Over 32k+ software businesses growing with AR Shakir</h2>
                <img src={logos} alt="logo" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Banner;

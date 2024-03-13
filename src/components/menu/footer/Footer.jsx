import React from "react";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="border1">
          <Container>
            <div className="box">
              <Row>
                <Col lg={5}>
                  <div className="foot">
                    <h3>BWFC</h3>
                    <p>
                      Yet bed any for travelling assistance indulgence
                      unpleasing. Not thoughts all exercise blessing. Indulgence
                      way everything joy alteration boisterous the attachment.
                    </p>
                  </div>
                </Col>
                <Col lg={{ span: 2, offset: 0 }}>
                  <div className="list">
                    <a href="#" className="com">
                      Company
                    </a>
                    <ul>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Pricing</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={2}>
                  <div className="list">
                    <a href="#" className="com">
                      Product
                    </a>
                    <ul>
                      <li>
                        <a href="#">Invoicing Platform</a>
                      </li>
                      <li>
                        <a href="#">Accounting Plateform</a>
                      </li>
                      <li>
                        <a href="#">Create Proposal</a>
                      </li>
                      <li>
                        <a href="#">Contracts</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="list">
                    <a href="#" className="com">
                      Resources
                    </a>
                    <ul>
                      <li>
                        <a href="#">Proposal Template</a>
                      </li>
                      <li>
                        <a href="#">Invoice Template</a>
                      </li>
                      <li>
                        <a href="#">Tuturoial</a>
                      </li>
                      <li>
                        <a href="#">How to write a contract</a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <Container>
          <Row>
            <Col lg={5}>
              <div className="last">
                <p>2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of Services</p>
              </div>
            </Col>
            <Col lg={{span:2, offset:5}}>
                <div className="last1">
                    <p>Supported by Microsoft Startup</p>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;

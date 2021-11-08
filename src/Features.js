import React from "react";
import neBg from "./assets/newBg.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";

function Features() {
  return (
    <div style={{ height: "100vh" }}>
      <Container style={{ border: "2px solid red", height: "100%" }}>
        <Row style={{ border: "2px solid yellow", height: "100%" }}>
          <Col
            xs="12"
            lg="6"
            style={{
              border: "2px solid green",
              backgroundImage: `url(${neBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
          ></Col>
          <Col
            xs="12"
            lg="6"
            style={{
              border: "2px solid green",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <h1>Create your account if not created</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "300px",
              }}
            ></div>
            <input placeholder="Name" style={{ width: "300px" }} />
            <input placeholder="Email" style={{ width: "300px" }} />
            <input placeholder="Password" style={{ width: "300px" }} />
            <Button style={{ marginTop: "30px" }}>Sign Up</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Features;

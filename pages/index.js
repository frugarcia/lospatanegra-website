// Dependencies
import React from "react";
import Head from "../components/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Home = () => {
  const goToSheet = () => {
    const link =
      "https://docs.google.com/spreadsheets/d/1Vwzv64vl-DVAlIrksuMC-bhjNUid9PImwMmZv1E6kZQ";
    window.open(link, "_blank");
  };

  return (
    <>
      <Head />
      <div className="content">
        <Navbar />
        <Container>
          <Row>
            <Col
              xs={12}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Card
                style={{
                  width: "18rem",
                  maxWidth: "100%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "2rem",
                  marginBottom: "2rem",
                }}
              >
                <Card.Img variant="top" src="/cartel_torneo.jpg" />
                <Card.Body>
                  <Card.Title>4º Open Pata Negra</Card.Title>
                  <Card.Text>
                    Durante los próximos días 2,3 y 4 de octubre se celebra el
                    4º Open Pata Negra, puede consultar los cuadros en el botón
                    más abajo
                  </Card.Text>
                  <Button variant="primary" onClick={goToSheet}>
                    Consultar cuadros
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Home;

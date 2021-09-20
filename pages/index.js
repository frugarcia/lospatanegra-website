// Dependencies
import React from "react";
import Head from "../components/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import data from "../constants/data";
import {absoluteUrl} from "../lib/utils";

const Home = ({location}) => {
  return (
    <>
      <Head />
      <div className="content">
        <Navbar />
        <Container>
          <Row>
            {data.map((item, index) => {
              return (
                <Col
                  key={index}
                  lg={4}
                  md={6}
                  xs={12}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "2rem auto",
                  }}
                >
                  <Card
                    style={{
                      height: "100%",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={item.image}
                      alt={item.imageAlt}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.text}</Card.Text>
                      {item.actions.map((action, index) => {
                        return (
                          <Button
                            key={index}
                            style={{
                              marginBottom: "0.5rem",
                              width: "100%",
                            }}
                            {...action}
                            variant={action.color}
                            onClick={() => action.onClick({location})}
                          >
                            {action.label}
                          </Button>
                        );
                      })}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

Home.getInitialProps = ({req}) => {
  if (process.env.NODE_ENV === "development") {
    const {protocol, host} = absoluteUrl(req);
    return {location: `${protocol}//${host}`};
  } else {
    return {location: `https://lospatanegra.com`};
  }
};

export default Home;

import { Container, Row, Col, ListGroup } from "react-bootstrap";

const MovieDetails = () => {
  return (
    <Container className="text-white">
      <Row>
        <Col>
          <h1>Nome film</h1>
          <img
            src={
              "https://plus.unsplash.com/premium_photo-1675721844800-b305b0f888ff?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={"ciao"}
            style={{ width: "250px" }}
          />
          <h3>anno</h3>
          <h3>genere</h3>
        </Col>
      </Row>
      <Row>
        <h2>Commenti</h2>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  );
};

export default MovieDetails;

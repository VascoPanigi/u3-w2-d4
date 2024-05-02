import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col, ListGroup } from "react-bootstrap";

const MovieDetails = () => {
  const params = useParams();
  const dynamicID = params.dynamicId;
  console.log(params.dynamicId);

  const [movieData, setMovieData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchMovieData = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=f56391e1&i=${dynamicID}`);
      if (response.ok) {
        const data = await response.json();
        setMovieData(data);
        console.log(movieData);
      } else {
        throw new Error("Error fetching data, sad stuff");
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const fetchComments = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmOWM0YjI4MzJlODAwMTk4NzMwYWYiLCJpYXQiOjE3MTQzOTYyMzUsImV4cCI6MTcxNTYwNTgzNX0.c1_gssU17LfySu377xtrqmuUnlpDSubn-cE1Hfq-jBQ";
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${dynamicID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setCommentData(data); // Set comment data, not movie data
        console.log(commentData);
      } else {
        throw new Error("Error fetching data, sad stuff");
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchMovieData();
    fetchComments();
  }, []);

  if (!movieData) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="text-white">
      <Row>
        <Col>
          <h1>{movieData.Title}</h1>
          <img src={movieData.Poster} alt={`${movieData.Title} poster`} style={{ width: "250px" }} />
          <h3>{movieData.Year}</h3>
          <h3>genere</h3>
        </Col>
      </Row>
      <Row>
        <h2>Commenti</h2>
        <ListGroup>
          <ListGroup.Item>ciao sono un list item</ListGroup.Item>
          {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
        </ListGroup>
      </Row>
    </Container>
  );
};

export default MovieDetails;

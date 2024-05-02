import React from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleMovieCard = (props) => {
  const { movie } = props;
  const { Poster, Title, imdbID } = movie;
  const navigate = useNavigate();

  const handleClickOnCard = () => {
    console.log("IMDb ID:", imdbID);
    navigate(`/MovieDetails/${imdbID}`);
  };

  return (
    <Col className="mb-2 text-center px-1">
      <img onClick={handleClickOnCard} className="img-fluid movie-poster" src={Poster} alt={Title} imdbID />
    </Col>
  );
};

export default SingleMovieCard;

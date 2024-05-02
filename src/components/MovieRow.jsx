import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Alert, Spinner } from "react-bootstrap";

import SingleMovieCard from "./SingleMovieCard";
import Slider from "react-slick";

const MovieRow = ({ name }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);

      try {
        console.log("fetching your data...");
        const response = await fetch(`http://www.omdbapi.com/?apikey=f56391e1&s=${name}`);

        if (!response.ok) {
          throw new Error("Error during fetching");
        }

        console.log("fetch successful");
        const moviesFetched = await response.json();
        console.log(moviesFetched);
        setMovies(moviesFetched.Search || []);
      } catch (err) {
        console.log(err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [name]);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
  };

  return (
    <>
      {isLoading && <Spinner animation="grow" variant="danger" />}

      {isError && (
        <Alert variant="danger">
          Error during fetch, try again and if the error persists please contact the support.
        </Alert>
      )}
      {!isError && (
        <Slider {...settings} className="ms-2 me-2">
          {movies.slice(0, 7).map((movie) => (
            <SingleMovieCard key={movie.imdbID} movie={movie} />
          ))}
        </Slider>
      )}
    </>
  );
};

export default MovieRow;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../movieState';
// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  // UseEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial='hidden'
          animate='show'
          exit='exit'
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt='movie' />
          </HeadLine>
          <Points>
            {movie.points.map((point) => (
              <Point
                title={point.title}
                description={point.description}
                key={point.title}
              />
            ))}
          </Points>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt='img' />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Points = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const PointStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%auto;
    background: #396e5b;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    position: relative;
    left: 40vw;
    width: 22%;
    height: 30vh;
    object-fit: cover;
  }
`;

// Points Component
const Point = ({ title, description }) => {
  return (
    <PointStyle>
      <h3>{title}</h3>
      <div className='line'></div>
      <p>{description}</p>
    </PointStyle>
  );
};

export default MovieDetail;

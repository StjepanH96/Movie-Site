import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useMovieActions } from '../redux/reducers/movies/movieStateManagement';
import { RootState } from '@/redux/store'; 
import styled from 'styled-components';
import {MovieCard} from '../components/MovieCard';
import router from 'next/router';

const MostWatchedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
`;

const MostWatched = () => {
  const { initializeMovies } = useMovieActions();
  const movies = useSelector((state: RootState) => state.movies.movies);

  useEffect(() => {
    console.log('Fetching all movies...');
    initializeMovies();
  }, [initializeMovies]);

  const handleMovieClick = (movieId: number) => {
    router.push(`/movie/${movieId}`);
  };

  return (
    <MostWatchedContainer>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} onMovieClick={handleMovieClick} />
      ))}
    </MostWatchedContainer>
  );
};

export default MostWatched;
import React, { useEffect } from 'react';
import { useMovieActions } from '../../redux/reducers/movies/movieStateManagement';
import router from 'next/router';
import { LoadingSpinner, ErrorModal, MovieCard } from '@/components';
import {
  MovieListContainer,
  MovieGrid,
  LoaderContainer
} from '@/styled-components/movie';
import { useMovieData } from '@/lib';

const MostWatched = () => {
  const { initializeMovies } = useMovieActions();
  const { movies, loading, error } = useMovieData();

  useEffect(() => {
    initializeMovies();
  }, []);

  const handleMovieClick = (movieId: number) => {
    router.push(`/movie/${movieId}`);
  };

  return (
    <>
      {error && <ErrorModal message={error} />}
      {loading ? (
        <LoaderContainer>
          {' '}
          <LoadingSpinner />
        </LoaderContainer>
      ) : (
        <MovieListContainer>
          <MovieGrid>
            {movies.map((movie, index) => (
              <MovieCard
                key={index}
                movie={movie}
                onMovieClick={handleMovieClick}
              />
            ))}
          </MovieGrid>
        </MovieListContainer>
      )}
    </>
  );
};

export default MostWatched;

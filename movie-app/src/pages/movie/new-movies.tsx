import React, { useEffect } from 'react';
import { useMovieActions } from '../../redux/reducers/movies/movieStateManagement';
import { MovieCard } from '../../components/MovieCard';
import router from 'next/router';
import { LoadingSpinner } from '@/components/Spinner';
import { ErrorModal } from '@/components/ErrorModal';
import { LoaderContainer } from '@/styled-components/movie/MovieDetailsStyles';
import {
  MovieListContainer,
  MovieGrid,
} from '@/styled-components/movie/MovieListStyles';
import { useMovieData } from '@/lib/useMovieData';

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

import React, { useMemo } from 'react';
import router from 'next/router';
import { useFavorites } from '@/context/FavoritesContext';
import { ErrorModal, LoadingSpinner, MovieCard } from '@/components';
import {
  MovieListContainer,
  MovieGrid,
  NoFavoritesMessage,
} from '@/styled-components/movie';

const FavoriteMovies = () => {
  const { getFavoriteMovies, isLoading, error } = useFavorites();
  const favoriteMovies = useMemo(getFavoriteMovies, [getFavoriteMovies]);

  const handleMovieClick = (movieId: number) => {
    router.push(`/movie/${movieId}`);
  };

  return (
    <>
      {error && <ErrorModal message={error} />}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <MovieListContainer>
          {favoriteMovies.length > 0 ? (
            <MovieGrid>
              {favoriteMovies.map((movie, index) => (
                <MovieCard
                  key={index}
                  movie={movie}
                  onMovieClick={() => handleMovieClick(movie.id)}
                />
              ))}
            </MovieGrid>
          ) : (
            <NoFavoritesMessage>No favorites added</NoFavoritesMessage>
          )}
        </MovieListContainer>
      )}
    </>
  );
};

export default FavoriteMovies;

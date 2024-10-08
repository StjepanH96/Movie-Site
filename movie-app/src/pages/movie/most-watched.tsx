import React, { useEffect, useRef } from 'react';
import { useMovieActions } from '../../redux/reducers/movies/movieStateManagement';
import { LoadingSpinner,  MovieCard, FilterComponent } from '../../components';
import { useMovieFilter } from '@/lib/useMovieFilter';
import router from 'next/router';
import {
  MovieListContainer,
  MovieGrid,
  LoaderContainer
} from '@/styled-components/movie';
import { useMovieData } from '@/lib';

const MostWatched = () => {
  const { moviesFiltered, hasMore } = useMovieData();
  const { initializeAppendFilteredMovies} =
    useMovieActions();
  const loader = useRef<HTMLDivElement | null>(null);
  const { selectedGenreId, selectedYear, selectedScore } = useMovieFilter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          initializeAppendFilteredMovies(
            selectedGenreId,
            selectedScore,
            selectedYear
          );
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [
    loader,
    hasMore,
    selectedGenreId,
    selectedYear,
    selectedScore,
    initializeAppendFilteredMovies,
  ]);

  const handleMovieClick = (movieId: number) => {
    router.push(`/movie/${movieId}`);
  };

  return (
    <MovieListContainer>
      <FilterComponent />
      <MovieGrid>
        {moviesFiltered.results.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
            onMovieClick={() => handleMovieClick(movie.id)}
          />
        ))}
      </MovieGrid>
      {hasMore && (
        <LoaderContainer ref={loader}>
          <LoadingSpinner />
        </LoaderContainer>
      )}
    </MovieListContainer>
  );
};

export default MostWatched;

import React, { useEffect } from 'react';
import router from 'next/router';
import { useMovieActions } from '../redux/reducers/movies/movieStateManagement';
import { LoadingSpinner, MovieCard, ErrorModal } from '@/components';
import {
  MovieItem,
  MovieItemTop,
  MovieList,
  SectionTitle,
  Container,
} from '@/styled-components/GlobalStyle';
import { useMovieData } from '@/lib';

const Home = () => {
  const { initializeMovies, initializeSortMovieByGenre } = useMovieActions();

  const { movies, popularMoviesByGenre, loading, error } = useMovieData();

  useEffect(() => {
    initializeMovies();
    initializeSortMovieByGenre();
  }, [initializeMovies, initializeSortMovieByGenre]);

  const handleMovieClick = (movieId: number) => {
    router.push(`/movie/${movieId}`);
  };

  const topMovies = [...movies]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 3);
  return (
    <>
      <Container>
        {error && <ErrorModal message={error} />}
        <div>
          <div>
            <section>
              <SectionTitle>Top 3 Movies of the Week</SectionTitle>
              <MovieList>
              {topMovies.map((movie, index) => (
                <MovieItemTop key={index} >
                  <MovieCard key={index} movie={movie} onMovieClick={handleMovieClick} />
                </MovieItemTop>
              ))}
        
              </MovieList>
            </section>
          </div>
          <div>
            <section>
              <SectionTitle>Newest Movies</SectionTitle>
              <MovieList>
                {loading ? (
                  <LoadingSpinner />
                ) : (
                  movies.map((movie, index) => (
                    <MovieItem key={index}>
                      <MovieCard
                        movie={movie}
                        onMovieClick={handleMovieClick}
                      />
                    </MovieItem>
                  ))
                )}
              </MovieList>
            </section>
            <section>
              <SectionTitle>Popular Movies by Genre</SectionTitle>
              {loading ? (
                <LoadingSpinner />
              ) : (
                Object.entries(popularMoviesByGenre).map(([genre, movies]) => (
                  <div key={genre} className="genre-section">
                    <h3>{genre}</h3>
                    <MovieList>
                      {movies.map((movie, index) => (
                        <MovieItem key={index}>
                          <MovieCard
                            movie={movie}
                            onMovieClick={handleMovieClick}
                          />
                        </MovieItem>
                      ))}
                    </MovieList>
                  </div>
                ))
              )}
            </section>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;

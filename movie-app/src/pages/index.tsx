import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useMovieActions } from '../redux/reducers/movies/movieStateManagement'; // Ensure path matches
import { RootState } from '@/redux/store'; 
import { FavoriteStar } from '@/components/FavoriteStart';
import { MovieCard } from '@/components/MovieCard';
import router from 'next/router';

const Home = () => {
  const { initializeMovies, initializeSortMovieByGenre } = useMovieActions();
  const movies = useSelector((state: RootState) => state.movies.movies);
  const popularMoviesByGenre = useSelector((state: RootState) => state.movies.popularMoviesByGenre);

  useEffect(() => {
    console.log('Fetching all movies...');
    initializeMovies();
  }, [initializeMovies]);
  
  useEffect(() => {
    console.log('Sorting movies by genre...');
    console.log("sorted movies", popularMoviesByGenre);
    initializeSortMovieByGenre();
  }, [initializeSortMovieByGenre]);
  const topMovies = [...movies].sort((a, b) => b.popularity - a.popularity).slice(0, 3);


  const handleMovieClick = (movieId: number) => {
    router.push(`/movie/${movieId}`);
  };

  return (
    <div className="container">
      <div className="content">
        <div className="sidebar">
          <section>
            <h2 className="section-title">Top 3 Movies of the Week</h2>
            <div className="movie-list">
              {topMovies.map((movie, index) => (
                <div key={index} className="movie-item-top">
                  <MovieCard key={index} movie={movie} onMovieClick={handleMovieClick} />
                </div>
              ))}
            </div>
          </section>
        </div>
        <div>
          <section>
            <h2 className="section-title">Newest Movies</h2>
            <div className="movie-list">
              {movies.map((movie, index) => (
                <div key={index} className="movie-item">
                  <MovieCard key={index} movie={movie} onMovieClick={handleMovieClick} />
                </div>
              ))}
              
            </div>
          </section>
          <section>
            <h2 className="section-title">Popular Movies by Genre</h2>
            {Object.entries(popularMoviesByGenre).map(([genre, movies]) => (
              <div key={genre} className="genre-section">
                <h3>{genre}</h3>
                <div className="movie-list">
                  {movies.map((movie, index) => (
                    <div key={index} className="movie-item">
                                       <MovieCard key={index} movie={movie} onMovieClick={handleMovieClick} />

                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
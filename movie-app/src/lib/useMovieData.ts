import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

export const useMovieData = () => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const moviesFiltered = useSelector(
    (state: RootState) => state.movies.filteredMovies
  );
  const movieDetails = useSelector(
    (state: RootState) => state.movies.movieDetails
  );
  const genres = useSelector((state: RootState) => state.movies.genres);
  const popularMoviesByGenre = useSelector(
    (state: RootState) => state.movies.popularMoviesByGenre
  );
  const hasMore = useSelector((state: RootState) => state.movies);
  const loading = useSelector((state: RootState) => state.movies.loading);
  const error = useSelector((state: RootState) => state.movies.error);

  return {
    movies,
    movieDetails,
    moviesFiltered,
    hasMore,
    genres,
    popularMoviesByGenre,
    loading,
    error,
  };
};

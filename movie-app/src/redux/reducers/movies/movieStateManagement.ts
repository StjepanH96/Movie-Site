import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../lib/hooks';
import { fetchAndInitializeMoviesAndGenres, fetchAllMovies } from './movieSlice';
import { RootState } from '@/redux/store';
import { useCallback, useEffect, useState } from 'react';
import { Movie } from '../../../types/movie';
import { fetchMovieDetails } from '@/lib/api';
export const useMovieActions = () => {
    const dispatch = useAppDispatch();
  
    const initializeMovies = useCallback(() => {
      dispatch(fetchAllMovies());
    }, [dispatch]);
  
    const initializeSortMovieByGenre = useCallback(() => {
      dispatch(fetchAndInitializeMoviesAndGenres());
    }, [dispatch]);
  
    return { initializeMovies, initializeSortMovieByGenre };
  };

export const useMovieData = () => {
    const movies = useSelector((state: RootState) => state.movies.movies);
    const genres = useSelector((state: RootState) => state.movies.genres);
    const popularMoviesByGenre = useSelector((state: RootState) => state.movies.popularMoviesByGenre);
    console.log( "Po žanru",popularMoviesByGenre);
    return { movies, genres, popularMoviesByGenre };
  };



export const useMovieDetails = (movieId: number) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setLoading(true);
        const data: Movie = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

  return { movie, loading, error };
};
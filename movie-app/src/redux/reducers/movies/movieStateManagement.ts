import { useAppDispatch } from '../../../lib/storeHooks';
import {
  fetchAndInitializeMoviesAndGenres,
  fetchInitializeNewMovies,
  fetchInitializeMoviesDetails,
  fetchInitializeGenres,
  fetchInitializeFilterMovies,
  fetchAppendFilterMovies,
} from './../../actions/movieActions';
import { useCallback } from 'react';

export const useMovieActions = () => {
  const dispatch = useAppDispatch();

  const initializeMovies = useCallback(() => {
    dispatch(fetchInitializeNewMovies());
  }, [dispatch]);
  const initializeMoviesDetails = useCallback(
    (movieId: string | string[] | undefined) => {
      dispatch(fetchInitializeMoviesDetails(movieId));
    },
    [dispatch]
  );

  const initializeFilteredMovies = useCallback(
    (
      selectedGenreId: number,
      selectedScore: number,
      selectedYear: number,
      selectedPage: number
    ) => {
      dispatch(
        fetchInitializeFilterMovies(
          selectedGenreId,
          selectedScore,
          selectedYear,
          selectedPage
        )
      );
    },
    [dispatch]
  );
  const initializeAppendFilteredMovies = useCallback(
    (selectedGenreId: number, selectedScore: number, selectedYear: number) => {
      dispatch(
        fetchAppendFilterMovies(selectedGenreId, selectedScore, selectedYear)
      );
    },
    [dispatch]
  );

  const initializeSortMovieByGenre = useCallback(() => {
    dispatch(fetchAndInitializeMoviesAndGenres());
  }, [dispatch]);

  const initializeSortByGenre = useCallback(() => {
    dispatch(fetchInitializeGenres());
  }, [dispatch]);

  return {
    initializeMovies,
    initializeMoviesDetails,
    initializeSortMovieByGenre,
    initializeSortByGenre,
    initializeFilteredMovies,
    initializeAppendFilteredMovies,
  };
};

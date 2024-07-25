import { AppThunk } from '../store';
import {
  fetchNewestMovies,
  fetchGenres,
  fetchFilteredMovies,
  fetchMovieDetails,
} from '../../pages/api/index';
import {
  initializeMovies,
  initializeMovieDetails,
  setLoading,
  setError,
  setGenres,
  setPopularMoviesByGenre,
  initializeFilterMovies,
  appendFilteredMovies,
} from '../reducers/movies/movieSlice';
import { Genre, Movie } from '@/types/movies';

const fetchInitializeNewMovies = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const movies = await fetchNewestMovies();
    dispatch(initializeMovies(movies));
  } catch (error) {
    console.error('Failed to fetch movies:', error);
    dispatch(setError('Failed to fetch movies'));
  } finally {
    dispatch(setLoading(false));
  }
};

const fetchInitializeMoviesDetails =
  (moviesId: string | string[] | undefined): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const moviesDetails = await fetchMovieDetails(moviesId);
      dispatch(initializeMovieDetails(moviesDetails));
    } catch (error) {
      dispatch(setError('Failed to fetch movie details'));
    } finally {
      dispatch(setLoading(false));
      dispatch(setError(null));
    }
  };

const fetchAndInitializeMoviesAndGenres = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const [movies, genres] = await Promise.all([
      fetchNewestMovies(),
      fetchGenres(),
    ]);

    const moviesByGenre: Record<string, Movie[]> = {};
    genres.forEach((genre: Genre) => {
      const filteredMovies = movies.filter((movie: Movie) =>
        movie.genre_ids.includes(genre.id)
      );
      const sortedMovies = filteredMovies
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 10);
      moviesByGenre[genre.name] = sortedMovies;
    });

    dispatch(setPopularMoviesByGenre(moviesByGenre));
  } catch (error) {
    console.error('Failed to fetch movies or genres:', error);
    dispatch(setError('Failed to fetch movies or genres'));
  } finally {
    dispatch(setLoading(false));
  }
};

const fetchInitializeGenres = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const genres = await fetchGenres();
    dispatch(setGenres(genres));
  } catch (error) {
    console.error('Failed to fetch genres:', error);
    dispatch(setError('Failed to fetch genres'));
  } finally {
    dispatch(setLoading(false));
  }
};

const fetchInitializeFilterMovies =
  (
    selectedGenreId: number,
    selectedScore: number,
    selectedYear: number,
    selectedPage: number
  ): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const filteredMovies = await fetchFilteredMovies(
        selectedGenreId,
        selectedScore,
        selectedYear,
        selectedPage
      );
      dispatch(initializeFilterMovies(filteredMovies));
    } catch (error) {
      console.error('Failed to fetch filtered movies:', error);
      dispatch(setError('Failed to fetch filtered movies'));
    } finally {
      dispatch(setLoading(false));
    }
  };

const fetchAppendFilterMovies =
  (
    selectedGenreId: number,
    selectedScore: number,
    selectedYear: number
  ): AppThunk =>
  async (dispatch, getState) => {
    dispatch(setLoading(true));
    const { currentPage } = getState().movies;
    try {
      const nextPage = currentPage + 1;
      const filteredMovies = await fetchFilteredMovies(
        selectedGenreId,
        selectedScore,
        selectedYear,
        nextPage
      );
      dispatch(appendFilteredMovies(filteredMovies));
    } catch (error) {
      console.error('Failed to fetch filtered movies:', error);
      dispatch(setError('Failed to fetch filtered movies'));
    } finally {
      dispatch(setLoading(false));
    }
  };

export {
  fetchAndInitializeMoviesAndGenres,
  fetchAppendFilterMovies,
  fetchInitializeFilterMovies,
  fetchInitializeNewMovies,
  fetchInitializeGenres,
  fetchInitializeMoviesDetails,
};

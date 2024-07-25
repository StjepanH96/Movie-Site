import { MovieDetails } from '@/types/movie';
import { Genre, Movie, MoviePage } from '@/types/movies';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MovieState {
  movies: Movie[];
  movieDetails: MovieDetails | null;
  genres: Genre[];
  popularMoviesByGenre: Record<string, Movie[]>;
  filteredMovies: MoviePage;
  loading: boolean;
  error: string | null;
  currentPage: number;
  hasMore: boolean;
}

const initialState: MovieState = {
  movies: [],
  movieDetails: null,
  genres: [],
  popularMoviesByGenre: {},
  filteredMovies: { page: 0, results: [], total_pages: 0, total_results: 0 },
  loading: false,
  error: null,
  currentPage: 1,
  hasMore: true,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    initializeMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
      state.loading = false;
      state.error = null;
    },
    setGenres: (state, action: PayloadAction<Genre[]>) => {
      state.genres = action.payload;
      state.loading = false;
      state.error = null;
    },
    setPopularMoviesByGenre: (
      state,
      action: PayloadAction<Record<string, Movie[]>>
    ) => {
      state.popularMoviesByGenre = action.payload;
      state.loading = false;
      state.error = null;
    },
    initializeMovieDetails: (state, action: PayloadAction<MovieDetails>) => {
      state.movieDetails = action.payload;
      state.loading = false;
      state.error = null;
    },
    initializeFilterMovies: (state, action: PayloadAction<MoviePage>) => {
      state.filteredMovies = action.payload;
      state.loading = false;
      state.error = null;
      state.currentPage = action.payload.page;
      state.hasMore = action.payload.page < action.payload.total_pages;
    },
    appendFilteredMovies: (state, action: PayloadAction<MoviePage>) => {
      state.filteredMovies.results = [
        ...state.filteredMovies.results,
        ...action.payload.results,
      ];
      state.error = null;
      state.currentPage += 1;
      state.hasMore = state.currentPage < state.filteredMovies.total_pages;
    },
  },
});

export const {
  initializeMovies,
  initializeMovieDetails,
  setLoading,
  setError,
  setGenres,
  setPopularMoviesByGenre,
  initializeFilterMovies,
  appendFilteredMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;

// redux/reducers/movies/movieSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store';
import { fetchNewestMovies, fetchGenres } from '../../../lib/api';

export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  adult: boolean;
  video: boolean;
  release_date: string;
}

export interface Genre {
  id: number;
  name: string;
}

interface MovieState {
    movies: Movie[];
    genres: Genre[];
    popularMoviesByGenre: Record<string, Movie[]>;  // Dodano polje za najpopularnije filmove po žanru
  }
  
  const initialState: MovieState = {
    movies: [],
    genres: [],
    popularMoviesByGenre: {}  // Inicijalizacija praznog objekta
  };
// Creating the slice
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    initializeMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
    setGenres: (state, action: PayloadAction<Genre[]>) => {
      state.genres = action.payload;
    },
    setPopularMoviesByGenre: (state, action: PayloadAction<Record<string, Movie[]>>) => {
        state.popularMoviesByGenre = action.payload;
      },
    
  },
});

export const { initializeMovies, setGenres, setPopularMoviesByGenre } = moviesSlice.actions;

export const fetchAllMovies = (): AppThunk => async dispatch => {
    try {
      const movies = await fetchNewestMovies(); 
      dispatch(initializeMovies(movies));
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  };

  export const fetchAndInitializeMoviesAndGenres = (): AppThunk => async dispatch => {
    try {
      const [movies, genres] = await Promise.all([
        fetchNewestMovies(),
        fetchGenres()
      ]);
  
      const moviesByGenre: Record<string, Movie[]> = {};
      genres.forEach((genre: Genre) => {
        const filteredMovies = movies.filter((movie: Movie) => movie.genre_ids.includes(genre.id));
        const sortedMovies = filteredMovies.sort((a: Movie, b: Movie) => b.popularity - a.popularity).slice(0, 10);
        moviesByGenre[genre.name] = sortedMovies;
      });
    
      dispatch(setPopularMoviesByGenre(moviesByGenre));  // Spremanje sortiranih filmova po žanru
  
    } catch (error) {
      console.error('Failed to fetch movies or genres:', error);
    }
  };

export default moviesSlice.reducer;
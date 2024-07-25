const API_KEY = '472537e04a2fe8a4eb6fc576f38e7fd6';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchNewestMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache' 
  });
  const data = await response.json();
  console.log(data);
  return data.results;
};

export const fetchGenres = async () => {
  const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache' 
  });
  const data = await response.json();
  return data.genres;
};

;
export const fetchMovieDetails = async (movieId: number) => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=credits,videos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache' 
  });
  const data = await response.json();
  if (!response.ok) {
    console.log("hello", response);
    throw new Error('Failed to fetch movie details');
  }
  return data;
};
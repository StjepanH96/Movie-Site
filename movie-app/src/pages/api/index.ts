const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchNewestMovies = async () => {
  const pages = [1, 2, 3, 4, 5 ,6 ];
  const requests = pages.map(page =>
    fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=${page}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'  
      }
    })
  );

  try {
    const responses = await Promise.all(requests);
    const data = await Promise.all(responses.map(response => response.json()));
    const movies = data.flatMap(pageData => pageData.results);
    return movies;
  } catch (error) {
    throw error;
  }
};

export const fetchGenres = async () => {
  const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400'  
    }
  });
  const data = await response.json();
  return data.genres.slice(0, 10);
};

export const fetchMovieDetails = async (movieId: string | string[] | undefined) => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=credits,videos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600' 
    }
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }
  return data;
};
export const fetchFilteredMovies = async (selectedGenreId:number, selectedScore:number, selectedYear:number, page = 1) => {
  let baseUrl = `${BASE_URL}/discover/movie?api_key=${API_KEY}`;

  if (selectedGenreId > 0) {
    baseUrl += `&with_genres=${selectedGenreId}`;
  }
  if (selectedYear > 0) {
    baseUrl += `&year=${selectedYear}`;
  }
  if (selectedScore > 0) {
    baseUrl += `&vote_average.gte=${selectedScore}`;
  }
  baseUrl += `&page=${page}`;

  try {
    const response = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'  
      }
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error('Failed to fetch filtered movies');
    }
    return data;
  } catch (error) {
    console.error('Failed to fetch filtered movies:', error);
    throw error;
  }
};
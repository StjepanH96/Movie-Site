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

export interface MoviePage {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

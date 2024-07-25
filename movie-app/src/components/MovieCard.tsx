import {
  FavoriteStarContainer,
  MovieImage,
  MovieItem,
  MovieOverlay,
  MovieTitle,
} from '../styled-components/movie/MovieCardStyles';
import { Movie } from '@/types/movies';
import { FavoriteStar } from './FavoriteStart';

interface MovieCardProps {
  movie: Movie;
  onMovieClick: (movieId: number) => void;
}

export const MovieCard = ({ movie, onMovieClick }: MovieCardProps) => {
  return (
    <MovieItem onClick={() => onMovieClick(movie.id)}>
      <MovieImage
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <FavoriteStarContainer>
        <FavoriteStar movieId={movie.id} />
      </FavoriteStarContainer>
      <MovieOverlay>
        <MovieTitle>{movie.title}</MovieTitle>
      </MovieOverlay>
    </MovieItem>
  );
};

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMovieActions } from '../../redux/reducers/movies/movieStateManagement';
import { LoadingSpinner } from '@/components/Spinner';
import { ErrorModal } from '../../components/ErrorModal';
import {
  Banner,
  CastItem,
  CastList,
  LoaderContainer,
  MovieContainer,
  MovieDetail,
  MovieDetailsContainer,
  MovieInfo,
  MovieOverview,
  MoviePoster,
  MovieTitleDetail,
  PlayButton,
  SliderContainer,
  VideoModal,
} from '@/styled-components/movie/MovieDetailsStyles';
import { FavoriteStar } from '@/components/FavoriteStart';
import { Genre } from '@/types/movies';
import { useMovieData } from '@/lib/useMovieData';

const MoviePage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const { movieDetails, loading, error } = useMovieData();

  const router = useRouter();
  const { id } = router.query;
  const movieId = id;

  const { initializeMoviesDetails } = useMovieActions();

  useEffect(() => {
    if (movieId) {
      initializeMoviesDetails(movieId);
    }
  }, [initializeMoviesDetails, movieId]);
  
  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <>
      {error && <ErrorModal message={error} />}
      <MovieContainer>
        {loading ? (
          <LoaderContainer>
            <LoadingSpinner />
          </LoaderContainer>
        ) : (
          movieDetails && (
            <>
              <Banner
                src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
              >
                <PlayButton onClick={handlePlayVideo} />
              </Banner>
              {showVideo &&
                movieDetails.videos &&
                movieDetails.videos.results.length > 0 && (
                  <VideoModal onClick={handleCloseVideo}>
                    <iframe
                      src={`https://www.youtube.com/embed/${movieDetails.videos.results[0].key}?autoplay=1&mute=1`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </VideoModal>
                )}
              <MovieDetailsContainer>
                <MoviePoster
                  src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                  alt={movieDetails.title}
                />
                <MovieInfo>
                  <MovieTitleDetail>
                    {movieDetails.title}
                    <FavoriteStar movieId={movieDetails.id} />
                  </MovieTitleDetail>
                  <MovieOverview>{movieDetails.overview}</MovieOverview>
                  <MovieDetail>
                    <strong>Score:</strong> {movieDetails.vote_average}
                  </MovieDetail>
                  <MovieDetail>
                    <strong>Genre:</strong>{' '}
                    {movieDetails.genres
                      .map((genre: Genre) => genre.name)
                      .join(', ')}
                  </MovieDetail>
                  <MovieDetail>
                    <strong>Duration:</strong> {movieDetails.runtime} minutes
                  </MovieDetail>
                  <MovieDetail>
                    <strong>Country:</strong>{' '}
                    {movieDetails.production_countries
                      .map((country) => country.name)
                      .join(', ')}
                  </MovieDetail>
                  <MovieDetail>
                    <strong>Cast:</strong>
                    <SliderContainer>
                      <CastList>
                        {movieDetails.credits?.cast?.map((actor) => (
                          <CastItem key={actor.cast_id}>
                            <p>{actor.name}</p>
                            <p>
                              <em>{actor.character}</em>
                            </p>
                          </CastItem>
                        ))}
                      </CastList>
                    </SliderContainer>
                  </MovieDetail>
                </MovieInfo>
              </MovieDetailsContainer>
            </>
          )
        )}
      </MovieContainer>
    </>
  );
};

export default MoviePage;

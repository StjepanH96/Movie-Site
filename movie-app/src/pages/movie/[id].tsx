import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useMovieDetails } from '../../redux/reducers/movies/movieStateManagement';
import styled from 'styled-components';
import { FavoriteStar } from '@/components/FavoriteStart';
interface BannerProps {
  src: string;
}


const MovieContainer = styled.div`
  padding: 16px;
  color: white;
  background: #121212;
  width: 100%;
  overflow: hidden;
`;

const Banner = styled.div<BannerProps>`
  width: 100%;
  height: 600px;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;  
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  overflow: hidden; 
  opacity:0.7;
  cursor: pointer; // Make it clear it's clickable
`;

const PlayButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%; 
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2; 

  &:before {
    content: '▶'; 
    font-size: 20px;
    color: black;
  }
`;

const VideoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  iframe {
    width: 80%;
    height: 80%;
  }
`;

const MovieDetailsContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  margin-top:40px;
`;

const FavoriteStarContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 7px;
  z-index: 10;  // Ensure it's above the image
`;

const MoviePoster = styled.img`
  width: 20%;
  height:20%;
  border-radius: 8px;
  margin-bottom: 16px;
`;


const MovieInfo = styled.div`
  flex: 1;
`;

const MovieTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
`;

const MovieOverview = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  width:80%;
 
  
`;

const MovieDetail = styled.p`
  font-size: 1rem;
  margin: 8px 0;
`;

const SliderContainer = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  padding: 10px 0;
  width: 80%;
  position: relative;

  &::after {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 10px;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.7);
    pointer-events: none;
  }
`;

const CastList = styled.ul`
  list-style: none;
  padding: 0;
  display: inline-flex;
  gap: 16px;
`;

const CastItem = styled.li`
  display: inline-block;
  min-width: 100px;
  max-width: 150px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MoviePage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { movie, loading, error } = useMovieDetails(Number(id));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const handlePlayVideo = () => {
    console.log("detalji videja prilikom klika", movie?.videos)
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <MovieContainer>
      {movie && (
        <>
          <Banner src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}>
          <PlayButton onClick={handlePlayVideo}/>

          </Banner>
          {showVideo && movie.videos && movie.videos.results.length > 0 && (
  <VideoModal onClick={handleCloseVideo}>
    <iframe
      src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?autoplay=1&mute=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </VideoModal>
)}
          <MovieDetailsContainer>
            <MoviePoster src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
            <MovieInfo>
              <MovieTitle>{movie.title }</MovieTitle>
              <FavoriteStarContainer>
              <FavoriteStar movieId={movie.id}/>
            </FavoriteStarContainer>
              <MovieOverview>{movie.overview}</MovieOverview>
              <MovieDetail><strong>Score:</strong> {movie.vote_average}</MovieDetail>
              <MovieDetail><strong>Genre:</strong> {Array.isArray(movie.genres) ? movie.genres.map(genre => genre.name).join(', ') : 'N/A'}</MovieDetail>
              <MovieDetail><strong>Duration:</strong> {movie.runtime} minutes</MovieDetail>
              <MovieDetail><strong>Country:</strong> {Array.isArray(movie.production_countries) ? movie.production_countries.map(country => country.name).join(', ') : 'N/A'}</MovieDetail>
              <MovieDetail>
                <strong>Cast:</strong>
                <SliderContainer>
                  <CastList>
                    {movie.credits?.cast?.map(actor => (
                      <CastItem key={actor.cast_id}>
                        <p>{actor.name}</p>
                        <p><em>{actor.character}</em></p>
                      </CastItem>
                    ))}
                  </CastList>
                </SliderContainer>
              </MovieDetail>
            </MovieInfo>
          </MovieDetailsContainer>
        </>
      )}
    </MovieContainer>
  );
};

export default MoviePage;
import { styled } from 'styled-components';

interface BannerProps {
  src: string;
}

const MovieContainer = styled.div`
  padding: 16px;
  color: white;
  background: #121212;
  width: 100%;
  overflow: hidden;
  margin-top: 3%;
  @media (max-width: 768px) {
    margin-top: 15%;
  }
`;

const Banner = styled.div<BannerProps>`
  width: 100%;
  height: 600px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  overflow: hidden;
  opacity: 0.7;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 300px;
  }
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

const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const MoviePoster = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 20%;
  }
`;

const MovieInfo = styled.div`
  flex: 1;
  width: 80%;
  position: relative;
  text-align: justify;
`;

const MovieTitleDetail = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  @media (max-width: 868px) {
    font-size: 1.4rem;
  }
`;

const MovieOverview = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  @media (min-width: 768px) {
    width: 80%;
  }
`;

const SliderContainer = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  padding: 10px 0;
  width: 100%; 

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

const MovieDetail = styled.p`
  font-size: 1rem;
  margin: 8px 0;
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

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 30%;
`;

export {
  LoaderContainer,
  CastItem,
  CastList,
  MovieDetail,
  VideoModal,
  SliderContainer,
  MovieOverview,
  Banner,
  MovieContainer,
  MovieInfo,
  MovieDetailsContainer,
  MoviePoster,
  PlayButton,
  MovieTitleDetail,
};

import { Outlet, useParams } from 'react-router-dom';
import {
  NavItem,
  Container,
  FilmContainer,
  DetailsContainer,
  FilmTitle,
  VoteAverage,
  BlockTitle,
  Overview,
  GenreList,
  AditionalInfoContainer,
} from './MovieDetails.styled';
import { useState, useEffect, Suspense } from 'react';
import { getFilmById } from '../../components/api/api';
import { BASE_POSTER_URL, IMG_W300 } from 'components/api/constants/baseUrls';

const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieDetails = () => {
  const { movieId } = useParams();
  const [filmDetails, setFilmDetails] = useState({});
  const [status, setStatus] = useState(Status.IDLE);
  const [filmGenre, setFilmGenre] = useState([]);
  const { poster_path, name, title, vote_average, overview, release_date } =
    filmDetails;
  const releaseYear = new Date(release_date).getFullYear();

  // const vote = voteAverageRound(vote_average);

  useEffect(() => {
    if (!movieId) return;

    async function setMovieById() {
      setStatus(Status.PENDING);

      try {
        const res = await getFilmById(movieId);
        setFilmDetails(res);
        setFilmGenre(res.genres);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        console.log(error);
      }
    }
    setMovieById();
  }, [movieId]);

  let imagePath = ``;
  !poster_path
    ? (imagePath = `https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png`)
    : (imagePath = `${BASE_POSTER_URL}/${IMG_W300}/${poster_path}`);

  return (
    <Container>
      {/* <GoBackLink to={location.state.from ?? '/'}>Go back</GoBackLink> */}

      <FilmContainer>
        <div>
          <img src={imagePath} alt={title || name} loading="lazy" />
        </div>
        <DetailsContainer>
          <FilmTitle>
            {title} ({releaseYear})
          </FilmTitle>
          <VoteAverage>
            <span>Average:</span> {vote_average}
          </VoteAverage>
          <BlockTitle>Overview</BlockTitle>
          <Overview>{overview}</Overview>
          <BlockTitle>Genres</BlockTitle>
          {
            <GenreList>
              {filmGenre.map(({ name }) => {
                return <li key={name}>{name}</li>;
              })}
            </GenreList>
          }
        </DetailsContainer>
      </FilmContainer>
      <BlockTitle>Aditional information</BlockTitle>
      <AditionalInfoContainer>
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </AditionalInfoContainer>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet context={movieId} />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;

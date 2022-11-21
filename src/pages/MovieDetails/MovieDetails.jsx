import { Outlet, useLocation, useParams } from 'react-router-dom';
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
  GoBackLink,
} from './MovieDetails.styled';
import { useState, useEffect, Suspense } from 'react';
import { getFilmById } from '../../components/api/api';
import { Status } from '../../components/api/constants/status';
import {
  setReleaseDate,
  setReleaseVote,
} from '../../components/Services/Round';
import { BASE_POSTER_URL, IMG_W300 } from 'components/api/constants/baseUrls';
import { GiReturnArrow } from 'react-icons/gi';
const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

const MovieDetails = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const { movieId } = useParams();
  const [filmDetails, setFilmDetails] = useState({});
  const [filmGenre, setFilmGenre] = useState([]);
  const { poster_path, name, title, vote_average, overview, release_date } =
    filmDetails;
  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/movies';

  useEffect(() => {
    if (!movieId) return;

    async function setMovieById() {
      setStatus(Status.PENDING);

      try {
        const res = await getFilmById(movieId);
        setStatus(Status.RESOLVED);
        setFilmDetails(res);
        setFilmGenre(res.genres);
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
    <>
      {status === 'pending'}
      {status === 'resolved' && (
        <Container>
          <GoBackLink to={backLinkHref}>
            <GiReturnArrow size={10} />
            <span>Go back</span>
          </GoBackLink>
          <FilmContainer>
            <div>
              <img src={imagePath} alt={title || name} loading="lazy" />
            </div>
            <DetailsContainer>
              <FilmTitle>
                {title} ( {setReleaseDate(release_date) || `date not found`})
              </FilmTitle>
              <VoteAverage>
                <span>Average:</span>
                {setReleaseVote(vote_average) || `vote not found`}
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
      )}
    </>
  );
};

export default MovieDetails;

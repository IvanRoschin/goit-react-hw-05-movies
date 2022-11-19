import { Outlet, useParams } from 'react-router-dom';
import { NavItem } from './MovieDetails.styled';
import { useState, useEffect } from 'react';
import { getFilms } from 'fakeApi';

const navItems = [
  { href: 'movies/:movieId/cast', text: 'Cast' },
  { href: 'movies/:movieId/reviews', text: 'Reviews' },
];

const MovieDetails = () => {
  const { movieId } = useParams();
  const [filmDetails, setFilmDetails] = useState({});
  // const [filmGenre, setFilmGenre] = useState([]);
  const { name, title, poster_path } = filmDetails;

  useEffect(() => {
    getFilms(movieId).then(setFilmDetails);
  }, [movieId]);

  console.log(name);

  return (
    <>
      <div>MovieDetails must been here</div>
      <div>
        <div>{name || title}</div>
        <div>{poster_path}</div>
      </div>

      <nav>
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </nav>
      <Outlet />
    </>
  );
};

export default MovieDetails;

// import { useState, useEffect } from 'react';
// import { getFilmById } from '../../components/api/api';
// import { Navlink, Outlet } from 'react-router-dom';

// const navItems = [{href: }];

// const MovieDetails = () => {
//   const [filmDetails, setFilmDetail] = useState([]);
//   const [filmGenres, setFilmGenres] = useState([]);
//   const { poster_path, title, vote_average, overview, release_date } = filmInfo;
//   const releaseYear = new Date(release_date).getFullYear();

//   useEffect(() => {
//     async function getFilms() {
//       try {
//         const filmDetails = await getFilmById(id);
//         setFilmDetail(prevState => [...prevState, ...filmDetails]);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getFilms();
//   }, [id]);
//   console.log('filmDetails', filmDetails);
//   return (
//     <>
//       <div>Films Detail must been here</div>
//     </>
//   );
// };

// export default MovieDetails;

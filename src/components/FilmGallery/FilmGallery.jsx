import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  FilmContainer,
  FilmLi,
  FilmPoster,
  FilmTitle,
} from './FilmGallery.styled';

export const BASE_POSTER_URL = `https://image.tmdb.org/t/p/w500`;

export const FilmGallery = ({ searchingFilms }) => {
  console.log(searchingFilms);
  return (
    <FilmContainer>
      {searchingFilms.map(({ id, title, name, poster_path }) => {
        let imagePath = ``;
        !poster_path
          ? (imagePath = `https://raw.githubusercontent.com/marvall/filmoteka/main/src/images/no-poster.png`)
          : (imagePath = `${BASE_POSTER_URL}/${poster_path}`);
        return (
          <FilmLi key={id}>
            <Link to={`/movies/${id}`}>
              <FilmPoster
                data-id={id}
                src={imagePath}
                alt={title || name}
                loading="lazy"
              />
              <FilmTitle>{title || name}</FilmTitle>
            </Link>
          </FilmLi>
        );
      })}
    </FilmContainer>
  );
};

FilmGallery.propTypes = {
  searchingFilms: PropTypes.array.isRequired,
};

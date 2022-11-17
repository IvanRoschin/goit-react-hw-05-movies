import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FilmListContainer, FilmLi } from './FilmList.stylized';

export const FilmList = ({ trendingFilms }) => {
  return (
    <FilmListContainer>
      {trendingFilms.map(({ id, title, name }) => {
        return (
          <FilmLi key={id}>
            <Link to={`/movies/&{id}`}>{title || name}</Link>
          </FilmLi>
        );
      })}
    </FilmListContainer>
  );
};

FilmList.propTypes = {
  trendingFilms: PropTypes.array.isRequired,
};

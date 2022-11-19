import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from '../api/api';
import { BASE_POSTER_URL, IMG_W200 } from 'components/api/constants/baseUrls';
import { CastContainer, CastPoster, CastName, Message } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [movieId] = useOutletContext();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    try {
      getMovieCast(movieId).then(r => {
        setCast(r.cast);
      });
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <div>
      {!cast.length && <Message>Sorry! Information not found</Message>}
      <CastContainer>
        {cast.map(({ id, original_name, profile_path }) => {
          return (
            <li key={id}>
              <CastPoster
                src={
                  profile_path !== null
                    ? `${BASE_POSTER_URL}/${IMG_W200}/${profile_path}`
                    : 'https://thesource.sa.ua.edu/wp-content/uploads/sites/57/2019/08/no-person-200x300.png'
                }
                alt={original_name}
              />
              <CastName>{original_name}</CastName>
            </li>
          );
        })}
      </CastContainer>
    </div>
  );
};

export default Cast;

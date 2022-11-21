import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from '../api/api';
import { Status } from '../api/constants/status';
import { BASE_POSTER_URL, IMG_W200 } from 'components/api/constants/baseUrls';
import {
  CastContainer,
  CastItem,
  CastPoster,
  CastName,
  Message,
} from './Cast.styled';

const Cast = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    async function getCast() {
      setStatus(Status.PENDING);

      try {
        const casts = await getMovieCast(movieId);
        setCast(casts);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        console.log(error);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <>
      {status === 'pending'}
      {status === 'resolved' && (
        <CastContainer>
          {cast.map(({ id, original_name, profile_path }) => {
            return (
              <CastItem key={id}>
                <CastPoster
                  src={
                    profile_path !== null
                      ? `${BASE_POSTER_URL}/${IMG_W200}/${profile_path}`
                      : 'https://thesource.sa.ua.edu/wp-content/uploads/sites/57/2019/08/no-person-200x300.png'
                  }
                  alt={original_name}
                />
                <CastName>{original_name}</CastName>
              </CastItem>
            );
          })}
        </CastContainer>
      )}
      {status === 'rejected' && <Message>Sorry! Casts not found</Message>}
    </>
  );
};

export default Cast;

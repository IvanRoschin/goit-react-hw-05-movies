import { useState, useEffect } from 'react';
import { getFilmById } from '../../components/api/api';

const MovieDetails = ({ id }) => {
  const [filmDetails, setFilmDetail] = useState([]);

  useEffect(() => {
    if (!id) {
      return;
    }
    async function getFilms() {
      try {
        const filmDetails = await getFilmById(id);
        setFilmDetail(prevState => [...prevState, ...filmDetails]);
      } catch (error) {
        console.log(error);
      }
    }
    getFilms();
  }, [id]);
  console.log('filmDetails', filmDetails);
  return (
    <>
      <div>Films Detail must been here</div>
    </>
  );
};

export default MovieDetails;

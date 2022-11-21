import { getTrending } from '../../components/api/api';
import { FilmGallery } from '../../components/FilmGallery/FilmGallery';
import { useState, useEffect } from 'react';
import { Title } from './Home.styled';

const Home = () => {
  const [films, SetFilms] = useState([]);

  useEffect(() => {
    async function getFilms() {
      try {
        const data = await getTrending();
        SetFilms(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getFilms();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <FilmGallery films={films} />
    </>
  );
};

export default Home;

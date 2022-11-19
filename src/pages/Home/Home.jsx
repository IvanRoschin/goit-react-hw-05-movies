import { getTrending } from '../../components/api/api';
// import { FilmList } from '../../components/FilmsList/FilmsList';
import { FilmGallery } from '../../components/FilmGallery/FilmGallery';
import { useState, useEffect } from 'react';
import { Title } from './Home.styled';

const Home = () => {
  const [films, SetFilms] = useState([]);

  useEffect(() => {
    try {
      getTrending().then(r => SetFilms(r.results));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <FilmGallery films={films} />

      {/* <FilmList trendingFilms={trendingFilms}> </FilmList> */}
    </>
  );
};

export default Home;

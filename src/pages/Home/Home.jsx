import { getTrending } from '../../components/api/api';
import { FilmList } from '../../components/FilmsList/FilmsList';
import { useState, useEffect } from 'react';
import { Title } from './Home.styled';

console.log('Home getTrending', getTrending());

const Home = () => {
  const [trendingFilms, SetTrendingFilms] = useState([]);

  useEffect(() => {
    try {
      getTrending().then(r => SetTrendingFilms(r.results));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <FilmList trendingFilms={trendingFilms}> </FilmList>
    </>
  );
};

export default Home;

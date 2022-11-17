import { FilmGallery } from '../../components/FilmGallery/FilmGallery';
import { getSearchMovie } from '../../components/api/api';
import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar';

const Movies = () => {
  // const [trendingFilms, SetTrendingFilms] = useState([]);
  const [searchingFilms, setSearchingFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [request, setRequest] = useState('');

  // useEffect(() => {
  //   try {
  //     getTrending().then(r => SetTrendingFilms(r.results));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  useEffect(() => {
    if (!request) {
      return;
    }
    async function getFilms() {
      try {
        const searchingFilms = await getSearchMovie(request, page);
        setSearchingFilms(prevState => [...prevState, ...searchingFilms]);
      } catch (error) {
        console.log(error);
      }
    }
    getFilms();
  }, [request, page]);

  const handleFormSubmit = request => {
    setRequest(request);
    setSearchingFilms([]);
    setPage(1);
  };
  console.log('searchingFilms', searchingFilms);
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <div>Films Gallery must been here</div>
      {/* <FilmGallery trendingFilms={trendingFilms}></FilmGallery> */}
      <FilmGallery searchingFilms={searchingFilms}></FilmGallery>
    </>
  );
};

export default Movies;

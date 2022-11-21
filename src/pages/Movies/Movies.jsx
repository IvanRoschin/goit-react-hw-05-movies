import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSearchMovie } from '../../components/api/api';
import Searchbar from 'components/Searchbar';
import { FilmGallery } from '../../components/FilmGallery/FilmGallery';
import Message from 'components/Message';
import { Status } from '../../components/api/constants/status';

const Movies = () => {
  const [page, setPage] = useState(0);
  const [films, setFilms] = useState([]);
  const [request, setRequest] = useState('');
  const [notify, setNotify] = useState('');
  const location = useLocation();
  const [status, setStatus] = useState(Status.IDLE);
  const toBackLocation = `${location.pathname}${location.search}`;

  useEffect(() => {
    if (!request) {
      setNotify('To display films, enter a query in the search field');
      return;
    }

    async function getFilms() {
      setStatus(Status.PENDING);
      setNotify`Sorry, but where are no movies for your request ${request}`;

      try {
        if (page === 0) {
          setPage(1);
          return;
        }
        const movies = await getSearchMovie(request, page);
        setFilms(prevState => [...prevState, ...movies.results]);
        setNotify(`Here's your ${request}s`);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
      }
    }
    getFilms();
  }, [request, page]);

  useEffect(() => {
    if (request && !films.length) {
      setNotify('Sorry, nothing was found, please try your search again');
    }
  }, [request, films.length]);

  const handleFormSubmit = request => {
    setRequest(request);
    setFilms([]);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <Message message={notify} status={status} />
      {status === Status.PENDING}
      {status === Status.RESOLVED && films.length > 0 && (
        <FilmGallery films={films} location={toBackLocation} />
      )}
      {status === Status.REJECTED && films.length === 0 && (
        <Message message={notify} />
      )}
    </>
  );
};

export default Movies;

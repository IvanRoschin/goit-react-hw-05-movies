import { useState, useEffect } from 'react';
import { getSearchMovie } from '../../components/api/api';
import Searchbar from 'components/Searchbar';
import { FilmGallery } from '../../components/FilmGallery/FilmGallery';
import Message from 'components/Message';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [request, setRequest] = useState('');
  const [notify, setNotify] = useState('');
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!request) {
      setNotify('To display films, enter a query in the search field');
      return;
    }

    async function getFilms() {
      setStatus(Status.PENDING);
      setNotify`Sorry, but where are no movies for your request ${request}`;

      try {
        getSearchMovie(request).then(r => setFilms(r.results));
        setNotify(`Here's your ${request}`);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
      }
    }
    getFilms();
  }, [request]);

  // useEffect(() => {
  //   if (request && films.length) {
  //     setNotify('Sorry, nothing was found, please try your search again');
  //   }
  // }, [request, films.length]);

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
        <FilmGallery films={films} />
      )}
      {status === Status.REJECTED && films.length === 0 && (
        <Message message={notify} />
      )}
    </>
  );
};

export default Movies;

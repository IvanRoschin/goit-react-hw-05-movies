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
      setNotify`Sorry, but where are no images for your request ${request}`;

      try {
        getSearchMovie().then(r => setFilms(r.results));
        setNotify(`Here is your ${request}s`);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
      }
    }
    getFilms();
  }, [request]);

  const handleFormSubmit = request => {
    setRequest(request);
    setFilms([]);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <Message message={notify} status={status} />
      <FilmGallery films={films} />
    </>
  );
};

export default Movies;

const db = {
  films: [
    {
      id: '123',
      title: 'first film',
      name: 'alia first film',
      poster_path: '123',
    },
    {
      id: '456',
      name: 'alia second film',
      poster_path: '456',
    },
    {
      id: '789',
      name: 'alia third film',
      poster_path: '789',
    },
  ],
};

export const getFilms = () => {
  return Promise.resolve(db.films);
};

export const getFilmsById = filmId => {
  return Promise.resolve(db.films.find(film => film.id === filmId));
};

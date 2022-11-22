import axios from 'axios';

import API_KEY from './constants/apiKeys';
import { BASE_TRENDING_MOVIES_URL } from './constants/baseUrls';

axios.defaults.baseURL = BASE_TRENDING_MOVIES_URL;

// FETCH FILMS FOR THE FIRST TIME
export const getTrending = async (page = 1) => {
  const response = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}&page=${page}`
  );
  return response.data;
};

// FETCH FILMS BY ID
export const getFilmById = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return data;
};

// FETCH FILMS USING FORM
export const getSearchMovie = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
  );
  if (data.total_results === 0) {
    return Promise.reject(new Error(`Ooops! No images with ${query}`));
  } else {
    return data;
  }
};

// FETCH CAST
export const getMovieCast = async id => {
  const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  if (response.data.cast.length === 0) {
    return Promise.reject(new Error(`No cast was found.`));
  } else {
    return response.data.cast;
  }
};

// FETCH REVIEWS
export const getMovieReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  if (response.data.total_results === 0) {
    return Promise.reject(new Error(`No reviews was found.`));
  } else {
    return response.data.results;
  }
};

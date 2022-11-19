import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../api/api';
import { ReviewsContainer } from './Reviews.styled';
import { Message } from '../Cast/Cast.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [movieId] = useOutletContext();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    try {
      getMovieReviews(movieId).then(r => {
        setReviews(r.reviews);
      });
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <div>
      {!reviews.length && <Message>Sorry! Information not found</Message>}
      <ReviewsContainer>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          );
        })}
      </ReviewsContainer>
    </div>
  );
};

export default Reviews;

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../api/api';
import { Status } from '../api/constants/status';
import { ReviewsContainer } from './Reviews.styled';
import { Message } from '../Cast/Cast.styled';

const Reviews = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    async function getReviews() {
      setStatus(Status.PENDING);

      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        console.log(error);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <>
      {status === 'pending'}
      {status === 'resolved' && (
        <ReviewsContainer>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h2>{author}</h2>
                <p>`{content}`</p>
              </li>
            );
          })}
        </ReviewsContainer>
      )}
      {status === 'rejected' && <Message>Sorry! Reviews not found</Message>}
    </>
  );
};

export default Reviews;

import styled from 'styled-components';

export const FilmContainer = styled.ul`
  margin: ${p => p.theme.space[5]}px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  list-style: none;
`;

export const FilmLi = styled.li`
  cursor: pointer;
  margin-bottom: ${p => p.theme.space[3]}px;
  transition: ${p => p.theme.transition.filmlist};
  &:hover {
    transform: scale(1.03) translateZ(0);
    transition: ${p => p.theme.transition.filmlist};
  }
`;

export const FilmPoster = styled.img`
  border-radius: inherit;
  box-shadow: 0px 3px 4px 1px rgba(44, 133, 200, 0.2);
  height: 400px;
  max-width: 280px;
`;

export const FilmTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  max-width: 300px;
`;

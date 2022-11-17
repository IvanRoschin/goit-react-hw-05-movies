import styled from 'styled-components';

export const FilmContainer = styled.ul`
  margin: ${p => p.theme.space[5]}px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
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

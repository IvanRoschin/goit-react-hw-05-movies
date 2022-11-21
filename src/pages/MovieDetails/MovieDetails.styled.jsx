import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-top: 16px;
  margin-left: 16px;
`;

export const FilmContainer = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 16px;
`;

export const DetailsContainer = styled.div`
  margin-top: 32px;
`;

export const FilmTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 32px;
`;

export const VoteAverage = styled.p`
  color: ${p => p.theme.colors.red};
  font-weight: 700;
  margin-bottom: ${p => p.theme.space[5]}px; ;
`;

export const BlockTitle = styled.h3`
  font-weight: 700;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Overview = styled.p`
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const GenreList = styled.p`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  list-style: none;
`;

export const AditionalInfoContainer = styled.ul`
  margin-top: ${p => p.theme.space[3]}px;
  list-style: disc;
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled(NavLink)`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.bold};
  display: flex;
  aling-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.small};
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  transition: ${p => p.theme.transition.main};

  &.active {
    // background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.red};
    border-bottom: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.red};
  }

  :hover:not(.active),
  focus-visible:not(.active) {
    color: ${p => p.theme.colors.red};
  }
`;

export const GoBackLink = styled(Link)`
  padding: 6px;
  color: black;
  &:hover {
    color: ${p => p.theme.colors.red};
  }
`;

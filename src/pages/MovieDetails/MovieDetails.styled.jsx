import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-top: ${p => p.theme.space[5]}px;
  margin-left: ${p => p.theme.space[5]}px;
`;

export const FilmContainer = styled.div`
  margin-top: ${p => p.theme.space[5]}px;
  display: flex;
  gap: ${p => p.theme.space[5]}px;
`;

export const DetailsContainer = styled.div`
  margin-top: ${p => p.theme.space[6]}px; ;
`;

export const FilmTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.lm};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[6]}px; ;
`;

export const VoteAverage = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[6]}px;
`;

export const BlockTitle = styled.h3`
  font-weight: ${p => p.theme.fontWeights.bold};
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
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.black};
  &:hover {
    color: ${p => p.theme.colors.red};
  }
`;

export const GoBackText = styled.span`
  padding: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 8px 16px;
  font-weight: 700;
  font-size: 20px;
  color: #121417;
  text-decoration: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 5px;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    color: #fff;
    background-color: #015ba0;
  }

  &.active {
    border-bottom: #0077b6 1px solid;
    box-shadow: 0px 6px 5px -5px rgba(0, 0, 0, 0.75);
  }
`;

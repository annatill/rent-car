import { Nav, StyledLink } from './AuthNav.styled';
import { useLocation } from 'react-router-dom';

export const AuthNav = () => {
  const location = useLocation();
  return (
    <Nav>
      <StyledLink to="/" className={location.pathname === '/' ? 'active' : ''}>
        Home
      </StyledLink>
      <StyledLink
        to="/catalog"
        className={location.pathname === '/catalog' ? 'active' : ''}
      >
        Catalog
      </StyledLink>
      <StyledLink
        to="/favorites"
        className={location.pathname === '/favorites' ? 'active' : ''}
      >
        Favorites
      </StyledLink>
    </Nav>
  );
};

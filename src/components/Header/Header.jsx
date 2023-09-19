import { AuthNav } from 'components/AuthNav/AuthNav';
import {
  HeaderStyled,
  Icon,
  TextLogo,
  LogoContainer,
  Text,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <LogoContainer>
        <Icon />
        <TextLogo>RentPro</TextLogo>
      </LogoContainer>
      <AuthNav />
      <Text>+380730000000</Text>
    </HeaderStyled>
  );
};

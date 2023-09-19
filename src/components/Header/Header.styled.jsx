import styled from '@emotion/styled';
import { IoCarSportOutline } from 'react-icons/io5';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 30px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled(IoCarSportOutline)`
  margin-right: 10px;
  font-size: 40px;
  color: #121417;
`;

export const TextLogo = styled.p`
  font-family: 'Advent Pro', sans-serif;
  font-size: 25px;
  color: #121417;
  font-weight: 600;
  margin: 0;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: #121417;
  margin: 0;
`;

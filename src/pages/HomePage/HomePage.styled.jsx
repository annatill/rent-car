import styled from '@emotion/styled';
import { HiOutlineArrowSmRight } from 'react-icons/hi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
  padding: 0 30px;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #121417;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  margin: 0;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  background-color: #3470ff;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #0b44cd;
  }
`;

export const Icon = styled(HiOutlineArrowSmRight)`
  margin-left: 10px;
  font-size: 20px;
`;

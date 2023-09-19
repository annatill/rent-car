import styled from '@emotion/styled';

export const CatalogList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  gap: 50px 29px;
  margin-top: 50px;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: center;
  color: #3470ff;
  cursor: pointer;
  margin: 50px auto 10px auto;
  display: inline-block;
  text-decoration: underline;
  padding: 10px 10px;
  margin-left: auto;
  margin-right: auto;
  :hover,
  :focus {
    color: #0b44cd;
  }
`;

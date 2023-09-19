import styled from '@emotion/styled';

export const Forma = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin-top: 50px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 8px;
    color: #8a8a89;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }

  option {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(18, 20, 23, 0.2);
  }

  input {
    width: 112px;
    height: 20px;
    background: #f7f7fb;
    border: none;
    outline: none;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #121417;
    padding: 14px 24px;
  }
`;

export const SelectBrand = styled.select`
  padding: 14px 18px;
  width: 224px;
  height: 48px;
  border-radius: 14px;
  background: #f7f7fb;
  border: none;
  outline: none;
  margin-right: 18px;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #121417;
  cursor: pointer;
`;

export const SelectPrice = styled.select`
  padding: 14px 18px;
  width: 125px;
  height: 48px;
  border-radius: 14px;
  background: #f7f7fb;
  border: none;
  outline: none;
  margin-right: 18px;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #121417;
  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 116px;
  height: 46px;
  background-color: #3470ff;
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #0b44cd;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

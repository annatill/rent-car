import styled from '@emotion/styled';

export const CardContainer = styled.li`
  width: 274px;
  height: 450px;
  position: relative;
  overflow: hidden;
`;

export const Icon = styled.img`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;

  :hover,
  :focus {
    transform: scale(1.2);
  }
`;

export const Image = styled.img`
  height: 274px;
  width: 274px;
  object-fit: cover;
  background: #fff url(${props => props.src}) no-repeat center;
  background-size: cover;
  border-radius: 12px;
`;

export const Text = styled.p`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 14px;
  margin-bottom: 8px;
  display: flex;
`;

export const Text2 = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 28px;
`;

export const Button = styled.button`
  padding: 14px 50px;
  background-color: #3470ff;
  color: white;
  border: none;
  border-radius: 12px;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  letter-spacing: 0em;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;

  :hover,
  :focus {
    background-color: #0b44cd;
    cursor: pointer;
  }
`;

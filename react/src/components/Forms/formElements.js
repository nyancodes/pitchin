import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 50px;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  width: 40vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  color: #ffffff;

  @media only screen and (max-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
`;

export const WelcomeText = styled.p`
  color: black;
  margin: 70px 0 50px 0;
  font-size: 50px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWith = styled.h5`
  cursor: pointer;
`;

export const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
`;

export const LoginLink = styled(Link)`
  color: black;
  font-weight: bold;
  font-size: 16px;
  width: 60%;
  text-align: center;
  text-decoration: none;
`;

export const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.15);
  width: 50%;
  height: 3rem;
  padding: 1rem;
  margin-top: 10px;
  border: 1px solid #e4e4e4;

  outline: none;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #e4e4e4;
    backdrop-filter: blur(12rem);
  }
  &::placeholder {
    /* color: #b9abe099; */
    font-weight: 100;
    font-size: 1rem;
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Button = styled.button`
  margin: 10px;
  background: #fff;
  color: #6c62ff;
  border: 1px solid #6c62ff;
  width: 50%;
  height: 3rem;
  cursor: pointer;
  font-size: 16px;
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

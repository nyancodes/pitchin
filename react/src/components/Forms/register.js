import NavBar from "../NavBar";
import { useState, useRef, React } from "react";
import Sidebar from "../Sidebar";
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  Input,
  ButtonContainer,
  Button,
  ForgotPassword,
  LoginLink,
} from "./formElements";

const Register = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <NavBar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MainContainer>
        <WelcomeText>Sign Up</WelcomeText>
        <InputContainer>
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
          <Input type="text" placeholder="Email address" />
          <Input type="password" placeholder="Password" />
        </InputContainer>
        <ButtonContainer>
          <Button>Sign Up for an account!</Button>
        </ButtonContainer>
        <LoginLink to="/login">Have an account? Click here to Login.</LoginLink>
      </MainContainer>
    </>
  );
};

export default Register;

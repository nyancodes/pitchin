import NavBar from "../NavBar";
import { useState, React } from "react";
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

const Login = (props) => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <NavBar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MainContainer>
        <WelcomeText>Sign In</WelcomeText>
        <InputContainer>
          <Input type="text" placeholder="Email address" />
          <Input type="password" placeholder="Password" />
        </InputContainer>
        <ButtonContainer>
          <Button>Sign in to PitchIn</Button>
        </ButtonContainer>
        <LoginLink to="/register">
          Need an account? Click here to Sign Up.
        </LoginLink>
      </MainContainer>
    </>
  );
};

export default Login;

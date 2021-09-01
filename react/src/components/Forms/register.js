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
  const fullNameInput = useRef(null);
  const emailAddressInput = useRef(null);
  const passwordInput = useRef(null);

  const submitRegistration = () => {

    console.log("register me");
    if(fullNameInput.current && fullNameInput.current.value &&
       emailAddressInput.current && emailAddressInput.current.value &&
       passwordInput.current && passwordInput.current.value) {
      console.log(fullNameInput.current.value);
      console.log(emailAddressInput.current.value);
      console.log(passwordInput.current.value);
    }


  }

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
          <Input ref={fullNameInput} type="text" placeholder="Full Name" />
          <Input ref={emailAddressInput} type="text" placeholder="Email address" />
          <Input ref={passwordInput} type="password" placeholder="Password" />
        </InputContainer>
        <ButtonContainer>
          <Button onClick={submitRegistration}>Sign Up for an account!</Button>
        </ButtonContainer>
        <LoginLink to="/login">Have an account? Click here to Login.</LoginLink>
      </MainContainer>
    </>
  );
};

export default Register;

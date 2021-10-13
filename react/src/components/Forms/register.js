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
  const firstNameInput = useRef(null);
  const lastNameInput = useRef(null);
  const emailAddressInput = useRef(null);
  const passwordInput = useRef(null);

  const submitRegistration = () => {
    if (
      (firstNameInput.current && firstNameInput.current.value,
      lastNameInput.current &&
        lastNameInput.current.value &&
        emailAddressInput.current &&
        emailAddressInput.current.value &&
        passwordInput.current &&
        passwordInput.current.value)
    ) {
      console.log(firstNameInput.current.value);
      console.log(lastNameInput.current.value);
      console.log(emailAddressInput.current.value);
      console.log(passwordInput.current.value);
    }
  };

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
          <Input ref={firstNameInput} type="text" placeholder="First Name" />
          <Input ref={lastNameInput} type="text" placeholder="Last Name" />

          <Input
            ref={emailAddressInput}
            type="text"
            placeholder="Email address"
          />
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

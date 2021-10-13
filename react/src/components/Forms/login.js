import NavBar from "../NavBar";
import { useState, React } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";

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

const Login = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  const initialState = {
    username: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    axios
      .post("/users/login", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
    setFormData(initialState);
  };

  return (
    <>
      <NavBar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MainContainer>
        <WelcomeText>Sign In</WelcomeText>
        <InputContainer>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <Input
              id="username"
              type="text"
              name="username"
              placeholder="username"
              value={formData.username}
              onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <Input
              type="email"
              placeholder="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <Input
              type="password"
              placeholder="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
          </form>
        </InputContainer>
        <ButtonContainer>
          <Button onClick={handleSubmit}> Sign in to PitchIn</Button>
        </ButtonContainer>
        <LoginLink to="/register">
          Need an account? Click here to Sign Up.
        </LoginLink>
      </MainContainer>
    </>
  );
};

export default Login;

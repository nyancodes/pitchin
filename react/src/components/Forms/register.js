import NavBar from "../NavBar";
import { useState, useRef, React } from "react";
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

const Register = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
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
    const { username, password, firstName, lastName, email } = formData;
    axios
      .post("/users/register", formData)
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

            <label htmlFor="password">Password</label>
            <Input
              type="password"
              placeholder="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />

            <label htmlFor="firstname">First Name</label>
            <Input
              type="text"
              placeholder="First Name"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />

            <label htmlFor="lastname">Last Name</label>
            <Input
              type="text"
              placeholder="Last Name"
              name="lastName"
              id="lastName"
              value={formData.lastName}
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

export default Register;

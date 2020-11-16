import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: url("https://images.unsplash.com/photo-1525923838299-2312b60f6d69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80");
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledText = styled.span`
  color: white;
`;

export default function Header() {
  return (
    <StyledDiv>
      <Link to="/">
        <StyledText>Home</StyledText>
      </Link>
      <Link to="/about">
        <StyledText>About</StyledText>
      </Link>
      <Link to="/register">
        <StyledText>Register</StyledText>
      </Link>
      <Link to="/login">
        <StyledText>Login</StyledText>
      </Link>
    </StyledDiv>
  );
}

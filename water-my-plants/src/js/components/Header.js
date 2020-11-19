import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { setLoggedStatus } from "../../actions";

const StyledDiv = styled.div`
  background-image: url("https://images.unsplash.com/photo-1525923838299-2312b60f6d69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80");
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledText = styled.span`
  color: white;
  text-shadow: 2px 2px black;
  font-size: 1.5rem;
`;

const StyledButton = styled.button`
  background-color: white;
  color: #006a4e;
  padding: 0.5rem;
  font-weight: bold;
  border-radius: 2%;
`;

function Header({ isLoggedIn, setLoggedStatus }) {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedStatus(false);
    history.push("/login");
  };
  
  return (
    <div>
      {isLoggedIn ? (
        <StyledDiv>
          <Link to="/dashboard">
            <StyledText>Dashboard</StyledText>
          </Link>
          <Link to="/add-plant">
            <StyledText>Add Plant</StyledText>
          </Link>
          <Link to="/account">
            <StyledText>Account</StyledText>
          </Link>
          <StyledButton onClick={handleLogout}>Logout</StyledButton>
        </StyledDiv>
      ) : (
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
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = {
  setLoggedStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

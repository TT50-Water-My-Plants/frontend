import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #222222;
`;

export default function Register(props) {
  const { onChange, formState, onSubmit, errorState } = props;

  return (
    <div>
      <StyledDiv>
        <h2>Registration form</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="username">
            Username: <br />
            <input
              id="username"
              type="text"
              name="username"
              data-cy="username"
              placeholder="Enter your username"
              onChange={onChange}
              value={formState.username}
            />
          </label>
          <br />
          <p data-cy="usernam-err">{errorState.username}</p>

          <label htmlFor="phone_number">
            Phone number:
            <br />
            <input
              id="phone_number"
              type="text"
              placeholder="Enter your phone #"
              data-cy="phone_number"
              name="phone_number"
              onChange={onChange}
              value={formState.phone_number}
            />
          </label>
          <br />
          <p data-cy="phone-err">{errorState.phone_number}</p>
          <label htmlFor="password">
            Password: <br />
            <input
              type="password"
              name="password"
              data-cy="password"
              id="password"
              placeholder="Create a password"
              value={formState.password}
              onChange={onChange}
            />
          </label>
          <p data-cy="password-err">{errorState.password}</p>

          <input type="submit" value="Click to submit" />
        </form>
      </StyledDiv>
    </div>
  );
}

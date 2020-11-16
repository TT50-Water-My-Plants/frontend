import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 80vh;
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  color: #222222;
`;

export default function Register(props) {
  const { onChange, formState, onSubmit, errorState } = props;

  return (
    <div>
      <StyledDiv>
        <form onSubmit={onSubmit}>
          <label htmlFor="username">
            Username: <br />
            <input
              id="username"
              type="text"
              name="username"
              data-cy="username"
              placeholder="Enter your username here"
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
              placeholder="Enter your phone number"
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
              value={formState.password}
              onChange={onChange}
            />
          </label>
          <p data-cy="password-err">{errorState.password}</p>
          {/* <label htmlFor="message">
            Your Message: <br />
            <textarea
              id="message"
              rows="10"
              cols="20"
              name="message"
              onChange={onChange}
              value={formState.message}
            />
          </label> */}
          <br />

          <input type="submit" value="Click to submit" />
        </form>
      </StyledDiv>
      {/* <div className="image-container">
       
      </div> */}
    </div>
  );
}

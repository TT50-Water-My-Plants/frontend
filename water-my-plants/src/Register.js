import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  color: #222222;
`;

export default function Register(props) {
  const { onChange, formState, onSubmit } = props;

  return (
    <div>
      <StyledDiv>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">
            Name: <br />
            <input
              type="text"
              name="name"
              data-cy="name"
              placeholder="Enter your name here"
              onChange={onChange}
              value={formState.name}
            />
          </label>
          <br />

          <label htmlFor="email">
            E-mail:
            <br />
            <input
              type="email"
              placeholder="Enter your e-mail"
              data-cy="email"
              name="email"
              onChange={onChange}
              value={formState.email}
            />
          </label>
          <br />
          <label htmlFor="message">
            Your Message: <br />
            <textarea
              rows="10"
              cols="20"
              name="message"
              onChange={onChange}
              value={formState.message}
            />
          </label>
          <br />
          <input type="submit" value="Click to submit" />
        </form>
      </StyledDiv>
    </div>
  );
}

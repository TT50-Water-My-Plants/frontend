import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80vh;
  align-items: center;
  width: 100%;
  color: #222222;
`;

const InnerDiv = styled.div`
  background-color: white;
  width: 35%;
  color: #006a4e;
  border: 3px solid black;
  border-radius: 5%;
  text-align: center;
`;

export default function Home(props) {
  return (
    <StyledDiv>
      <h1>What We Offer:</h1>
      <InnerDiv>
        <h2>Organize</h2>
        <p>
          Keep track of all your plants in one place, right from the dashboard.
        </p>
      </InnerDiv>
      <InnerDiv>
        <h2>Forget</h2>
        <p>We keep track of your watering history and remind you to water.</p>
      </InnerDiv>

      <InnerDiv>
        <h2>Record</h2>
        <p>Quickly record watering so you can get back to other tasks.</p>
      </InnerDiv>
    </StyledDiv>
  );
}

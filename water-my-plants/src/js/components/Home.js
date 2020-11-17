import React from "react";
import styled from "styled-components";
import plant from "../../images/plant.jpg";
import { useHistory } from "react-router-dom";

const StyledDiv = styled.div`
  height: 90vh;
  width: 100%;
  background-color: #b8d5cd;
  color: #fd7c50;
  text-shadow: 2px 2px white;
  display: flex;
  justify-content: center;
`;

const AboutDiv = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const InnerDiv = styled.div`
  background-color: white;
  width: 50%;
  color: #006a4e;
  border: 3px solid black;
  border-radius: 5%;
  text-align: center;
`;

const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  object-fit: contain;
`;

export default function Home(props) {
  const history = useHistory();
  function handleClick() {
    history.push("/register");
  }
  return (
    <div>
      <StyledDiv>
        <AboutDiv>
          <h1>What We Offer:</h1>
          <InnerDiv>
            <h2>Organize</h2>
            <p>
              Keep track of all your plants in one place, right from the
              dashboard.
            </p>
          </InnerDiv>

          <InnerDiv>
            <h2>Forget</h2>
            <p>
              We keep track of your watering history and remind you to water.
            </p>
          </InnerDiv>

          <InnerDiv>
            <h2>Record</h2>
            <p>Quickly record watering so you can get back to other tasks.</p>
          </InnerDiv>
          <InnerDiv>
            <h2>Register today!</h2>
            <button type="button" onClick={handleClick}>
              Register
            </button>
            <br />
            <br />
          </InnerDiv>
        </AboutDiv>
        <ImgDiv>
          <img width="500px" src={plant} alt="plant" />
        </ImgDiv>
      </StyledDiv>
    </div>
  );
}

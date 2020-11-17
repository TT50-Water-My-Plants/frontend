import Caroline from "../../images/Caroline.jpeg";
import Erica from "../../images/Erica.jpeg";
import James from "../../images/James.jpeg";
import Joon from "../../images/Joon.jpeg";
import Christina from "../../images/Christina.jpeg";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8abaae;
`;

const StyledImgDiv = styled.div`
  width: 40%;
  text-align: center;
  margin-top: 1%;
  margin-bottom: 2%;
  background-color: #b8d5cd;
  border-radius: 5%;
`;

const StyledImg = styled.img`
  width: 400px;
  height: auto;
  border-radius: 100%;
  margin-bottom: 1%;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
`;

export default function About() {
  return (
    <StyledDiv>
      <StyledTitle>Meet the Team</StyledTitle>
      <StyledImgDiv>
        <h2>Erica</h2>
        <h3>Backend Engineer</h3>
        <StyledImg src={Erica} alt="Erica" />
      </StyledImgDiv>
      <StyledImgDiv>
        <h2>Joon</h2>
        <h3>Backend Engineer</h3>
        <StyledImg src={Joon} alt="Erica" />
      </StyledImgDiv>
      <StyledImgDiv>
        <h2>James</h2>
        <h3>Engineer</h3>
        <StyledImg src={James} alt="Erica" />
      </StyledImgDiv>
      <StyledImgDiv>
        <h2>Caroline</h2>
        <h3>Engineer</h3>
        <StyledImg src={Caroline} alt="Erica" />
      </StyledImgDiv>
      <StyledImgDiv>
        <h2>Christina</h2>
        <h3>Frontend Engineer</h3>
        <StyledImg src={Christina} alt="Erica" />
      </StyledImgDiv>{" "}
    </StyledDiv>
  );
}

import React, { useEffect } from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import styled from "styled-components";

const Div = styled.div`
  background-color: #b8d5cd;
`;
const StyledDiv = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #b8d5cd;
`;

const StyledUsername = styled.div`
  width: 100%;
  height: 10vh;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
`;

const StyledPlantDiv = styled.div`
  width: 30%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5%;
  text-align: center;
  margin-top: 3%;
`;

const StyledParaTag = styled.p`
  font-size: 1.5rem;
`;

const StyledButtonDiv = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  background-color: #006a4e;
  color: white;
`;

function Dashboard({ user, userPlants, setUser, setUserPlants, setPlants }) {
  useEffect(() => {
    const id = localStorage.getItem("user_id");
    axiosWithAuth()
      .get(`/api/account/${id}`)
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosWithAuth()
      .get(`/api/plants/users/${id}`)
      .then((res) => {
        setUserPlants(res.data);
      });
    axiosWithAuth()
      .get(`/api/plants`)
      .then(res => {
        setPlants(res.data)
      })
  }, [setPlants, setUser, setUserPlants])

  return (
    <Div>
      <div>
        {user !== null ? (
          <StyledUsername>
            <StyledParaTag>Welcome back, {user.username}!</StyledParaTag>
            <br />
            <p>Phone Number: {user.phone_number}</p>
            <br />
            <p>{user.userId}</p>
            <br />
          </StyledUsername>
        ) : (
          <p>Loading ...</p>
        )}
        <StyledParaTag>Your Plants:</StyledParaTag>
      </div>

      <StyledDiv className='plants'>
        {userPlants.map((item) => {
          return (
            <StyledPlantDiv key={item.nickname}>
              <p>
                Nickname: {item.nickname} <br /> Species: {item.species} <br />
                Frequency: {item.h2o_frequency}
              </p>
              <StyledButtonDiv>
                <StyledButton>Edit</StyledButton>
                <StyledButton>Delete</StyledButton>
              </StyledButtonDiv>
            </StyledPlantDiv>
          );
        })}
      </StyledDiv>
    </Div>
  );
}

export default Dashboard;

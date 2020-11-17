import React, { useEffect } from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #b8d5cd;
`;

const StyledPlantDiv = styled.div`
  width: 30%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5%;
  text-align: center;
  margin-top: 3%;
`;

function Dashboard({ user, userPlants, setUser, setUserPlants, setPlants }) {
  console.log(user);
  useEffect(() => {
    const id = localStorage.getItem("user_id");
    axiosWithAuth()
      .get(`/api/account/${id}`)
      .then(res => {
        setUser(res.data.user);
      })
      .catch(err => {
        console.log(err);
      });

    axiosWithAuth()
      .get(`/api/plants/users/${id}`)
      .then(res => {
        setUserPlants(res.data);
      });
    axiosWithAuth()
      .get(`/api/plants`)
      .then(res => {
        setPlants(res.data);
      });
  }, []);

  return (
    <StyledDiv>
      {user !== null ? (
        <StyledPlantDiv>
          <p>{user.username}</p>
          <br />
          <p>{user.phone_number}</p>
          <br />
          <p>{user.userId}</p>
          <br />
        </StyledPlantDiv>
      ) : (
        <p>Loading ...</p>
      )}

      <StyledDiv className="plants">
        {userPlants.map(item => {
          return (
            <StyledPlantDiv key={item.nickname}>
              <p>
                Nickname: {item.nickname} <br /> Species: {item.species} <br />
                Frequency: {item.h2o_frequency}
              </p>
            </StyledPlantDiv>
          );
        })}
      </StyledDiv>
    </StyledDiv>
  );
}

export default Dashboard;

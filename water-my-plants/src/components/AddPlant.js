import React, { useState } from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  background-color: #b8d5cd;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.div`
  color: white;
  text-shadow: 2px 2px black;
  background-color: #006a4e;
  border-radius: 5%;
  width: 60%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  font-size: 1.4rem;
`;

function AddPlant({ user, plants, addPlant, setUserPlants }) {
  const [form, setForm] = useState({
    nickname: "",
    species: "",
    h2o_frequency: ""
  });

  const [selectValue, setSelectValue] = useState("--Plants--");

  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = e => {
    setStatusMsg("");
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const selectChange = e => {
    const { value, id } = e.target;
    setSelectValue(value);
  };

  const selectPlantSubmit = () => {
    console.log(parseInt(selectValue, 10), parseInt(user.id, 10));
    axiosWithAuth()
      .post(`api/plants/${selectValue}/users`, {
        plant_id: parseInt(selectValue, 10),
        user_id: parseInt(user.id, 10)
      })
      .then(res => {
        setUserPlants(res.data);
        setStatusMsg("Plant added!");
      });
  };

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/api/plants/users/${user.userId}`, form)
      .then(res => {
        addPlant(res.data);
        setForm({
          nickname: "",
          species: "",
          h2o_frequency: ""
        });
        setStatusMsg("New Plant Has Been Successfully Added!");
      })
      .catch(err => {
        setStatusMsg(
          "Sorry we were unable to add that plant, please try again."
        );
      });
  };
  return (
    <StyledDiv>
      <StyledForm onSubmit={onSubmit}>
        <div>
          <select value={selectValue} onChange={selectChange}>
            Plants
            {plants.map(plant => {
              return (
                <option key={plant.id} id={plant.id} value={plant.id}>
                  {plant.nickname}
                </option>
              );
            })}
          </select>
          <button onClick={selectPlantSubmit}>Add Plant</button>
        </div>
        <p>{statusMsg}</p>
        <div>
          <label htmlFor="nickname">
            Nickname:
            <br />
            <input
              type="text"
              name="nickname"
              id="nickname"
              value={form.nickname}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="species">
            Species:
            <br />
            <input
              type="text"
              name="species"
              id="species"
              value={form.species}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="h2o_frequency">
            H20 Frequency:
            <br />
            <input
              type="text"
              name="h2o_frequency"
              id="h2o_frequency"
              value={form.h2o_frequency}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />
        <button>Add Plant</button>
      </StyledForm>
    </StyledDiv>
  );
}

export default AddPlant;

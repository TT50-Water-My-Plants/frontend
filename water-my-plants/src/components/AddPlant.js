import React, { useState } from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import styled from "styled-components";
import schema from "./addPlantValidation";
import * as yup from "yup";

const StyledDiv = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  background-color: #b8d5cd;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  color: white;
  text-shadow: 2px 2px black;
  background-color: #006a4e;
  border-radius: 5%;
  width: 60%;
  padding: 2.5%;
  margin: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  font-size: 1.4rem;
`;

const StyledButton = styled.button`
  background-color: white;
  color: #006a4e;
  padding: 3px;
  border-radius: 2%;
`;

const StyledParaTag = styled.p`
  font-size: 0.75rem;
`;
function AddPlant({ user, plants, addPlant, setUserPlants }) {
  const [form, setForm] = useState({
    nickname: "",
    species: "",
    h2o_frequency: ""
  });

  const [selectValue, setSelectValue] = useState("--Plants--");
  const intialErrors = {
    nickname: "",
    species: "",
    h2o_frequency: ""
  };
  const [errorState, setErrorState] = useState(intialErrors);
  const [statusMsg, setStatusMsg] = useState("");

  const validate = event => {
    yup
      .reach(schema, event.target.name)
      .validate(event.target.value)
      .then(valid => {
        setErrorState({ ...errorState, [event.target.name]: "" });
      })
      .catch(err => {
        console.log(err);
        setErrorState({ ...errorState, [event.target.name]: err.errors[0] });
      });
  };

  const handleChange = e => {
    e.persist();
    validate(e);
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

  const selectPlantSubmit = (e) => {
    e.preventDefault()
    axiosWithAuth()
      .post(`api/plants/${selectValue}/users`, {
        plant_id: parseInt(selectValue, 10),
        user_id: parseInt(user.id, 10)
      })
      .then(res => {
        setUserPlants(res.data);
        setStatusMsg("Plant added!");
      })
      .catch(err => {
        console.log(err)
      })
  };

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/api/plants`, form)
      .then(res => {
        addPlant(res.data);
        setForm({
          nickname: "",
          species: "",
          h2o_frequency: ""
        });
        setStatusMsg("New Plant Has Been Added To The Dropdown List!");
      })
      .catch(err => {
        setStatusMsg(
          "Sorry we were unable to add that plant, please try again."
        );
      });
  };
  return (
    <StyledDiv>
      <StyledForm onSubmit={selectPlantSubmit}>
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
          <StyledButton>Add Plant</StyledButton>
          <p>{statusMsg}</p>
        </div>
      </StyledForm>
      <StyledForm onSubmit={onSubmit}>
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
          <StyledParaTag data-cy="nickname-err">
            {errorState.nickname}
          </StyledParaTag>
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
          <StyledParaTag data-cy="species-err">
            {errorState.species}
          </StyledParaTag>
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
          <StyledParaTag data-cy="h2o-err">
            {errorState.h2o_frequency}
          </StyledParaTag>
        </div>
        <br />
        <StyledButton>Add Plant</StyledButton>
      </StyledForm>
    </StyledDiv>
  );
}

export default AddPlant;

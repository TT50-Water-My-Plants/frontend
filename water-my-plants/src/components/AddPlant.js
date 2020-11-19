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

const StyledDropdownForm = styled.form`
  width: 30%;
  height: 10vh;
  background-color: #b8d5cd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  color: white;
  text-shadow: 2px 2px black;
  background-color: #006a4e;
  border-radius: 5%;
  width: 40%;
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
    h2o_frequency_day: "0",
    h2o_frequency_hour: "0"
  });

  const [selectValue, setSelectValue] = useState("--Plants--");
  const intialErrors = {
    nickname: "",
    species: "",
    h2o_frequency_day: "0",
    h2o_frequency_hour: "0"
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
    const { value } = e.target;
    setSelectValue(value);
  };

  const selectPlantSubmit = e => {
    e.preventDefault();
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
        console.log(err);
      });
  };

  const onSubmit = e => {
    e.preventDefault();
    const finalForm = {
      nickname: form.nickname,
      species: form.species,
      h2o_frequency: form.h2o_frequency_day === "0" ? `${form.h2o_frequency_hour} hours` : `${form.h2o_frequency_day} days ${form.h2o_frequency_hour} hours`
    }
    console.log(finalForm)
    axiosWithAuth()
      .post(`/api/plants`, finalForm)
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
      <StyledDropdownForm onSubmit={selectPlantSubmit}>
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
      </StyledDropdownForm>
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
          <div>
            <label>H20 Frequency:</label>
          </div>
          <select name="h2o_frequency_day" id="h2o_frequency_day" value={form.h2o_frequency_day} onChange={handleChange}>
            <option value="0">
              0 Days
            </option>
            <option value="1">
              1 Day
            </option>
            <option value="2">
              2 Days
            </option>
            <option value="3">
              3 Days
            </option>
            <option value="4">
              4 Days
            </option>
            <option value="5">
              5 Days
            </option>
            <option value="6">
              6 Days
            </option>
            <option value="7">
              7 Days
            </option>
            <option value="8">
              8 Days
            </option>
            <option value="9">
              9 Days
            </option>
            <option value="10">
              10 Days
            </option>
            <option value="11">
              11 Days
            </option>
            <option value="12">
              12 Days
            </option>
            <option value="13">
              13 Days
            </option>
            <option value="14">
              14 Days
            </option>

          </select>
          <select name="h2o_frequency_hour" id="h2o_frequency_hour" value={form.h2o_frequency_hour} onChange={handleChange}>
            <option value="0">
              0 Hours
            </option>
            <option value="1">
              1 Hours
            </option>
            <option value="2">
              2 Hours
            </option>
            <option value="3">
              3 Hours
            </option>
            <option value="4">
              4 Hours
            </option>
            <option value="5">
              5 Hours
            </option>
            <option value="6">
              6 Hours
            </option>
            <option value="7">
              7 Hours
            </option>
            <option value="8">
              8 Hours
            </option>
            <option value="9">
              9 Hours
            </option>
            <option value="10">
              10 Hours
            </option>
            <option value="11">
              11 Hours
            </option>
            <option value="12">
              12 Hours
            </option>
            <option value="13">
              13 Hours
            </option>
            <option value="14">
              14 Hours
            </option>
            <option value="15">
              15 Hours
            </option>
            <option value="16">
              16 Hours
            </option>
            <option value="17">
              17 Hours
            </option>
            <option value="18">
              18 Hours
            </option>
            <option value="19">
              19 Hours
            </option>
            <option value="20">
              20 Hours
            </option>
            <option value="21">
              21 Hours
            </option>
            <option value="22">
              22 Hours
            </option>
            <option value="23">
              23 Hours
            </option>
            <option value="24">
              24 Hours
            </option>
          </select>
          <StyledParaTag data-cy="h2o-err">
            {errorState.h2o_frequency_day}
            {errorState.h2o_frequency_hour}
          </StyledParaTag>
        </div>
        <br />
        <StyledButton>Add Plant</StyledButton>
      </StyledForm>
    </StyledDiv>
  );
}

export default AddPlant;

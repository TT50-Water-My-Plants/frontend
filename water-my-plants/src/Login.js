import React, { useState, useEffect } from "react";
import * as yup from "yup";

import loginFormSchema from "./js/utils/loginFormSchema";

import { axiosWithAuth } from "./js/utils/axiosWithAuth";
import { useHistory, Link } from "react-router-dom";

import styled from "styled-components";

const loginValues = {
  username: "",
  password: ""
};
const loginError = {
  username: "",
  password: ""
};
const initialDisabled = true;

const StyledLogin = styled.div`
  background-color: green;
  min-height: 80vh;
  width: 100%;
  display: flex;
`;

export default function Login() {
  const history = useHistory();
  const [disabled, setDisabled] = useState(initialDisabled);
  const [loginFormValues, setloginFormValues] = useState(loginValues);
  const [loginFormErrors, setloginFormErrors] = useState(loginError);

  const onChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    yup
      .reach(loginFormSchema, name)
      .validate(value)
      .then(valid => {
        setloginFormErrors({
          ...loginFormErrors,
          [name]: ""
        });
      })
      .catch(e => {
        setloginFormErrors({
          ...loginFormErrors,
          [name]: e.errors[0]
        });
      });
    setloginFormValues({
      ...loginFormValues,
      [name]: value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    localStorage.removeItem("token");
    const user = {
      username: loginFormValues.username.trim(),
      password: loginFormValues.password.trim()
    };
    axiosWithAuth()
      .post(
        "/login",
        `grant_type=password&username=${user.username}&password=${user.password}`,
        {
          headers: {
            Authorization: `Basic ${btoa("")}`,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.access_token);
        history.push("/");
      })
      .catch(e => {
        throw e;
      });
  };

  useEffect(() => {
    loginFormSchema.isValid(loginFormValues).then(valid => {
      setDisabled(!valid);
    });
  }, [loginFormValues]);

  useEffect(() => {
    console.log(loginFormValues);
  }, [loginFormValues]);

  return (
    <StyledLogin>
      <div>
        <form onSubmit={onSubmit}>
          <h1>Login</h1>

          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={loginFormValues.username}
              onChange={onChange}
            />
            <div className="error" style={{ color: "red" }}>
              {loginFormErrors.username}
            </div>
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginFormValues.password}
              onChange={onChange}
            />
            <div className="error" style={{ color: "red" }}>
              {loginFormErrors.password}
            </div>
          </div>

          <div>
            <button id="submit" className="disabled" disabled={disabled}>
              Submit
            </button>
          </div>

          <Link to="/register">
            Don't have an account? Click Here To Create One
          </Link>
        </form>
      </div>
    </StyledLogin>
  );
}

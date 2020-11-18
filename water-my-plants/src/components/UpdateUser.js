import { useState } from "react";
import { useHistory } from "react-router-dom";
// import * as yup from "yup";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import styled from "styled-components";

function UpdateUser({ user, setLoggedStatus}) {
  // const { user, setUser } = useContext(UserContext);
  const name = localStorage.getItem("username");
  const id = Number(localStorage.getItem("id"));
  let history = useHistory();

  const [updatedUser, setUpdatedUser] = useState({
    password: "",
    phone_number: user.phone_number,
  });

  const [err, setErr] = useState("");

  const handleChange = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    });
  };

  const updateAccount = (user) => {
    if (user.phone_number === "" || user.password === "") {
      setErr("Please fill out both of the fields.");
      return;
    } else if (
      user.phone_number.length !== 10 ||
      user.phone_number.match(/[^0-9]/gi, "")
    ) {
      setErr("Please enter a valid phone number.");
      return;
    } else if (user.password.length < 4 || user.password.length >= 32) {
      setErr("Your password must be between 4 and 32 characters.");
      return;
    }

    axiosWithAuth()
      .put(`/users/${id}`, user)
      .then((res) => {
        console.log(res);
        history.push(`/plants`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <div className='user-card'>
        <div className='card-avatar'></div>

        <div className='card-info'>
          <h3>Welcome {name},</h3>
          <p>What would you like to update?</p>
        </div>
      </div>

      <h4>Update Account:</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateAccount(updatedUser);
        }}>
        <input
          type='text'
          name='phone_number'
          placeholder='New Phone Number'
          value={updatedUser.phone_number}
          onChange={handleChange}
          autoComplete='off'
        />
        <input
          type='password'
          name='password'
          placeholder='New Password'
          value={updatedUser.password}
          onChange={handleChange}
          autoComplete='off'
        />
        <button type='submit'>Update Account</button>
      </form>
      {err && <div className='error'>{err}</div>}
    </Container>
  );
}

const Container = styled.div`
  width: 60%;

  .error {
    margin-top: 2rem;
    width: 100%;
    text-align: center;
    color: red;
    font-size: 1.4rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
  }

  h3 {
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: black;
  }

  h4 {
    margin: 5rem 0 2rem;
    font-size: 2.4rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
    color: #444444;
    padding-bottom: 1rem;
    border-bottom: 1px dotted #444444;
  }

  .user-card {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #d1ffd6;
    width: 100%;
    padding: 1.5rem 1rem;
    border-radius: 0.3rem;
    letter-spacing: 0.1rem;
    color: #444444;
    box-shadow: 0px 2px 5px -5px;

    .card-avatar {
      width: 25%;

      img {
        width: 100%;
        object-fit: cover;
        border: 1px solid #444444;
        border-radius: 50%;
      }
    }

    .card-info {
      width: 70%;
      padding-left: 1rem;

      h3 {
        font-size: 1.8rem;
        font-weight: 300;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.6rem;
        font-weight: 300;
      }

      .strong {
        font-weight: 700;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      margin: 1rem 0;
      width: 25rem;
      height: 3.5rem;
      background: #bfbfbf;
      border: none;
      border-radius: 0.3rem;
      padding: 0.5rem 0.5rem 0.5rem 1rem;
      font-size: 1.2rem;
      font-weight: 300;
      letter-spacing: 0.1rem;

      &:focus {
        outline: none;
        border: 1px solid #ababab;
      }
    }

    button {
      width: 20rem;
      height: 3.5rem;
      margin: 2rem 0 1rem;
      background: #d1ffd6;
      border: none;
      border-radius: 0.3rem;
      transition: all 100ms;
      box-shadow: 0px 2px 5px -5px;
      letter-spacing: 0.1rem;

      &:hover {
        transition: background 100ms;
        cursor: pointer;
        background: #afdeb4;
      }
    }
  }
`;

export default UpdateUser

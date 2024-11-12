import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios.js";
import { useStateValue } from "../StateProvider.js";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{}, dispatch] = useStateValue();

  const login = (e) => {
    e.preventDefault();

    axios
      .post("/auth/login", { email, password })
      .then((res) => {
        if (!res.data.error) {
          dispatch({
            type: "SET_USER",
            user: res.data,
          });

          localStorage.setItem("user", JSON.stringify(res.data));

          navigate("/");
        } else if (res.data.error) {
          alert(res.data.error);
        }
      })
      .catch((err) => console.warn(err));
  };

  return (
    <Container>
      <form onSubmit={login}>
        <h3 onClick={() => navigate("/")}>Quick Queue QR</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="example@example.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button type="submit">Log In</button>

        <div className="social" onClick={() => navigate("/signup")}>
          <div className="go">Create Account</div>
        </div>
      </form>
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #080710;
  background: url("./11.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 768px) {
    background: url("./13.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  form {
    width: 80%;
    max-width: 400px;
    background-color: rgba(255, 255, 255, 0.13);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
  }

  h3 {
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
    margin-bottom: 30px;
    cursor: pointer;
    color: white;
  }

  label {
    font-size: 16px;
    font-weight: 500;
    display: block;
    margin-bottom: 10px;
    color: white;
  }

  input {
    width: 100%;
    height: 50px;
    color: white;
    padding: 0 10px;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 300;
    border: 2px solid transparent;
    border-radius: 5px;
    transition: border-color 0.3s ease;
    background-color: rgba(255, 255, 255, 0.07);
  }

  input:focus {
    border-color: #fff;
    outline: none;
  }

  button {
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #f0f0f0;
  }

  .social {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }

  .social div {
    width: 200px;
    border-radius: 3px;
    padding: 5px 10px 10px 5px;
    background-color: rgba(255, 255, 255, 0.27);
    color: #eaf0fb;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .social div:hover {
    background-color: rgba(255, 255, 255, 0.47);
  }
`;

export default Login;

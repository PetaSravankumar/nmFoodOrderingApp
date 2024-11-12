import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />

        <title>Login Form</title>
      </Helmet>
      <Container>
        <form onSubmit={handleSubmit}>
          <h3 onClick={() => navigate("/")}>Quick Queue QR - Login Form</h3>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="example@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />

          <button type="submit">Log In</button>

          <div className="social">
            <div onClick={() => navigate("/register")}>Create Account</div>
            <div onClick={() => navigate("/forgot-password")}>
              Forgot Password
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

const Container = styled.div`
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
    margin-top: -3px;
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
    width: 180px;
    border-radius: 3px;
    padding: 5px 10px 10px 5px;
    background-color: rgba(255, 255, 255, 0.27);
    color: #eaf0fb;
    text-align: center;
    cursor: pointer;
    margin-left: 10px;
    transition: background-color 0.3s ease;
  }

  .social div:hover {
    background-color: rgba(255, 255, 255, 0.47);
  }
`;

export default Login;

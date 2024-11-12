import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import "../../styles/AuthStyles.css";
import styled from "styled-components";
import { useAuth } from "../../context/auth";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const [auth] = useAuth();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
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

        <title>Register Form</title>
      </Helmet>
      <Container>
        <section>
          <div class="form-box">
            <div class="form-value" style={{ marginTop: "-50px" }}>
              <form style={{ marginLeft: "15px" }} onSubmit={handleSubmit}>
                <h2 onClick={() => navigate("/")} className="mt-5">
                  Register Form
                </h2>
                <div class="inputbox">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoFocus
                  />
                  <label for="">Full Name</label>
                </div>

                <div class="inputbox">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label for="">Email</label>
                </div>
                <div class="inputbox">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label for="">Password</label>
                </div>
                <div class="inputbox">
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <label for="">Phone Number</label>
                </div>
                <div class="inputbox">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  <label for="">Address</label>
                </div>
                <div class="inputbox">
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    required
                  />
                  <label for="">Favorite Sport</label>
                </div>

                <button style={{ marginBottom: "10px" }}>Register</button>
              </form>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

const Container = styled.div`
  @media (max-width: 768px) {
    /* Change background for mobile devices */
    background: url("./pro12.png"); /* Specify the mobile background image */
    /* Specify the mobile background image */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  background-repeat: no-repeat;

  background: url("./pro12.png");

  background-position: center;
  background-size: cover;
  width: 100%;
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
  * {
    margin: 0;
    padding: 0;
    font-family: "poppins", sans-serif;
  }
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background: transparent;
  }
  .form-box {
    margin-top: 70px;
    position: relative;
    width: 400px;
    height: 650px;
    background: transparent;
    margin-bottom: 10px;
    border: 2px solid #00000042;
    border-radius: 20px;
    backdrop-filter: blur(15px);
    display: flex;
    justify-content: center;
    margin-top: 0px;
    align-items: center;
    background: transparent;
  }

  h2 {
    font-size: 2em;
    color: black;
    text-align: center;
    cursor: pointer;
  }
  .inputbox {
    position: relative;
    margin: 30px 0;
    width: 310px;
    border-bottom: 2px solid black;
    background: transparent;
  }
  .inputbox label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    color: black;
    font-weight: 500;
    font-size: 1.4;
    pointer-events: none;
    transition: 0.5s;
  }
  input:focus ~ label,
  input:valid ~ label {
    top: -5px;
  }
  .inputbox input {
    width: 100%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    padding: 0 35px 0 5px;
    color: black;
  }
  .inputbox ion-icon {
    position: absolute;
    right: 8px;
    color: black;
    font-size: 1.2em;
    top: 20px;
  }
  .forget {
    margin: -15px 0 15px;
    font-size: 0.9em;
    color: #fff;
    display: flex;
    justify-content: space-between;
  }

  .forget label input {
    margin-right: 3px;
  }
  .forget label a {
    color: #fff;
    text-decoration: none;
  }
  .forget label a:hover {
    text-decoration: underline;
  }
  button {
    width: 100%;
    height: 40px;
    border-radius: 40px;
    background: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
  }
  .register {
    font-size: 1.5em;
    color: black;

    text-align: center;
    margin: 25px 0 10px;
  }
  .register p a {
    text-decoration: none;
    color: #fff;
    font-weight: 600;
  }
  .register p a:hover {
    text-decoration: underline;
  }
`;

export default Register;

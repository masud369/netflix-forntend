import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Backgroundimage } from "../Components/Backgroundimage";
import Header from "../Components/Header";
import { firebaseAuth } from "../Utils/firbase-config";

const Login = () => {
  const [checkemail, setCheckemail] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handeLogin = async () => {
    try {
      const { email, password } = checkemail;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      navigate("/");
    }
  });
  return (
    <Container>
      <Backgroundimage />
      <div className="content">
        <Header />
        <div className="form-container flex colmun a-center j-center">
          <div className="form flex colmun a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex colmun">
              <input
                type="email"
                name="email"
                placeholder="Email Adress"
                required
                value={checkemail.email}
                onChange={(e) => {
                  setCheckemail({
                    ...checkemail,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={checkemail.password}
                onChange={(e) => {
                  setCheckemail({
                    ...checkemail,
                    [e.target.name]: e.target.value,
                  });
                }}
              />

              <button onClick={handeLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button {
              padding: 0.5rem 1rem;
              background-color: #e50914;
              border: none;
              cursor: pointer;
              color: white;
              border-radius: 0.2rem;
              font-weight: bolder;
              font-size: 1.05rem;
            }
          
        }
      }
    }
  }
`;

export default Login;

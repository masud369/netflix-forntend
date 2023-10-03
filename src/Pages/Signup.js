import React, { useState } from "react";
import styled from "styled-components";
import { Backgroundimage } from "../Components/Backgroundimage";
import Header from "../Components/Header";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../Utils/firbase-config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [checkemail, setCheckemail] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handelSignIn = async () => {
    try {
      const { email, password } = checkemail;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
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
    <Container showPassword={showPassword}>
      <Backgroundimage />
      <div className="content">
        <Header login />
        <div className="body flex colmun a-center j-center">
          <div className="text flex colmun">
            <h3 className="white">
              Unlimited Movies,TV <br /> Shows and more
            </h3>
            <h6>Watch Anywher, Cancel Anytime</h6>
            <p>
              Ready to watch? Enter your e-mail to create or restart membership
            </p>
          </div>
          <div className="form">
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
            {showPassword && (
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
            )}
            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Startd</button>
            )}
          </div>
          <button onClick={handelSignIn}>Sign Up</button>
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
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2.5rem;
        h6 {
          padding: 0 0.5rem;
        }
        p {
          font-size: 1.5rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
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
`;

export default Signup;

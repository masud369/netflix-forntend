import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../media/logo.png";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="flex a-center j-between">
        <div className="logo">
          <Link to="/"><img src={logo} alt="logo" /></Link>
          
        </div>

        <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
          {props.login ? "Login" : "Sign Up"}
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 4rem;
  .logo {
    img {
      height: 5rem;
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
`;

export default Header;

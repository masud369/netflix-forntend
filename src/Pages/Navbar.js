import React, { useState } from "react";
import styled from "styled-components";
import logo from "../media/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaPowerOff } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../Utils/firbase-config";

const Navbar = ({ isScorrled }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  const links = [
    { name: "Home", id: 1, url: "/" },
    { name: "TV Shows", id: 2, url: "/tv" },
    { name: "Movies", id: 3, url: "/movie" },
    { name: "My List", id: 4, url: "/mylist" },
  ];
  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) {
      navigate("/login");
    }
  });
  return (
    <Container>
      <nav className={`flex ${isScorrled ? "scrolled" : ""}`}>
        <div className="left flex a-container">
          <div className="brand flex a-center j-center">
            <img src={logo} alt="" />
          </div>
          <div className="links flex a-center j-center">
            {links.map(({ name, id, url }) => {
              return (
                <li key={id}>
                  <Link to={url}> {name}</Link>{" "}
                </li>
              );
            })}
          </div>
        </div>
        <div className="right flex a-center">
          <div className={`search ${showSearch ? "show-search" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) setShowSearch(false);
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
            
          </div>
          <button
              onClick={() => {
                signOut(firebaseAuth);
              }}
            >
              <FaPowerOff />
            </button>
        </div>
      </nav>
    </Container>
  );
};

const Container = styled.div`
//   .scrolled {
//     background-color: black;
//   }
//   nav {
//     position: sticky;
//     top: 0;
//     height: 6.5rem;
//    
//   }
  .scrolled {
    background-color: black;
  }
  nav {
    position: sticky;
    top: 0;
    height: 6.5rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .left {
       gap: 2rem;
       .brand {
         img {
           height: 4rem;
         }
       }
      .links{
        gap:2rem;
        li{
            list-style-type:none;
            a{
                text-decoration:none;
                color:white;
            }
        }
      } 
    }
    .right{
        gap:1rm;
        button{
            background-color:transparent;
            border:none;
            cursor:pointer;
            &:focuse{
                outline:none;
            }
            svg{
                color:#f34242;
                font-size:1.2rem;
            }
        }
        .search{
            display:flex;
            justify-content:center;
            align-items:center;
            gap:0.4rem;
            padding:0.2rem;
            padding-left:0.5rem;
            button{
                background-color:transparent;
            }
            svg{
                color:white;
            }
            input{
                width:0;
                visibility:hidden;
                opacity:0;
                background:transparent;
                color:white;
                border:none;
                transition:0.3s ease-in-out;
                &:focuse{
                    outline:none;
                }
            }
        }
        .show-search{
            border:1px solid white;
            background-color:rgba(0,0,0,0,6);
            input{
                outline:none;
                width:100%;
                visibility:visible;
                opacity:1;
                padding:0.3rem;
            }
        }
    }
`;
export default Navbar;

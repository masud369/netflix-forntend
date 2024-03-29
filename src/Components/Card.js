import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import video from "../media/Coffee B-roll inspired by Daniel Schiffer.mp4";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../Utils/firbase-config";

const Card = ({ movieData, isLiked = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/login");
  });
// console.log(movieData)
  const addToList = () => {
    fetch("https://netflix-2z28.onrender.com/abc", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, data: movieData }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
const removeFromList = (movieId)=>{
  console.log(movieId)
  fetch(`https://netflix-2z28.onrender.com/delete?mid=${movieId}`, { method: 'DELETE' })
        .then(() => this.setState({ status: 'Delete successful' }));
}
// console.log(movieData)
  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="movieData"
      />
      {isHovered && (
        <div className="hover">
          <div className="image-video-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData}`}
              alt="moviData"
              onClick={() => navigate("/player")}
            />
            <video
              src={video}
              autoPlay
              loop
              muted
              onClick={() => navigate("/player")}
            />
          </div>
          <div className="info-container flex colmun">
            <h3 className="name" onClick={() => navigate("/player")}>
              {movieData.name}
            </h3>
            <div className="icons flex j-between">
              <div className="controls flex">
                <IoPlayCircleSharp
                  title="Play"
                  onClick={() => navigate("/player")}
                />
                <RiThumbDownFill title="Like" />
                {isLiked ? (
                  <BsCheck title="Remove From List" onClick={()=>removeFromList(movieData.id)}/>
                ) : (
                  <AiOutlinePlus title=" Add To My list" onClick={addToList} />
                )}
              </div>
              <div className="info">
                <BiChevronDown title="More Info" />
              </div>
              <div className="genres flex">
                <ul className="flex">
                  {movieData.genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
    max-width:230px;
    width:230px;
    height:100%;
    cursor:pointer;
    position:relative;
    img{
        border-radius:0.2rem;
        width:100%;
        height:100%;
        z-index:10;
    }
    .hover{
        z-index:90;
        height:max-content;
        width:20rem;
        position:absolute;
        top:-18vh;
        left:0;
        border-radius:0.3rem;
        box-shadow: rgba(0,0,0,0.75) 0px 3px 10px;
        background-color:#181818;
        transition:0.3s ease-inout;
        .image-video-container {
            position: relative;
            height: 140px;
            img {
              width: 100%;
              height: 140px;
              object-fit: cover;
              border-radius: 0.3rem;
              top: 0;
              z-index: 4;
              position: absolute;
            }
            video {
              width: 100%;
              height: 140px;
              object-fit: cover;
              border-radius: 0.3rem;
              top: 0;
              z-index: 5;
              position: absolute;
            }
        }
        .info-container {
            padding: 1rem;
            gap: 0.5rem;
          }
          .icons {
            .controls {
              display: flex;
              gap: 1rem;
            }
            svg {
              font-size: 2rem;
              cursor: pointer;
              transition: 0.3s ease-in-out;
              &:hover {
                color: #b8b8b8;
              }
            }
          }
          .genres {
            ul {
              gap: 1rem;
              li {
                padding-right: 0.7rem;
                &:first-of-type {
                  list-style-type: none;
                }
              }
            }
          }
`;

export default Card;

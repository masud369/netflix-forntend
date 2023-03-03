import React from 'react';
import styled from 'styled-components';
import video from '../media/Coffee B-roll inspired by Daniel Schiffer.mp4';
import {BsArrowLeft} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Player = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <div className="player"> 
                <div className="back">
                    <BsArrowLeft onClick={()=>navigate(-1)}/>
                </div>
                <video src={video} autoPlay controls muted loop></video>
            </div>
        </Container>
    );
};

const Container = styled.div`
    .player{
        height:100vh;
        width:100vw;
        .back{
            position:absolute;
            padding:2rem;
            z-index:1;
            svg{
                cursor:pointer;
                font-size:3rem;
            }
        }
        video{
            width:100%;
            height:100%;
            object-fit:cover;
        }
    }
`;

export default Player;
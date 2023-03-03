import React from 'react';
import styled from "styled-components";

import bgImage from '../media/login.jpg';

export const Backgroundimage = () => {
    return (
        <Container>
           <img src={bgImage} alt="bgImage" />
        </Container>
    );
};

const Container = styled.div`
    width:100vw;
    height:100vh;
    img{
        width:100vw;
        height:100vh;
    }
`;

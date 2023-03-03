import React from "react";
import styled from "styled-components";
import Card from "./Card";

const TothemyList = ({ movie }) => {

  return (
    <Container>
      <div className="flex slider">
        {movie.map((m) => (
          <Card movieData={m} isLiked={true} key={m.id} />
        ))}
      </div>
    </Container>
  );
};
const Container = styled.div`
  .slider {
    width: max-content;
    gap: 1rem;
    transform: translateX(0px);
    transition: 0.3s ease-in-out;
    margin-left: 50px;
    margin-top: 10%;
  }
`;
export default TothemyList;

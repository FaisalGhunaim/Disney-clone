import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectOriginal } from "../featuers/movie/movieSlice";
import { useSelector } from "react-redux";
const Originals = () => {
  const originalSection = useSelector(selectOriginal);
  return (
    <Container>
      <h4>Originals</h4>
      <Content>
        {originalSection &&
          originalSection.map((movie, key) => (
            <Wrap key={key}>
              {originalSection.id}

              <Link to={"/detail/" + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};
const Container = styled.div`
  padding: 0 0 26px;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56%;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  position: relative;
  border-radius: 10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    position: absolute;
    inset: 0;
    object-fit: contain;
    height: 100%;
    opacity: 1;
    top: 0;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
  }

  &:hover {
    box-shadow: rgb(0 0 0/80%) 0px 40px 58px -16px,
      rgb(0 0 0/72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
export default Originals;

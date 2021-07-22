import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
const Game = ({ name, released, image, id }) => {
  const stringID = id.toString();
  //Load Details of game on click
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetails(id));
  };

  return (
    <StyledGame layoutId={stringID} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringID}`}>{name}</motion.h3>
        <p>{released}</p>

        <motion.img
          layoutId={`Image ${stringID}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  text-align: center;
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
  @media (max-width: 900px) {
    min-height: 20vh;
  }
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    @media (max-width: 900px) {
      height: 30vh;
    }
  }
`;
export default Game;

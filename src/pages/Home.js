import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
const Home = () => {
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];
  const dispach = useDispatch();
  useEffect(() => {
    dispach(loadGames());
  }, [dispach]);

  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathID && <GameDetail pathID={pathID} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched:</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  id={game.id}
                  released={game.released}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming Games:</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              id={game.id}
              released={game.released}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular:</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              id={game.id}
              released={game.released}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games:</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              id={game.id}
              released={game.released}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  @media (max-width: 900px) {
    padding: 0rem 3rem;
  }
  h2 {
    padding: 5rem 0rem;
    @media (max-width: 900px) {
      padding: 2rem 0rem;
    }
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  @media (max-width: 900px) {
    min-height: 70vh;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
  }
`;
export default Home;

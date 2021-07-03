import axios from "axios";

import { popularGamesURL, upcomingGamesURL, newGamesURl } from "../api";
//Action Creeator

export const loadGames = () => async (dispach) => {
  // fetch axios

  const popularData = await axios.get(popularGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURl());
  dispach({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

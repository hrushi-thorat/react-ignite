import axios from "axios";

import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURl,
  searchGameURL,
} from "../api";
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
export const fetchSearch = (game_name) => async (dispach) => {
  const searchGames = await axios.get(searchGameURL(game_name));
  dispach({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};

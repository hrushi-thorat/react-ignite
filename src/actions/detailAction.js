import axios from "axios";
import { gameDetailURL, gameScreenshotURL } from "../api";
export const loadDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAILS",
  });

  const detailData = await axios.get(gameDetailURL(id));
  const screenShotData = await axios.get(gameScreenshotURL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};

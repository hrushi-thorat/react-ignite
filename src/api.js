const base_url = "https://api.rawg.io/api/";
const api_key = "&key=85e23c484944429da83905c969cd7a34&";
const api_key_detail = "?key=85e23c484944429da83905c969cd7a34&";
//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
// url
export const popularGamesURL = () => `${base_url}${popular_games}${api_key}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}${api_key}`;
export const newGamesURl = () => `${base_url}${newGames}${api_key}`;
//Gmae Details
export const gameDetailURL = (game_id) =>
  `${base_url}games/${game_id}${api_key_detail}`;
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots${api_key_detail}`;

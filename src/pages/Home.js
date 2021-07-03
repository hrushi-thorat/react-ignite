
import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";

const Home=()=>{
    const dispach=useDispatch();
    useEffect(()=>{
      dispach(loadGames())
    })
return(
    <div>
        <h1>hii</h1>
    </div>
)

}

export default Home
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useSelector } from "react-redux"
import { smallImage } from "../util"
import { useHistory } from "react-router-dom"
import playstation from '../img/playstation.svg'
import nintendo from '../img/nintendo.svg'
import xbox from '../img/xbox.svg'
import steam from '../img/steam.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'



const GameDetail=({pathID})=>{
    const history=useHistory();
const {screen,game,isLoading}=useSelector((state)=>state.detail)


//exit function
const exitDetailHandler=(e)=>{
    const element=e.target;
    if(element.classList.contains("shadow")){
        document.body.style.overflow="auto"
        history.push("/")
    }
}

//platform icon handler 
const getPlatform= (platform) =>{
    switch(platform){
        case ("PlayStation 5"):
            return playstation;
        case("Xbox One"):
        return xbox;
        case("Pc"):
        return steam;
        case("Nintendo Switch"):
        return nintendo;
        case("iOS"):
        return apple;
        default:
            return gamepad;
    }
}

return(
    <>
    {!isLoading && ( 
<CardShadowStyle className="shadow" onClick={exitDetailHandler}>
<DetailStyle layoutId={pathID}>
    <Stats>
        <div className="rating">
            <h3 layoutId={`title ${pathID}`}>{game.name}</h3>
            <p>Rating:{game.rating}</p>
        </div>
        <Info>
            <h3>Platform</h3>
            <Platforms>
                {game.platforms.map(data =>(
                
                    <img 
                    alt="game platform icons" key={data.platform.id} src={getPlatform(data.platform.name)}></img>
                ))}
            </Platforms>
        </Info>
    </Stats>
    <MediaStyle>
        <img pathID={`Image ${pathID}`} src={smallImage(game.background_image,1280)} alt="backgrouns" />
    </MediaStyle>
    <DescriptiionStyle>
        <p>{game.description_raw}</p>
    </DescriptiionStyle>
    <div className="gallery">
        {screen.results.map(screen=>(
            <img src={smallImage(screen.image,1280)} alt="/" key={screen.id} />
        ))}
    </div>
</DetailStyle>


</CardShadowStyle>
)}
</>
)


}

const CardShadowStyle=styled(motion.div)`
width: 100%;
height: 100vh;
overflow-y: scroll;
background: rgba(0,0,0,0.5);
position: fixed;
cursor: pointer;
z-index:5;
top: 0;
left: 0;
&::-webkit-scrollbar{
    width: 0.5rem;
}
&::-webkit-scrollbar-thumb{
    background: #ff7676;
}
&::-webkit-scrollbar-track{
    background: white;
}
`
const DetailStyle=styled(motion.div)`
width: 80%;
border-radius: 1rem;
padding: 2rem 4rem;
background: white;
position: absolute;
left: 10%;
z-index:10;
color: black;
img{
    width: 100%;
}
`
const Stats=styled(motion.div)`
display: flex;
align-items: center;
justify-content: space-between;
`

const Info=styled(motion.div)`
text-align: center;
`

const Platforms=styled(motion.div)`
display: flex;
justify-content: space-evenly;
img{
    margin-left: 3rem;
}
`

const MediaStyle=styled(motion.div)`
margin-top: 4rem;
overflow:hidden;
img{
    border-radius: 1rem;
    width: 100%;
}
`
const DescriptiionStyle=styled(motion.div)`
padding: 3rem 0rem;
`
export default GameDetail
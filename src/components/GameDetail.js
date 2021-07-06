import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"


const GameDetail=()=>{
    const history=useHistory();
const {screen,game,isLoading}=useSelector((state)=>state.detail)
const exitDetailHandler=(e)=>{
    const element=e.target;
    if(element.classList.contains("shadow")){
        document.body.style.overflow="auto"
        history.push("/")
    }
}
return(
    <>
    {!isLoading && ( 
<CardShadowStyle className="shadow" onClick={exitDetailHandler}>
<DetailStyle>
    <Stats>
        <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating:{game.rating}</p>
        </div>
        <Info>
            <h3>Platform</h3>
            <Platforms>
                {game.platforms.map(data =>(
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                ))}
            </Platforms>
        </Info>
    </Stats>
    <MediaStyle>
        <img src={game.background_image} alt="backgrouns" />
    </MediaStyle>
    <DescriptiionStyle>
        <p>{game.description_raw}</p>
    </DescriptiionStyle>
    <div className="gallery">
        {screen.results.map(screen=>(
            <img src={screen.image} alt="/" key={screen.id} />
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
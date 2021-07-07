import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg"

const Nav=()=>{

return(
<StyledNav>
<Logo>
    <img src={logo} alt="logo"  />
    <h1>Ignite</h1>
</Logo>
<div className="search">
    <input type="text" />
<button>Search</button>
</div>

</StyledNav>


)

}

const StyledNav=styled(motion.nav)`
padding: 3rem 5rem ;
text-align: center;
input{
    width: 30%;
    font-size: 1.3rem;
    padding: 0.5rem;
    border: none;
    margin-top:3rem ;
    box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
   border-radius: 0.8rem;
}
button{
    border: none;
    font-size: 1.3rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
background: #ff7676;
color: white;
border-radius: 0.8rem;
margin-left: 1rem;
outline: none;
}
`
const Logo=styled(motion.div)`
display: flex;
align-items: center;
justify-content: center;
padding: 1rem;
cursor: pointer;
h1{
    font-size: 2rem;
}
img{
    height: 2rem;
    width: 2rem;
}
`
export default Nav;
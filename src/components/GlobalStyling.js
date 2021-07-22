import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background: darkgray;
    }

}
body{
    font-family: 'Montserrat', sans-serif;;
    width: 100%;
    h2{
        font-size: 2.5rem;
        font-family: 'Abril Fatface', cursive;;
        font-weight: lighter;
        color: #333;
        @media (max-width: 900px) {
    font-size: 1.5rem;
  }

    }
    h3{
        font-size: 1.2rem;
        color: #333;
        padding: 1.4rem 0rem;
        @media (max-width: 900px) {
    font-size: 0.8rem;
    padding: 1rem 0rem;
  }
    }
    p{
        font-size: 1rem;
        line-height: 200%;
        color: #696969;
        font-weight: 400;
        @media (max-width: 900px) {
    font-size: 0.8rem;
    line-height: 180%;
  }
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
  
}
input{
        font-weight: bold;
    font-family: "Montserrat",sans-serif;
    }
`;

export default GlobalStyle;

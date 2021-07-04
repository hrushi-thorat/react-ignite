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

    }
    h3{
        font-size: 1.2rem;
        color: #333;
        padding: 1.4rem;
    }
    p{
        font-size: 1rem;
        line-height: 200%;
        color: #696969;
        font-weight: 400;
    }
    a{
        text-decoration: none;
        color: #333;
    }
}
`;

export default GlobalStyle;
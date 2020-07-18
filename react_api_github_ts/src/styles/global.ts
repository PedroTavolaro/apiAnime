import { createGlobalStyle } from 'styled-components';
//import pokemonbg from '../assets/pokemon3.jpg';
import animeBackground from '../assets/tobi.png'

export default createGlobalStyle`
*{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
      background: #f0f0f5 url(${animeBackground}) no-repeat 180% ;
      -webkit-font-smoothing: antialiased;

    }

    img{
      opacity : 1
    }

    body, input, button {
      font: 16px Roboto, sans-serif;
    }

    #root {
      max-width: 960px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    button{
      cursor: pointer;
    }

    `;



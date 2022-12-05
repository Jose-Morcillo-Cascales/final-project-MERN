import styled, { createGlobalStyle } from "styled-components";
import { color, device } from "./utils/styleConstants";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    HTML, body, #root{
        height: 100vh;
        width: 100vw;
        background-color: ${color.primaryBlack};
        font-family: 'Roboto', sans-serif;
        color: ${color.primaryWhite};
    }
`
export const GridStyle = styled.div`
    display: grid; 
    height: 100%;
    grid-template-rows: 1fr 50px; // Grid for Mobile
    
    @media ${device.desktop}{
        height: 100%;
        grid-template: 60px 1fr 50px / 300px 5fr; // Grid for desktop
    };  
`
export const Header = styled.header`
    display: none; 
    @media ${device.desktop} {
        grid-column: 1;
        grid-row: 1;
        width: 100%;
        height: 100%;
        display: block;
    }
`

export const Main = styled.main`
    grid-row: 1;
    @media ${device.desktop}{
        grid-column: 2;
        grid-row: 1 / span 2;
        width: 100%;
        height: 100%;
    }
`

export const Footer = styled.footer`
    display: none; 
    @media ${device.desktop}{
        width: 100%;
        height: 100%;
        display: block;
    }
`

export const Aside = styled.aside`
    width: 100%;
    height: 50px;
    grid-row: 2; 
    position: fixed;
    bottom: 0;
    background-color: #121212aa;
    @media ${device.desktop}{
        width: 300px;
        height: 100%;
        grid-column: 1;
        grid-row: 2;
    }
`

// Global styled tags (img, ol, ul, li...)

export const ButtonPrimaryStyle = styled.button`
    background-color: ${color.primaryYellow};
    color: ${color.primaryBlack};
    height: 40px;
    width: 250px;
    border: none;
    font-weight: bold;
    font-size: 18px;
    border-radius: calc(40px * .5);
`
export const ButtonSecondaryStyle = styled.button`
    background: none;
    color: ${color.primaryYellow};
    height: 40px;
    width: 150px;
    font-weight: bold;
    border: 3px solid ${color.primaryYellow};
    border-radius: calc(40px * .5);
    font-size: 10px;
    
`
export const ImgLogoM = styled.img`
    object-fit: contain;
    height: 60px;
`
export const ImgLogoS = styled.img`
    object-fit: contain;
    height: 30px;
`

export const H2Style = styled.h2`
    color: ${color.primaryYellow};
    font-size: 20px;
    font-weight:bold;
`

export const InputStyle = styled.input`
    background-color: ${color.primaryWhite};
    height: 40px;
    width: 250px;
    border: none;
    font-size: 18px;
    border-radius: calc(40px * .5);
`

export const PErrorStyle = styled.p`
    color: ${color.primaryError};
    font-size: 10px;
`

/* DIVS IMAGE ALBUMS, TRACKS, USERS,... */
/* CIRCLE */
export const DivImgCircleL = styled.div`
    width:110px;
    height:110px;
    border-radius: 50%;
    @media ${device.desktop}{
        width: 200px;
        height: 200px;
        border-radius: 50%;
    } 
`

export const DivImgCircleM = styled.div`
    width:70px;
    height:70px;
    border-radius: 50%;
    @media ${device.desktop}{
        width: 130px;
        height: 130px;
        border-radius: 50%;
    }
`

export const DivImgCircleS = styled.div`
    width:30px;
    height:30px;
    border-radius: 50%;
    @media ${device.desktop}{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }    
`

/* SQUARE */
export const DivImgSquareL = styled.div`
    width: 250px;
    height: 250px;
    border-radius: calc(250px * .04);
    @media ${device.desktop}{
        width: 400px;
        heigth: 400px;
        border-radius: 10px;
    }
`
export const DivImgSquareM = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 10px;
    @media ${device.desktop}{
        width: 200px;
        heigth: 200px;
        border-radius: 10px;
    }
`
export const DivImgSquareS = styled.div`
    width: 135px;
    height: 135px;
    border-radius: 10px;
    @media ${device.desktop}{
        width: 100px;
        heigth: 100px;
        border-radius: 10px;
    }
`

/* BANNER CONTAINER FULL-WIDTH */
export const DivImgBannerSliderHome =styled.div`
    width:100%;
    height: 500px;
`

/* RECTANGLE */
export const DivImgRectangleL = styled.div`
    @media ${device.desktop}{
        width: 400px;
        heigth: 250px;
        border-radius: 10px;
    }
`
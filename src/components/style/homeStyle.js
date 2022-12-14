import styled from "styled-components";
import { color, device } from "./utils/styleConstants";
import { ButtonSecondaryStyle, LinkSecondaryStyle } from "../style/generalStyle"
import { Link } from "react-router-dom";

//TODO: START GENERIC STYLES */
export const MainStyle = styled.main`
    padding: 20px 20px 40px 20px;
    width: 100%;
    @media ${device.desktop}{
        padding: 0 0 40px 0;
    } 
`

export const PTitle = styled.p`
    font-size:.8rem;
    font-weight:700;
    @media ${device.desktop}{
        font-size:1rem;
    }
`

export const PDescription = styled.p`
    font-size:.6rem;
    @media ${device.desktop}{
        font-size:.87rem;
    }
`

export const ButtonLogoutStyle = styled(ButtonSecondaryStyle)`
    margin-left: 20px;
    width: 110px;
    height: 30px;
`
/* END GENERAL STYLES */

/* DESKTOP DIV HERO & WELCOME*/
export const DivHero = styled.div`
    margin: -20px -20px 0;
    /* display: block;  */
`

export const DivWelcomingHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`

export const H1Welcome = styled.h1`
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${device.desktop}{
        font-size: 30px;
    } 
`

/* BUTTONS NAV HOME MOBILE  */
export const NavHomeMobile = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    gap:10px;
    @media ${device.desktop}{
        display: none; 
    } 
`
export const BtnAction = styled(ButtonSecondaryStyle)`
    width:50%;
`

/* SLIDERS */
export const DivSliders = styled.div`
    flex-grow: 1;
    overflow-y: auto;
`
export const DivContainerSlider = styled.div`
    align-items: space-around;
`
export const DivSilderHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 20px 10px 0;
`

export const LinkViewMore = styled(LinkSecondaryStyle)`
    font-size: 14px;
`

export const DivSliderBody = styled.div`
    display: flex;
    width: calc(100vw - 40px);
    overflow: auto;
    gap:10px;
    @media ${device.desktop}{
        width: calc(100vw - 206px);
        &::-webkit-scrollbar {
            cursor: pointer;
            width: 6px;
            height: 6px;
        }
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background: #3D3D3D77;
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background: #353535;
        }
        &::-webkit-scrollbar-thumb:hover{
            background: ${color.secondaryBlack};
        }
        &::-webkit-scrollbar-thumb:active{
            background: #484848;
        }
    }
`

/* START STYLE EVENT CARD */
export const DivEventCard = styled.div`
    width: 280px;
    margin-bottom:5px;
    @media ${device.desktop}{
        margin-bottom:5px;
        min-width: 420px;
        height: 300px;
    } 
`
export const DivEventInfo = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 5px;
`

export const PEventPrice = styled.p`
    color: ${color.primaryYellow};
    font-size: 20px;
    font-weight: bold;
    cursor:pointer;
    @media ${device.desktop}{
        font-size: 30px;
    }
    &:hover{
        color:${color.primaryWhite}
    }
`
/* END STYLE EVENT CARD */

/* START STYLE USER CARD */
export const DivUserCard = styled.div`
    position: relative;
    min-width: 140px; 
    max-width: 140px;
    overflow: hidden ;
    margin-bottom:10px;
    @media ${device.desktop}{
        margin-bottom:5px;
        min-width: 220px;
        max-width: 220px;
    } 
`
export const ImgAvatarUser = styled.img`
    min-width: 140px;
    max-width:140px;
    object-fit:cover;
    height: 140px;
    border-radius: 50%;
    transition: 300ms;
    @media ${device.desktop}{
        min-width: 220px;
        max-width:220px;
        height: 220px;
    } 
    &:hover{
        border-radius:15px;
    }
`
export const PNameUser = styled.p`
    font-size: 24px;
    position: absolute;
    left: 0;
    top: 90px;
    text-shadow: 1px 1px 2px black, 0 0 20px black, 0 0 4px black;
    @media ${device.desktop}{
        font-size: 34px;
        left: 0;
        top: 140px;
    } 
`
export const PFollowersUser = styled.p`
    font-size: 16px;
    position: absolute;
    left: 5px;
    top: 120px;
    text-shadow: 1px 1px 2px black, 0 0 20px black, 0 0 4px black;
    @media ${device.desktop}{
        font-size: 16px;
        left: 5px;
        top: 180px; 
    } 
`
/* END STYLE USER CARD */

/* START STYLE MUSIC CARD */
export const DivMusicCard = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 140px;
    height: 190px;
    border-radius: 20px;
    text-decoration: none;
    color: ${color.primaryWhite};
    background: hsla(0, 0%, 100%, 0.02);
    width: 224px;
    margin-bottom:10px;
    @media ${device.desktop}{   
        margin-bottom:5px;   
        min-width: 220px;
        height: 270px;
        border-radius: 20px;
        cursor: pointer;
        transition: 300ms;
        &:hover{
            background: rgba(255, 255, 255, .2);
        }
    }
`
export const DivImageMusic = styled.div`
    display: flex;
    padding: 15px 15px 0 15px;
    justify-content: center;
    align-items: center;
`
export const ImgCardMusic = styled.img`
    width: 115px;
    height:115px;
    display: flex;
    border-radius: 10px;
    transition: 300ms;
    &:hover{
        border-radius: 50%;
        /* transform: rotate(360deg); */
    }
    @media ${device.desktop}{
        width: 180px;
        height: 180px;
        border-radius: 15px;
    } 
`
export const DivInfoMusic = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 15px 15px 15px 15px;
    justify-content: center;
    gap: 7px;
`
/* END STYLE MUSIC CARD */

export const DivElementTitles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    margin-bottom: 10px;
`
export const LinkProfile = styled(Link)`
    display: flex;
    align-items: center;
    gap: 5px;
    z-index: 3;
    color: ${color.primaryWhite};
    text-decoration: none;
    font-size: 18px;
    &:hover {
        color: ${color.primaryYellow};
    }
    @media ${device.desktop}{
        display: none;
    }
`
export const DivSlider = styled.div`
    display: flex;
    width: calc(100vw - 40px );
    height: 196px;
    overflow: auto;
    &::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            cursor: pointer;
        }
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background: #3D3D3D77;
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background: #353535;
        }
        &::-webkit-scrollbar-thumb:hover{
            background: ${color.secondaryBlack};
        }
        &::-webkit-scrollbar-thumb:active{
            background: #484848;
        }
    @media ${device.desktop}{
        width: calc(100vw - 200px);
        height: 291px;  
        &::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            cursor: pointer;
        }
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background: #3D3D3D77;
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background: #353535;
        }
        &::-webkit-scrollbar-thumb:hover{
            background: ${color.secondaryBlack};
        }
        &::-webkit-scrollbar-thumb:active{
            background: #484848;
        }
    }
` 

/* HERO TITLES */
export const DivHeroTitles = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${device.desktop}{
        
    }
`
export const H2StyleHero = styled.h2`
    color: ${color.primaryWhite};
    text-transform: uppercase;
    width: 100%;
    font-size: 1.8em;
    text-align:center;
    text-shadow: 1px 1px 2px black, 0 0 20px black, 0 0 5px black;
    transition: 300ms;
    @media ${device.desktop} {
        font-size: 3em;
    }
`
export const H4StyleHero = styled.h4`
    width: 100%;
    font-size: 1em;
    text-align:center;
    background:rgba(0, 0, 0, .5);
    height: 20px;
    text-shadow: 1px 1px 2px black, 0 0 20px black, 0 0 4px black;
    @media ${device.desktop} {
        font-size: 1.25em;
        background:none;
    }
`

//TODO: ??ESTO SE UTILIZA EN ALGUN SITIO?

/* export const DivFavAndPlaylist = styled.div`
    display: flex;
    @media ${device.desktop}{
        display:none; 
    } 
` */
/* export const DivBoxStyle = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom:25px;
` */


/* CARDMUSIC */
/* export const DivDisplayMobile = styled.div`
    display:block;
    @media ${device.desktop}{
        display:none; 
    } 
` */
/* export const DivDisplayDesktop = styled.div`
    display:block; 
` */
   
/* export const DivStyle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
` */

/* export const LinkHome = styled(Link)`
    color: ${color.primaryWhite};
    text-decoration: none;
    font-size: 14px;
    &:hover{
        color: ${color.primaryYellow}
    }
` */


/* export const DivSliderUser = styled.div`
    display:flex;
    width: calc(100vw - 40px );
    height: 155px;
    cursor:pointer;
    overflow: auto;
    gap:20px;
    @media ${device.desktop}{
        width: calc(100vw - 200px);
        height: 235px;  
        &::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            cursor: pointer;
        }
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background: #3D3D3D77;
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background: #353535;
        }
        &::-webkit-scrollbar-thumb:hover{
            background: ${color.secondaryBlack};
        }
        &::-webkit-scrollbar-thumb:active{
            background: #484848;
        }
    }
` */
/* export const DivSliderEvents = styled.div`
    display:flex;
    width: calc(100vw - 40px );
    height: 239px;
    cursor:pointer;
    overflow: auto;
    gap:20px;
    @media ${device.desktop}{
        width: calc(100vw - 200px);
        height: 305px;  
        &::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            cursor: pointer;
        }
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background: #3D3D3D77;
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background: #353535;
        }
        &::-webkit-scrollbar-thumb:hover{
            background: ${color.secondaryBlack};
        }
        &::-webkit-scrollbar-thumb:active{
            background: #484848;
        }
    }
` */

/* export const DivSliderEvent = styled.div`
    display:none;
    @media ${device.desktop}{
        width: calc(100vw - 200px);
        height: 285px;  
        &::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            cursor: pointer;
        }
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background: #3D3D3D77;
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background: #353535;
        }
        &::-webkit-scrollbar-thumb:hover{
            background: ${color.secondaryBlack};
        }
        &::-webkit-scrollbar-thumb:active{
            background: #484848;
        }
    }
` */

// export const DivCardUser = styled.div`
//     position: relative;
//     min-width: 140px; 
//     max-width: 140px;
//     overflow: hidden ;
//     @media ${device.desktop}{
//         min-width: 220px;
//         max-width: 220px;
//     } 
// `
// export const DivCardEvent = styled.div`
//     @media ${device.desktop}{
//         min-width: 420px;
//         height: 300px;
//     } 
// `

// export const DivCard = styled.div`
//     display: flex;
//     flex-direction: column;
//     min-width: 140px;
//     height: 190px;
//     margin-right: 20px;
//     background: hsla(0, 0%, 100%, 0.02);
//     border-radius: 20px;
//     cursor: pointer;
//     transition: 300ms;
//     &:hover{
//         background: rgba(255, 255, 255, .2);
//     }
//     @media ${device.desktop}{
//         min-width: 220px;
//         height: 270px;
//     } 
// `

// export const DivCardUsersFol = styled.div`
//     display:flex;
// `


// export const DivInfoLists = styled.div`
//     display: flex;
//     flex-direction: column;
//     overflow: hidden;
//     padding: 15px 15px 15px 15px;
//     justify-content: center;
//     gap: 7px;
// `


// export const DivHomeCarousels =styled.div`
//     display:flex;
//     flex-direction:column;
//     gap:30px;
// `

/* BUTTONS  */
// export const DivButtonsAction = styled.div`
//     display: flex;
//     justify-content: space-between;
  
// `

/* IMAGE  */

// export const ImgAvatarProfile = styled.img`
//     width: 50px;
//     height: 50px;
//     border-radius:50px;
//     @media ${device.desktop}{
//         display:none;
//     } 
// `












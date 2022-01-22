import styled from "styled-components";
import { Container } from "../../globalStyles";
import {FaMagento} from 'react-icons/fa'
import {
    Link
  } from "react-router-dom";


export const Nav = styled.div`
background-color: rgba(0, 3, 25, 1);
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 989;
`;


export const NavbarContainer=styled(Container)`
display:flex;
justify-content: space-between;

${Container}
`;

export const NavLogo = styled(Link)`
color:white;
justify-self: flex-start;
cursor: pointer;
text-decoration:none;
font-size:2rem;
display:flex;
align-items: center;
`;

export const NavIcon = styled(FaMagento)`
margin-right: 0.5rem;
`;


export const MobileIcon =styled.div`
display: none;
color:white;
@media screen and (max-width:950px){
    display:block;
    
    top:0;
    right:0;
    transform:translate(-100%, 0);
    font-size:1.8rem;
    cursor:pointer;
}
`;

export const NavMenu=styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;
justify-content: space-around;

@media screen and (max-width:950px){
    display:flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    padding: 0 0;
    top:80px;
    left:${({click}) =>(click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.4s ease;
    background: #101532;
 
}
`;

export const NavItem =styled.li`

border-bottom: 2px solid #4b59f7;

@media screen and (max-width:950px){
    width: 100%;
    line-height: 80px;
width: 100%;
    :hover{
        border: none;
    }
}
`;

export const NavLinks = styled(Link)`
margin-left:10px;
color:white;
font-family: sans-serif;
font-size:1rem;
display:flex;
align-items: center;
text-decoration:none;
padding: 0%.5rem 1rem;
height: 100%;
:hover{
    border-bottom: 1px solid orange;
    transition:  all 0.3s ease;
}

@media screen and (max-width:950px){
    text-align:center;
    padding:2rem;
    width:100%;
    display: table;

    :hover{
        color:#4b59f7;
        transition:  all 0.3s ease;
        
    }
}
`;

export const NavItemBtn=styled.li`

@media screen and (max-width:950px){
display:flex;
align-items: center;
justify-content: center;
width:100%;
}
`;

export const NavBtnLink=styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 8px 15px;
height: 100%;
width:100%;
border:none;
outline: none;
`;
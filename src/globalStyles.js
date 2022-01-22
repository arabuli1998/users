import styled, {createGlobalStyle} from "styled-components";



export const Container = styled.div`
width: 100%;
max-width: 1300px;
margin-right: auto;
z-index: 1;
margin-left: auto;
padding-left: 50px;
padding-right: 50px;

@media screen and (max-width:995px){
    padding-left: 30px;
padding-right: 30px;
}
`;

export const Button=styled.button`
border-radius: 4px;
background: ${({primary})=>(primary ? '#4b59f7' : "#0467fb")};
white-space: nowrap;
padding: ${({big})=>(big ? '12px 64px' : '5px 15px')};
color: white;
font-size: ${({fontBig})=>(fontBig ? '19px' : '15px')};
outline: none;

cursor: pointer;


:hover{
    transition: all 0.3 ease-out;
    background: white;
    background: ${({primary})=>(primary ? '#0467fb' : "#4b59f7")};

}
@media screen and (max-width:950px){
    width: 100%;
    margin-top: 20px;
}

`;
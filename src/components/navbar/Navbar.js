import React,{useState,useEffect} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from '../../globalStyles'
import { Nav,NavbarContainer, NavIcon, NavLogo,MobileIcon,NavMenu,NavLinks,NavItem,NavItemBtn,NavBtnLink} from './Navbar.elements'

const Navbar = () => {
    const[click,setClick]=useState(false);
const[button,setButton]=useState(true)

const handleClick =()=>setClick(!click)

const showButton=()=>{
    if(window.innerWidth<=950){
        setButton(false)
    }else{
        setButton(true)
    }
}
useEffect(()=>{
    showButton()
},[]);
window.addEventListener('resize',showButton)

    return (
        <Nav>
<NavbarContainer>
    <NavLogo to="/">
        <NavIcon />
        RA
    </NavLogo>
    <MobileIcon onClick={handleClick}>
        {click ? <FaTimes/> : <FaBars/> }
    </MobileIcon>
    <NavMenu onClick={handleClick} click={click}>
        <NavItem>
            <NavLinks to='/'>Home</NavLinks>
        </NavItem>
    

    
        <NavItem>
            <NavLinks to='/Gitub/users'>Git Users</NavLinks>
        </NavItem>
   

   
        <NavItem>
            <NavLinks to='/aboutMe'>Profile</NavLinks>
        </NavItem>
  

   
        

        <NavItemBtn>
            {button ? (
                <NavBtnLink to="/Register/Login">
                    <Button primary>SIGN IN</Button>
                </NavBtnLink>
            ) : (<NavBtnLink to="/sign-up">
                <Button onClick={showButton} fontBig primary>SIGN UP</Button>
            </NavBtnLink>)}
        </NavItemBtn>

    </NavMenu>
</NavbarContainer>
        </Nav>
    )
}

export default Navbar

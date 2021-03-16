import React from 'react'
import {animateScroll as scroll} from 'react-scroll';
import {FaBars} from 'react-icons/fa';
import 
{Nav,NavbarContainer,
    NavLogo, MobileIcon,NavLinks,
    NavMenu,NavBtn, NavBtnLink}
from './NavbarElement';

const Navbar = ({toggle}) => {

    const toggleHome = ()=>{
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Tabish</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <li>
                            <NavLinks to = 'about'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >About</NavLinks>
                        </li>
                        <li>
                            <NavLinks to = 'discover'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Discover</NavLinks>
                        </li>
                        <li>
                            <NavLinks to = 'benifits'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Benifits</NavLinks>
                        </li>
                        <li>
                            <NavLinks to = 'services'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Services</NavLinks>
                        </li>
                        <li>
                            <NavLinks to = 'singup'
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}
                            >signup</NavLinks>
                        </li>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign in</NavBtnLink>  
                    </NavBtn>
                    
                </NavbarContainer>
  
            </Nav>
            
        </>
    )
}

export default Navbar;

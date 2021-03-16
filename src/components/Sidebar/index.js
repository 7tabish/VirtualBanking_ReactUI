import React from 'react';
import {
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

export const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}>

            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            
            <SidebarWrapper>
                
                <SidebarMenu>
                    <SidebarLink onClick={toggle}  to='about'>
                        About
                    </SidebarLink>

                    <SidebarLink onClick={toggle} to='discover'>
                        Discover
                    </SidebarLink>

                    <SidebarLink onClick={toggle} to='benifits'>
                        Benfits
                    </SidebarLink>

                    <SidebarLink onClick={toggle} to='services'>
                        Services
                    </SidebarLink>

                    <SidebarLink onClick={toggle} to='signin'>
                        Sign In
                    </SidebarLink>
                 
                    
                   
                </SidebarMenu>
            
                <SideBtnWrap>
                    <SidebarRoute to="/signup">Sign Up</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
            

        </SidebarContainer>
    )
}

export default Sidebar;

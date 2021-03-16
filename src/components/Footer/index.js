import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaLink} from 'react-icons/fa';

import {FooterContainer, FooterWrap, FooterLinksContainer,
FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,FooterLink,
SocialMedia, SocialMediaWrap,SocialLogo,SocialIcons, SocialIconLink, WebsiteRights} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
            
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='about'>How it works</FooterLink>
                            <FooterLink to='about'>Testimonials</FooterLink>
                            <FooterLink to='about'>Careers</FooterLink>
                            <FooterLink to='about'>Investors</FooterLink>
                            <FooterLink to='about'>Terms of Service</FooterLink>                
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='about'>How it works</FooterLink>
                            <FooterLink to='about'>Testimonials</FooterLink>
                            <FooterLink to='about'>Careers</FooterLink>
                            <FooterLink to='about'>Investors</FooterLink>
                            <FooterLink to='about'>Terms of Service</FooterLink>                
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='about'>How it works</FooterLink>
                            <FooterLink to='about'>Testimonials</FooterLink>
                            <FooterLink to='about'>Careers</FooterLink>
                            <FooterLink to='about'>Investors</FooterLink>
                            <FooterLink to='about'>Terms of Service</FooterLink>                
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='about'>How it works</FooterLink>
                            <FooterLink to='about'>Testimonials</FooterLink>
                            <FooterLink to='about'>Careers</FooterLink>
                            <FooterLink to='about'>Investors</FooterLink>
                            <FooterLink to='about'>Terms of Service</FooterLink>                
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Tabish</SocialLogo>
                        <WebsiteRights>Tabish {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label="facebook"><FaFacebook/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="instagram"><FaInstagram/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="youtube"><FaYoutube/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="twitter"><FaTwitter/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="linkedin"><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;

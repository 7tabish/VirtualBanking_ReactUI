import React from 'react';
import {Button} from '../ButtonElement';

import 
{
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img

}
 from './InfoElements';


const Index = ({
    img,
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    buttonLabel,
    headLine,
    description,
    primary,
    dark,
    lightTextDesc
}) => {
   
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText} >{headLine}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <BtnWrap>
                                <Button
                                    to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark = {dark ? 1: 0}
                                    
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>

        </InfoContainer>
    )
}

export default Index;
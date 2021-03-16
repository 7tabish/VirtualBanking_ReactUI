import React, {useState} from 'react'
import video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';
import {
HeroContainer,
HeroBg,
VideoBg,
HeroContent,
HeroH1,
HeroP,
ArrowForward,
ArrowRight,
HeroBtnWrapper
}
 from './HeroElements';

const Index = () => {
    const [hover, setHover] = useState(false);

    const onHover = ()=>{
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src = {video} type = 'video/mp4' />
            </HeroBg>
            <HeroContent>
                
                <HeroH1>Virtual banking made easy</HeroH1>
                <HeroP>Sign up for new account today receive 250$ in credit towards your next payment</HeroP>
               <HeroBtnWrapper>
                    <Button to='singup'
                    primary = 'true'
                    dark = 'true'
                    onMouseLeave={onHover}
                    onMouseEnter={onHover}
                    >
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
    )
}

export default Index;
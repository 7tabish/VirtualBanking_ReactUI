import React from 'react';
import Image4 from '../../images/svg-4.svg';
import Image5 from '../../images/svg-5.svg';
import Image6 from '../../images/svg-6.svg';

import {
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesP,
} from './ServiceElements';


const Service = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Image4}/>
                    <ServicesH2>Support bitcoin</ServicesH2>
                    <ServicesP>We help reduce your fees We help reduce your fees</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Image5}/>
                    <ServicesH2>Online transactions</ServicesH2>
                    <ServicesP>We help reduce your fees We help reduce your fees</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Image6}/>
                    <ServicesH2>Savings</ServicesH2>
                    <ServicesP>We help reduce your fees We help reduce your fees</ServicesP>
                </ServicesCard>
            </ServicesWrapper>

        </ServicesContainer>
    )
}

export default Service;

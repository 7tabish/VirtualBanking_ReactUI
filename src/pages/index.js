import React, {useState} from 'react'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from '../components/InfoSection/data';

import Navbar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import ServicesSection from '../components/ServiceSection';
import Footer from '../components/Footer';


const Index = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle =()=>{
        console.log('setting toggle', isOpen);
      setIsOpen(!isOpen); 
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/>
            <ServicesSection/>
            <Footer/>
        </>
    )
}

export default Index;
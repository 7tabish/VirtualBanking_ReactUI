import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

export const Button = styled(LinkS)`
    border-radius: 50px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    
    white-space: nowrap;
    background: ${({primary})=>(primary ? '#01bf71': '#010606')};
    padding: ${({big})=>(big ? '14px 48x' : '22px 30px')};
    color: ${({dark})=>(dark ? '#010606' : '#fff')};
    font-size: ${({fontBig})=>(fontBig ? '20px' : '16px')};
   
    transition: 0.3s ease-in-out;

    &:hover{
        transition: 0.3s ease-in-out;
        background: ${({primary})=>(primary ? '#fff' :'#01bf71')};
    }

`
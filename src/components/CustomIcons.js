
import React from 'react';
import styled from 'styled-components';

const Label = styled.div`
  z-index: 10 !important;
  color: black;
  font-size: 0.7rem;
  position: absolute;
  top: 4.5%;
  left: 19.2%;
  transform: translate(-50%, -50%);
  font-weight: 500;
`;

export const CurrencyLabel = (props)=>{
    return 
}

export const ButtonCTA = styled.button`
  
  padding: 12px 30px;
  background-color: #FCD535 ;
  color: #000;
  font-weight: 800;
  border-radius: 7px;
  cursor: pointer;
  align-self: flex-start;
  :hover{
    background-color: rgba(252, 213, 53,0.8) ;
  }
`
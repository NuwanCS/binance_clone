import React from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import labelIcon from '../../images/label.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    
`;

const LabelImg = styled.img`
width: 2.2vw;
height: 2.2vh;
object-fit: cover;
margin-left: 5px;
position: relative;
`

const CurrencyLabel = styled.div`
  z-index: 10 !important;
  color: black;
  font-size: 0.7rem;
  position: absolute;
  top: 4.5%;
  left: 19.2%;
  transform: translate(-50%, -50%);
  font-weight: 500;
`;



const BuyCrypto = () => {
  return (
    <Container>
      <div>Buy Crypto</div>
      <LabelImg src = {labelIcon}/>
      <CurrencyLabel>USD</CurrencyLabel>
      <ArrowDropDownIcon/>
    </Container>
  )
}

export default BuyCrypto
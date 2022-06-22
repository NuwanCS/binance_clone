import React from 'react';
import styled from 'styled-components';
import foreground_image from '../../images/foreground-image.png';
import { ButtonCTA } from '../CustomIcons';



const Container =  styled.div`
  height: 130vh;
  width: 100%;
  background-color: #000 !important;
  `

const CoverContainer =  styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7rem;

`

const TitleContainer = styled.div`
  height: 100%;
  flex: 0.5;
  display: flex;
  justify-content: flex-start;
  
  flex-direction: column;
`

const Title = styled.h1`
  color: white;
  font-size: 3.5rem;
  font-family: 'IBM Plex Sans', sans-serif;

`

const CTA = styled.div`

margin-top: 2rem;
>input{
  width: 40%;
  background-color: #181A20;
  color: white;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #5E6673;
  border-radius: 4px;
  box-sizing: border-box;
  margin-right: 10px;
}
input:hover,input:focus{
  border: 1px solid #FCD535;
  outline: none;
}

`

const ForeGround = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  
`

const ForeGroundImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const Coversummary = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
`

const CoverSummaryComponent = styled.div`
  width: 15rem;
`

const CoverSummaryComponentTitle = styled.h1`
  font-size: 2.5rem;
`

const CoverSummaryComponentSubTitle = styled.h4`
  font-size: 1rem;
`

const HomePageFragmentOne = () => {

  const titles = [
    '$76 billion',
    '600+',
    '90 million',
    '<0.10%'
  ];

  const subTitles = [
    '24h trading volume on Binance exchange',
    'Cryptocurrencies listed',
    'Registered users who trust Binance',
    'Lowest transaction fees'
  ];
  return (
    <Container>
      <CoverContainer>
        <TitleContainer>
          <Title>
          Buy, trade, and <br/> hold 600+ cryptocurrencies <br/> on Binance
          </Title>
          <CTA>
            <input placeholder='Email/Phone number'></input>
            <ButtonCTA >Get Started</ButtonCTA>
          </CTA>
        </TitleContainer>
        <ForeGround>
          <ForeGroundImage src = {foreground_image}/>
        </ForeGround>
      </CoverContainer>
      <Coversummary>
        {
          titles.map(title=>(
            <CoverSummaryComponent>
            <CoverSummaryComponentTitle>{title}</CoverSummaryComponentTitle>
            <CoverSummaryComponentSubTitle>
                {subTitles[titles.indexOf(title)]}
            </CoverSummaryComponentSubTitle>
          </CoverSummaryComponent>
          ))
        }
          
      </Coversummary>


    </Container>
  )
}

export default HomePageFragmentOne
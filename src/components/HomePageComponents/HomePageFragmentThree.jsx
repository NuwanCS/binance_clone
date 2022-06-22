import React from 'react';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import portfolio_section from '../../images/portfolio-section.png';
import { ButtonCTA } from '../CustomIcons';

const Container = styled.div`
   height: 100vh;
  width: 100%;
  background-color: #181A20;
  padding: 0 7rem;
  display: flex;
`

const LeftContainer = styled.div`
  flex: 0.5;
  background-color: #181A20;
`


const TitleContainer = styled.div`
  
`

const Title = styled.h1`
  margin: 20px 0;
  font-size: 2.5rem;
`
const SubTitle = styled.p`
  
`
const CardContainer = styled.div`
  margin: 30px 0 ;
`
const Card = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 35px 0;
`
const InfoContainer = styled.div`
  margin-left: 20px;
  flex: 0.9;
`

const CardTitle = styled.h2`
  padding: 12px 0;
`

const CardInfor = styled.p`
  padding: 8px 0;
`
const RightContainer = styled.div`
  flex: 0.5;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`
const HomePageFragmentThree = () => {
  return (
    <Container>
      <LeftContainer>
        <TitleContainer>
          <Title>Build your cypto protfolio</Title>
          <SubTitle>Start your first trade with these easy steps</SubTitle>
        </TitleContainer>

        <CardContainer>
          <Card>
            <PersonIcon/>
            <InfoContainer>
              <CardTitle>
                Fund your account
              </CardTitle>
              <CardInfor>
                Add funds to your crypto account to start trading crypto. You can add funds with a variety of payment methods.
              </CardInfor>
            </InfoContainer>
            
          </Card>
          <Card>
            <PersonIcon/>
            <InfoContainer>
              <CardTitle>
                Fund your account
              </CardTitle>
              <CardInfor>
                Add funds to your crypto account to start trading crypto. You can add funds with a variety of payment methods.
              </CardInfor>
            </InfoContainer>
            
          </Card>
          <Card>
            <PersonIcon/>
            <InfoContainer>
              <CardTitle>
                Fund your account
              </CardTitle>
              <CardInfor>
                Add funds to your crypto account to start trading crypto. You can add funds with a variety of payment methods.
              </CardInfor>
            </InfoContainer>
            
          </Card>
        </CardContainer>
        <ButtonCTA>Get Started</ButtonCTA>
      </LeftContainer>
      <RightContainer>
          <Image src={portfolio_section}></Image>
      </RightContainer>
    </Container>
  )
}

export default HomePageFragmentThree
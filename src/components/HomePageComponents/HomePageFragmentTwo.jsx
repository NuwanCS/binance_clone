import React from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ButtonCTA } from '../CustomIcons';

const Container =  styled.div`
  height: 100vh;
  width: 100%;
  background-color: #181A20;
  padding: 0 7rem;
  `
const HomePageFragmentTwoTopic = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TitleSpan = styled.span`
  
`

const ViewMore = styled.span`
  font-size: 0.7rem;
  color: rgba(202, 202, 202, 0.8);
  display: flex;
  align-items: center;
  cursor: pointer;
  >.MuiSvgIcon-root {
    font-size: 0.7rem;
    margin-left: 8px;
  }
`

const MarketChart = styled.div`

`

const HomePageFragmentTwoFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const SignUp = styled.span`
  font-size: 1.4rem;
  font-weight: 800;
  padding: 1rem 0;
`

const Table = styled.table`
   width: 100%;
   padding-top: 2rem;
`

const Tr = styled.tr`
  padding: 1rem 0;
 
`

const Th = styled.th`
   text-align: left;
   padding: 1rem 0;
   color: rgba(202, 202, 202, 0.8);
`

const Td = styled.td`
   text-align: left;
   padding: 1rem 0;
`

const HomePageFragmentTwo = () => {
  return (
    <Container>
      <HomePageFragmentTwoTopic>
        <TitleSpan>Popular cryptocurrencies </TitleSpan>
        <ViewMore>View more markets <ArrowForwardIosIcon/> </ViewMore>
      </HomePageFragmentTwoTopic>
      <MarketChart>
        <Table>
          <Tr>
            <Th>Name</Th>
            <Th>Last Price</Th>
            <Th>24h Change</Th>
            <Th>Market Cap</Th>
          </Tr>
          <Tr>
            <Td>BNB</Td>
            <Td>$217.3</Td>
            <Td>+1.18%</Td>
            <Td>$35,480M</Td>
          </Tr>
          <Tr>
            <Td>Bitcoin</Td>
            <Td>$217.3</Td>
            <Td>+1.18%</Td>
            <Td>$35,480M</Td>
          </Tr>
          <Tr>
            <Td>Ethereum</Td>
            <Td>$217.3</Td>
            <Td>+1.18%</Td>
            <Td>$35,480M</Td>
          </Tr>
          <Tr>
            <Td>Project Galaxy</Td>
            <Td>$217.3</Td>
            <Td>+1.18%</Td>
            <Td>$35,480M</Td>
          </Tr>
          <Tr>
            <Td>Green Metaverse Token</Td>
            <Td>$217.3</Td>
            <Td>+1.18%</Td>
            <Td>$35,480M</Td>
          </Tr>
        </Table>
      </MarketChart>
      <HomePageFragmentTwoFooter>
        <SignUp>Sign up now to build your own protflio for free</SignUp>
        <ButtonCTA>Get Started</ButtonCTA>
      </HomePageFragmentTwoFooter>
    </Container>
    
  )
}

export default HomePageFragmentTwo
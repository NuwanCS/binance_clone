import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import {HomePageFragmentOne, 
        HomePageFragmentTwo,
        HomePageFragmentThree,
        HomePageFragmentFour,
        HomePageFragmentFive,
        HomePageFragmentSix,
        HomePageFragmentSeven} from './HomePageComponents/index'
import Navbar from './Navbar'


const Container = styled.div`
   background-color: #181A20;
`

const Home = () => {
  return (
    <Container>
        <Navbar/>
        <HomePageFragmentOne/>
        <HomePageFragmentTwo/>
        <HomePageFragmentThree/>
        <HomePageFragmentFour/>
        <HomePageFragmentFive/>
        <HomePageFragmentSix/>
        <HomePageFragmentSeven/>
        <Footer/>
    </Container>
  )
}

export default Home
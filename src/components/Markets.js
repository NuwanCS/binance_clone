import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const Container =  styled.div`
  height: 100vh;
  width: 100%;
  background-color: #000;
  `

const Markets = ()=>{
    return(
        <Container>
            <Navbar>

            </Navbar>
        </Container>
    )
}

export default Markets;
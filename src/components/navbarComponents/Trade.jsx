import React from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Trade = () => {
  return (
    <Container>
      <div>Trade</div>
      <ArrowDropDownIcon/>
    </Container>
  )
}

export default Trade
import React from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


const Earn = ()=>{
    return (
        <Container>
            <div>Earn</div>
            <ArrowDropDownIcon/>
        </Container>
    )
}

export default Earn;
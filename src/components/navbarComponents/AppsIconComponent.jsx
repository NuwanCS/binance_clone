import React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const AppsIconComponent = ()=>{
    return(
        <Container>
            <AppsIcon style={{fontSize:'1.5rem'}}/> 
            <ArrowDropDownIcon/>
        </Container>
        
    )
}

export default AppsIconComponent;
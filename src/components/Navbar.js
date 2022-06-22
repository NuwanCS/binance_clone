import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {BuyCrypto, Derivates, Earn, Finance, LanguageAndCurrency, Trade, AppsIconComponent} from './navbarComponents/index'
import logo from '../images/binance.svg';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Container = styled.div`
    height: 9.2vh;
    width: 100%;
    background-color: #181A20;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 400;
    padding: 10px 5px;
    color: '#848E9C';
`

const Left = styled.div`
    display: flex;
    flex: 6;
    color: white;
    text-decoration: none;
    align-items: center;
    justify-content: space-evenly;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1rem;

`

const Middle =styled.div`
    flex: 1;
`
const Right = styled.div`

    display: flex;
    flex: 3;
    color: white;
    text-decoration: none;
    align-items: center;
    justify-content: space-evenly;
    font-family: 'IBM Plex Sans', sans-serif;
`

const Logo = styled.img`
    width: 8.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
`

const MenuItem = styled.div`
    cursor: pointer;
`

const linkStyleLeft = {
    margin: "0.3rem",
    textDecoration: "none",
    color: '#EAECEF',
    fontSize: "0.8rem",
  };

  const linkStyleRight = {

    textDecoration: "none",
    color: '#EAECEF',
    fontSize: "0.8rem",
  };

const Navbar = () => {
  return (
    <Container>
        <Left>
            <Link to='/' style={linkStyleLeft}>
                <Logo src = {logo}/>    
            </Link>
            <Link to='/' style={linkStyleLeft}>
                <AppsIconComponent/>
            </Link>
            <Link to='/' style={linkStyleLeft}>
                <BuyCrypto/>
            </Link>
            <Link to='/' style={linkStyleLeft}>
                <MenuItem>
                    Markets
                </MenuItem>
            </Link>
            <Link to='/' style={linkStyleLeft}>
                <Trade/>
            </Link>
            <Link to='/' style={linkStyleLeft}>
                <Derivates/>
            </Link>
            <Link to='/' style={linkStyleLeft}>
                <Earn/>
            </Link>
            <Link to='/' style={linkStyleLeft}>
                <Finance/>
            </Link>
            <Link to='/' style={linkStyleLeft}>
                <MenuItem>
                    NFT
                </MenuItem>
            </Link>           
        </Left>
        <Middle></Middle>
        <Right>
        <Link to='/' style={linkStyleRight}>
            <MenuItem>
                Log In
            </MenuItem>

        </Link>
            <Link to='/' style={linkStyleRight}>

            <MenuItem style={{backgroundColor:'#FCD535', padding:'0.5rem 0.7rem', borderRadius:'5px', color:'black'}}>
                Register
            </MenuItem>
            </Link>
            <Link to='/' style={linkStyleRight}>

            <MenuItem>
                Downloads
            </MenuItem>
            </Link>
            <Link to='/' style={linkStyleRight}>

            <MenuItem>
                English
            </MenuItem>
            </Link>
            <Link to='/' style={linkStyleRight}>

            <MenuItem>
                USD
            </MenuItem>
            </Link>
            <Link to='/' style={linkStyleRight}>

            <WbSunnyIcon style={{fontSize:'1rem'}}/>
            </Link>
        </Right>
    </Container>
  )
}

export default Navbar
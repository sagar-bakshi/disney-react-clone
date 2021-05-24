import React, {Component} from 'react';
import styled from 'styled-components';

class Header extends Component {
    render() {
        return (
            <Nav>
                <Logo src="/images/logo.svg"/>
                <NavMenu>
                    <a>
                        <img src="/images/home-icon.svg" alt="home-icon"/>
                        <span>Home</span>
                    </a>
                    <a>
                        <img src="/images/search-icon.svg" alt="home-icon"/>
                        <span>SEARCH</span>
                    </a>
                    <a>
                        <img src="/images/watchlist-icon.svg" alt="home-icon"/>
                        <span>WATCHLIST</span>
                    </a>
                    <a>
                        <img src="/images/movie-icon.svg" alt="home-icon"/>
                        <span>MOVIES</span>
                    </a>
                    <a>
                        <img src="/images/series-icon.svg" alt="home-icon"/>
                        <span>SERIES</span>
                    </a>
                </NavMenu>
                <UserImage src="https://images.unsplash.com/photo-1572965733194-784e4b4efa45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>
            </Nav>
        );
    }
}

const Nav = styled.nav`
 height: 70px;
 background-color: #090b13; 
 display: flex;
 align-items: center;
 padding: 0 36px;
  overflow-x: hidden;
`
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    
    img{
      width: 20px;
    }
    
    span{
      font-size: 13px;
      letter-spacing: 1.42px;
      margin-left: 5px;
      position: relative;
      
      &:after{
        content: "";
        height: 2px;
        background-color: #ffff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.26, 0.46, 0.46, 0.94) 0s;
      }
    }
    
    &:hover{
      span:after{
        transform: scaleX(1);
        opacity: 1;
      }
    }
    
  }
`

const Logo = styled.img`
width: 80px;
`
const UserImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
`

export default Header;





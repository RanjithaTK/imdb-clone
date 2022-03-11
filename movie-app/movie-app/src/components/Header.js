import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="logoimage" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="home" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="search" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="watch" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="ORIGINAL" />
          <span>ORIGINAL</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="ORIGINAL" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="ORIGINAL" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg style={{backgroundColor:"white"}}src="/images/userimage.png"/>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
height:70px;
background:#090B13;
display:flex;
align-items:center;
padding:0px 36px
`;

const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
display:flex;
flex:1;
margin-left:25px;
a{
    display:flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;
    img{
        height:30px;

   }
   span{
       font-size:13px;
       letter-spacing:1.42px;
   }
}`;
const UserImg=styled.img`
width:48px;
height:48px;
border-radius:50%;
cursor:pointer;`

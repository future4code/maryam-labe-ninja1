import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100px;
  background-color: #212227;
  img {
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }
  a {
    color: white;
    margin-left: 10px;
    text-decoration: none;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <a href="../Home/Home.js">
          <img
            src="https://rude-yoke.surge.sh/static/media/ninjaIconOutline.8ba90ce1.png"
            alt="Home"
          />
          LabeNinjas
        </a>
      </HeaderContainer>
    );
  }
}

export default Header;

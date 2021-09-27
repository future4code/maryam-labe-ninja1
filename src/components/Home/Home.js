import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 2%;
`;

class Home extends React.Component {
  render() {
    return (
      <HomeContainer>
        <img
          src="https://rude-yoke.surge.sh/static/media/ninjaLogo.3a055d2a.png"
          alt="Labeninjas"
        />
        <ButtonContainer>
          <button onClick={() => this.props.onChangePage("BeANinja")}>
            Be A Ninja
          </button>
          <button onClick={() => this.props.onChangePage("FindANinja")}>
            Find A Ninja
          </button>
        </ButtonContainer>
      </HomeContainer>
    );
  }
}

export default Home;

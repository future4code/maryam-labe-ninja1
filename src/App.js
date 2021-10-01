import React from "react";
import { ContainerApp, Header, ContainerStart, Footer } from "./style.js";
import HireNinja from "./components/HireNinja/HireNinja";
import BeNinja from "./components/BeNinja/index.js";

export default class App extends React.Component {
  state = {
    section: "start",
  };

  handleClickStart = () => {
    this.setState({ section: "start" });
  };

  handleClickBeNinja = () => {
    this.setState({ section: "beNinja" });
  };

  handleClickHireNinja = () => {
    this.setState({ section: "hireNinja" });
  };

  renderSection = () => {
    switch (this.state.section) {
      case "start":
        return (
          <ContainerStart>
            <img
              alt="Ninja Logo"
              src="./sourceImages/labeninjasLogoGrande.png"
            />
            <button onClick={this.handleClickBeNinja}>
              QUERO SER UM NINJA
            </button>
            <button onClick={this.handleClickHireNinja}>
              CONTRATAR UM NINJA
            </button>
          </ContainerStart>
        );
      case "beNinja":
        return <BeNinja />;
      case "hireNinja":
        return <HireNinja />;

      default:
        return <h2>Oops! Algo deu errado!</h2>;
    }
  };

  render() {
    return (
      <ContainerApp>
        <Header>
          <button onClick={this.handleClickStart}>
            <img 
            src="./sourceImages/labeninjasLogoPeq.png" 
            alt="logo Labeninjas Pequeno"/>
            <h2>LabeNinjas</h2>
          </button>
        </Header>
        {this.renderSection()}
        <Footer>
          <p>Projeto desenvolvido com React por:</p>
          <a href="https://www.linkedin.com/in/ericomarshall/" target="blank">Érico Marshall</a> 
          <a href="https://www.linkedin.com/in/fabiofa87/" target="blank">Fábio Faria</a>
          <a href="" target="blank">Glauber Apolinário</a>
          <a href="https://www.linkedin.com/in/otavio-augusto-chrispim-dev/" target="blank">Otávio Augusto Chrispim</a>
        </Footer>
      </ContainerApp>
    );
  }
}

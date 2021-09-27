import React from "react";
import { ContainerApp, Header, ContainerStart } from "./style.js";
import HireNinja from "./components/NinjaButtons/HireNinja/HireNinja";
import BeNinja from "./components/NinjaButtons/BeNinja";

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
            <img src="https://labenu.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2a51ad96-d8b7-4df3-bf68-828d473c84ef%2Flabeninjas2.png?table=block&id=5269d1e7-6031-402f-b326-fa0ed68bc43f&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=740&userId=&cache=v2" />
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
    console.log(this.state.section);
    return (
      <ContainerApp>
        <Header>
          <button onClick={() => this.handleClickStart}>
            <img src="https://rude-yoke.surge.sh/static/media/ninjaIconOutline.8ba90ce1.png" />
            <h2>Labeninjas</h2>
          </button>
        </Header>
        {this.renderSection()}
      </ContainerApp>
    );
  }
}

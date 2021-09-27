import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import BeANinja from "./components/BeANinja/BeANinja";
import FindANinja from "./components/FindANinja/FindANinja";

class App extends React.Component {
  state = {
    pageContent: "home",
  };

  renderPage = () => {
    if (this.state.currentPage === "BeANinja") {
      return <BeANinja onChangePage={this.changePage} />;
    } else if (this.state.currentPage === "FindANinja") {
      return <FindANinja onChangePage={this.changePage} />;
    } else if (this.state.currentPage === "home") {
      return <Home />;
    }
    return <Home onChangePage={this.changePage} />;
  };

  changePage = (page) => {
    this.setState({
      currentPage: page,
    });
  };
  render() {
    return (
      <div onChangePage={this.changePage}>
        <Header />
        {this.renderPage()}
      </div>
    );
  }
}

export default App;

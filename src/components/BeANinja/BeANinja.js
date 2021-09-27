import React from "react";

class BeANinja extends React.Component {
  render() {
    return (
      <div>
        <h1>Cadastrar Serviço</h1>
        <input type="text" placeholder="Titulo" required="required" />
        <input type="text" placeholder="Descriçāo" />
      </div>
    );
  }
}

export default BeANinja;

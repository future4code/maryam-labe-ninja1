import React from "react";

class JobsCard extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>
          Até {this.props.dueDate} - {this.props.price}
        </p>
        <button>Ver Detalhes</button>
        <button>Carrinho</button>
      </div>
    );
  }
}

export default JobsCard;

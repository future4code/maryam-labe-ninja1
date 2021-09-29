import React from "react";

class JobsCard extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>
          Até {this.props.dueDate} - R${this.props.price},00
        </p>
        <button
          onClick={() => {
            this.props.changePage("jobDetails");
          }}
        >
          Ver Detalhes
        </button>
        <button>Carrinho</button>
      </div>
    );
  }
}

export default JobsCard;

import React from "react";

class JobsCard extends React.Component {
  render() {
    let convertDate = new Date(this.props.dueDate)
      convertDate = convertDate.toLocaleDateString()
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>
          Até {convertDate} - R${this.props.price},00
        </p>
        <button
          onClick={() => {
            this.props.changePage("jobDetails");
            this.props.handleJobId(this.props.jobId);
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

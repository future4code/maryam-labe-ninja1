import React from "react";
import {JobsCardContainer, ButtonJobCard}from "./StyleHireNinja"

class JobsCard extends React.Component {
  render() {
    let convertDate = new Date(this.props.dueDate)
      const formatedDate = convertDate.toLocaleDateString('pt-BR', {timeZone: "UTC"})

    return (
      <JobsCardContainer>
        <h3>{this.props.title}</h3>
        <p>
          Contratar Até: {formatedDate} 
        </p>
        <p>
          Valor: R${this.props.price},00
        </p>
        <ButtonJobCard>
          <button
            onClick={() => {
              this.props.changePage("jobDetails");
              this.props.handleJobId(this.props.jobId);
            }}
          >
            Ver Detalhes
          </button>
          <button>carrinho</button>
        </ButtonJobCard>
      </JobsCardContainer>
    );
  }
}

export default JobsCard;
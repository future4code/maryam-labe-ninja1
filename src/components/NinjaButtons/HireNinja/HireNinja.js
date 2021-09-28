import React from "react";
import JobsCard from "./JobsCard";
import { FilterContainer } from "./StyleHireNinja";

class HireNinja extends React.Component {
  state = {
    jobs: [
      {
        title: "Codar no React",
        description: "Você vai aprender a criar aplicações web com React",
        price: "R$ 1.000,00",
        paymentMethods: ["Paypal", "Cartão de crédito", "Dinheiro"],
        dueDate: "10/12/2021",
        taken: false,
      },
      {
        title: "Codar no React2",
        description: "Você vai aprender a criar aplicações web com React",
        price: "R$ 1.000,00",
        paymentMethods: ["Paypal", "Cartão de crédito", "Dinheiro"],
        dueDate: "10/12/2021",
        taken: false,
      },
      {
        title: "Codar no React3",
        description: "Você vai aprender a criar aplicações web com React",
        price: "R$ 1.000,00",
        paymentMethods: ["Paypal", "Cartão de crédito", "Dinheiro"],
        dueDate: "10/12/2021",
        taken: false,
      },
    ],
  };
  render() {
    const jobsPosted = this.state.jobs.map((job) => {
      return (
        <JobsCard
          key={job.title}
          title={job.title}
          price={job.price}
          paymentMethods={job.paymentMethods}
          dueDate={job.dueDate}
        />
      );
    });

    return (
      <div>
        <FilterContainer>
          <label htmlFor="Ordenar">Ordenar Por:</label>
          <select>
            <option value="">Titulo</option>
            <option value="">Prazo</option>
            <option value="">Preço Decrescente</option>
            <option value="">Preço Crescente</option>
          </select>
          <label htmlFor="Valor Minimo">Valor Mínimo:</label>
          <input type="text" placeholder="R$" />
          <label htmlFor="Valor Máximo">Valor Máximo:</label>
          <input type="text" placeholder="R$" />
        </FilterContainer>
        {jobsPosted}
      </div>
    );
  }
}

export default HireNinja;

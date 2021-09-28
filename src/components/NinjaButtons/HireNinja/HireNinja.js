import React from "react";
import JobsCard from "./JobsCard";
import axios from "axios";
import { FilterContainer } from "./StyleHireNinja";

class HireNinja extends React.Component {
  state = {
    jobs: [],
  };

  componentDidMount() {
    this.getAllJobs();
  }

  getAllJobs = async () => {
    const url = "https://labeninjas.herokuapp.com/jobs";
    const res = await axios.get(url, {
      headers: {
        Authorization: "8c24d255-953c-478d-abd9-919b05f53b21",
      },
    });
    try {
      this.setState({
        jobs: res.data.jobs,
      });
    } catch (err) {
      console.log(err);
    }
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

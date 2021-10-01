import React from "react";
import axios from "axios";
import styled from "styled-components";
import {Detail, ButtonJobCard, DetailBody} from "./style"

const headers = {
  headers: {
    Authorization: "8c24d255-953c-478d-abd9-919b05f53b21",
  },
};

export default class JobDetails extends React.Component {
  state = {
    id: "",
    title: "",
    description: "",
    price: 0,
    paymentMethods: [],
    date: "",
    taken: false,
    job:{}
  };

  componentDidMount() {
    this.getJobById(this.props.jobId);
  }
  getJobById = async (jobId) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${jobId}`;
    try {
      const res = await axios.get(url, headers);
      this.setState({ id: res.data.id });
      this.setState({ title: res.data.title });
      this.setState({ description: res.data.description });
      this.setState({ price: res.data.price });
      this.setState({ paymentMethods: res.data.paymentMethods });
      let convertDate = new Date(res.data.dueDate)
      convertDate = convertDate.toLocaleDateString('pt-BR', {timeZone: "UTC"})
      this.setState({ date: convertDate})
      this.setState({ taken: res.data.taken });
      this.setState({job:res.data})
    } catch (err) {
      alert(err.message);
    }
  };

  render() {
    
    
    return (
      <DetailBody>
          <>Total={this.props.quantidade}</>
        <Detail>
          <h2>Detalhes do Job</h2>
          <h3>{this.state.title}</h3>
          <p>Descrição: {this.state.description}</p>
          <p><strong>Valor: {this.state.price},00</strong></p>
          <p>Data Encerramento: {this.state.date}</p>
        </Detail>
        <ButtonJobCard>
          <button onClick={() => this.props.changePage("voltar")}>Voltar</button>
          <button onClick={() => this.props.addCart(this.state.job)}>Adicionar ao carrinho</button>
        </ButtonJobCard>
        
      </DetailBody>
    );
  }
}

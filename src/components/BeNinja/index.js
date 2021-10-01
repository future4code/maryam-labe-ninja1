import React from "react";
import { Container, CheckboxContainer } from "./styles";
import axios from "axios";

const headers = {
  headers: {
    Authorization: "8c24d255-953c-478d-abd9-919b05f53b21",
  },
};

export default class BeNinja extends React.Component {
  state = {
    jobTitle: "",
    jobDescription: "",
    jobPrice: "",
    paymentMethods: [],
    jobDate: new Date(),
    checkedBoxCredit: false,
    checkedBoxDebit: false,
    checkedBoxBoleto: false,
    checkedBoxPix: false,
  };

  handleChangeJobTitle = (e) => {
    this.setState({ jobTitle: e.target.value });
  };

  handleChangeJobDescription = (e) => {
    this.setState({ jobDescription: e.target.value });
  };

  handleChangeJobPrice = (e) => {
    this.setState({ jobPrice: Number(e.target.value) });
  };

  handleChangeJobDate = (e) => {
    this.setState({ jobDate: e.target.value });
  };

  handleChangeCheckedBox = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  createJob = async (e) => {
    e.preventDefault();
    const url = "https://labeninjas.herokuapp.com/jobs";

    const copyPaymentMethods = [];

    if (this.state.checkedBoxCredit === true) {
      copyPaymentMethods.push("Crédito");
    }

    if (this.state.checkedBoxDebit === true) {
      copyPaymentMethods.push("Débito");
    }

    if (this.state.checkedBoxBoleto === true) {
      copyPaymentMethods.push("Boleto");
    }

    if (this.state.checkedBoxPix === true) {
      copyPaymentMethods.push("Pix");
    }

    const body = {
      title: this.state.jobTitle,
      description: this.state.jobDescription,
      price: this.state.jobPrice,
      paymentMethods: copyPaymentMethods,
      dueDate: this.state.jobDate,
    };

    try {
      const res = await axios.post(url, body, headers);
      this.setState({ jobTitle: "" });
      this.setState({ jobDescription: "" });
      this.setState({ jobPrice: "" });
      this.setState({ paymentMethods: "" });
      this.setState({ jobDate: "" });
      this.setState({ checkedBoxCredit: false });
      this.setState({ checkedBoxDebit: false });
      this.setState({ checkedBoxBoleto: false });
      this.setState({ checkedBoxPix: false });
      alert("Serviço cadastrado com sucesso!");
      return res;
    } catch (err) {
      alert("Não foi possível cadastrar o seu serviço.");
    }
  };

  render() {
    return (
      <Container>
        <h1>O que você faz?</h1>
        <form onSubmit={this.createJob}>
          <input
            required
            type="text"
            placeholder="Título"
            value={this.state.jobTitle}
            onChange={this.handleChangeJobTitle}
          />
          <input
            required
            type="text"
            placeholder="Descrição"
            value={this.state.jobDescription}
            onChange={this.handleChangeJobDescription}
          />
          <input
<<<<<<< HEAD
            placeholder="Valor"
            required
            type="number"
            min="0"
=======
            required
            type="number"
            placeholder="Preço"
>>>>>>> master
            value={this.state.jobPrice}
            onChange={this.handleChangeJobPrice}
          />
          <CheckboxContainer>
            <input
              name="checkedBoxCredit"
              type="checkbox"
              checked={this.state.checkedBoxCredit}
              onChange={this.handleChangeCheckedBox}
            />
            <label htmlFor="credit">Crédito</label>

            <input
              name="checkedBoxDebit"
              type="checkbox"
              checked={this.state.checkedBoxDebit}
              onChange={this.handleChangeCheckedBox}
            />
            <label htmlFor="debit">Débito</label>

            <input
              name="checkedBoxBoleto"
              type="checkbox"
              checked={this.state.checkedBoxBoleto}
              onChange={this.handleChangeCheckedBox}
            />
            <label htmlFor="boleto">Boleto</label>

            <input
              name="checkedBoxPix"
              type="checkbox"
              checked={this.state.checkedBoxPix}
              onChange={this.handleChangeCheckedBox}
            />
            <label htmlFor="pix">Pix</label>
          </CheckboxContainer>
          <input
            type="date"
            value={this.state.jobDate}
            onChange={this.handleChangeJobDate}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </Container>
    );
  }
}

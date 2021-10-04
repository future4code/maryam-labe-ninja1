import React from 'react';
import { JobsCart, CartJobs, Description } from "./StyleCart";
import axios from "axios";

const headers = {
  headers: {
    Authorization: "8c24d255-953c-478d-abd9-919b05f53b21",
  },
};

export default class Cart extends React.Component {
  state = {
    cart: this.props.cart,
  };

  componentDidMount() {
    this.getAllJobs();
  }

  mountCart = () => {
    this.setState({ cart: this.props.cart });
  };
  precoFinal = (cart) => {
    const precofinal = cart.reduce((a, b) => a + b.price, 0);
    return precofinal;
  };

  buildCart = (jobs) => {
    this.getAllJobs();
    const jobsCart = jobs.filter((job) => {
      return job.taken === true;
    });
    this.setState({ cart: jobsCart });
  };

  getAllJobs = async () => {
    const url = "https://labeninjas.herokuapp.com/jobs";
    const res = await axios.get(url, headers);
    try {
      this.buildCart(res.data.jobs);
    } catch (err) {
      console.log(err);
    }
  };
  updateJob = async (id, taken) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`;
    const body = {
      taken: taken,
    };
    try {
      await axios.post(url, body, headers);
    } catch (err) {
      console.log(err);
    }
  };

  cleanCart=(frase)=>{
    const cart = this.state.cart.filter((job) => {
      return job.taken === true;
      
    });
    for (let job of cart){
      this.updateJob(job.id, false)
    } 
    frase==="limpar"?
    alert("Todos os serviços do carrinho foram excluidos"):
    alert("Obrigado! Os serviços foram contratados.")
  }

  render() {
    const allCart = this.state.cart.map((job) => {
      return (
        <JobsCart key = {job.id}>
          <Description>
            Serviço: {job.title} R${job.price},00
          </Description>
          <button onClick={()=>this.updateJob(job.id, false)}>Excluir</button>
        </JobsCart>
      );
    });
    return (
      <CartJobs>
        <h2>Serviços no Carrinho</h2>
        {allCart}
        <h2>Total = {`RS${this.precoFinal(this.state.cart)},00`}</h2>
        <button onClick={this.props.handleClickHireNinja}>Continuar Comprando</button>
        <button onClick={()=>this.cleanCart("limpar")}>Limpar Carrinho</button>
        <button onClick={()=>this.cleanCart("contratar")}>Contratar Serviços</button>
      </CartJobs>
    );
  }
}

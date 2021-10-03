import React, { Component } from "react";
import { JobsCart } from "./StyleCart";
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
    console.log("mount", this.props.cart);
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
      const res = await axios.post(url, body, headers);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const allCart = this.state.cart.map((job) => {
      return (
        <JobsCart>
          <div key={job.id}>
            {job.title}
            {job.price}
          </div>
          <button onClick={()=>this.updateJob(job.id, false)}>Excluir</button>
        </JobsCart>
      );
    });
    return (
      <div>
        {allCart}
        Total = {`RS${this.precoFinal(this.state.cart)},00`}
        <button onClick={this.props.handleClickHireNinja}>Voltar</button>
      </div>
    );
  }
}

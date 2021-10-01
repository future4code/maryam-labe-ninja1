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
    // this.mountCart();
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
    console.log(jobs, "jobs state");
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
      //   this.setState({
      //     jobs: res.data.jobs,
      //   });
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
          <button>Excluir</button>
        </JobsCart>
      );
    });
    return (
      <div>
        {allCart}
        Total = {`RS${this.precoFinal(this.props.cart)},00`}
        <button onClick={this.props.handleClickHireNinja}>Voltar</button>
      </div>
    );
  }
}

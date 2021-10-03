import React from "react";
import JobsCard from "./JobsCard";
import axios from "axios";
import NinjaFilter from "./NinjaFilter";
import JobDetails from "../JobDetails/Index";
import Cart from "../Cart/Index";
import { ContainerAllJobs } from "./StyleHireNinja";

const headers = {
  headers: {
    Authorization: "8c24d255-953c-478d-abd9-919b05f53b21",
  },
};

class HireNinja extends React.Component {
  state = {
    jobs: [],
    maxValue: "",
    minValue: "",
    sorting: "title",
    currentPage: "",
    jobId: "",
    cart: [],
    precoTotal: "",
    finalCart: [],
    query: "",
  };

  componentDidMount() {
    this.getAllJobs();
  }

  getAllJobs = async () => {
    const url = "https://labeninjas.herokuapp.com/jobs";
    const res = await axios.get(url, headers);
    try {
      this.setState({
        jobs: res.data.jobs,
      });
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

  addCart = (job) => {
    const aux = [...this.state.cart, job];
    this.setState({ cart: aux });
  };
  addCartUpdate = (id) => {
    this.updateJob(id, true);
  };
  removeCartUpdate = (id) => {
    this.updateJob(id, false);
  };

  precoFinal = () => {
    const precofinal = this.state.cart.reduce((a, b) => a + b.price, 0);
    this.setState({ precoTotal: precofinal });
  };
  handleShowDetails = () => {
    if (this.state.currentPage === "jobDetails") {
      return (
        <JobDetails changePage={this.changePage} jobId={this.state.jobId} />
      );
    } else if (this.state.currentPage === "back") {
      return <HireNinja />;
    }
  };

  handleTotal = (total) => {
    this.setState({ precoTotal: total });
    console.log("total=", total);
  };

  changePage = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  handleQuery = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  handleJobId = (jobId) => {
    this.setState({ jobId: jobId });
  };
  handleMaxValue = (e) => {
    this.setState({
      maxValue: e.target.value,
    });
  };

  handleMinValue = (e) => {
    this.setState({
      minValue: e.target.value,
    });
  };

  handleChangeSorting = (e) => {
    this.setState({
      sorting: e.target.value,
    });
  };

  render() {
    const cartNumber = this.state.cart.length;
    const jobsPosted = this.state.jobs
      .filter((job) => {
        return job.title.toLowerCase().includes(this.state.query.toLowerCase());
      })
      .filter((job) => {
        return this.state.minValue === "" || job.price >= this.state.minValue;
      })
      .filter((job) => {
        return this.state.maxValue === "" || job.price <= this.state.maxValue;
      })
      .sort((a, b) => {
        switch (this.state.sorting) {
          case "title":
            return a.title.localeCompare(b.title);
          case "higher":
            return a.price - b.price;
          case "lower":
            return b.price - a.price;
          case "dueDate":
            return a.dueDate - b.dueDate;
          default:
            return a.title.localeCompare(b.title);
        }
      })
      .map((job) => {
        return (
          <JobsCard
            key={job.id}
            title={job.title}
            price={job.price}
            paymentMethods={job.paymentMethods}
            dueDate={job.dueDate}
            changePage={this.changePage}
            handleJobId={this.handleJobId}
            jobId={job.id}
            addCart={this.addCart}
            addCartUpdate={this.addCartUpdate}
            job={job}
          />
        );
      });

    return this.state.currentPage === "jobDetails" ? (
      <JobDetails
        changePage={this.changePage}
        jobId={this.state.jobId}
        addCart={this.addCart}
        quantidade={cartNumber}
      />
    ) : (
      <>
        <NinjaFilter
          quantidade={cartNumber}
          query={this.state.query}
          handleQuery={this.handleQuery}
          maxValue={this.state.maxValue}
          minValue={this.state.minValue}
          handleMaxValue={this.handleMaxValue}
          handleMinValue={this.handleMinValue}
          handleChangeSorting={this.handleChangeSorting}
          total={this.state.precoTotal}
          handleClickCart={this.props.handleClickCart}
        />
        <button
          onClick={() => this.props.handleClickCart(this.state.finalCart)}
        >
          carrinho
        </button>
        <ContainerAllJobs>{jobsPosted}</ContainerAllJobs>
      </>
    );
  }
}

export default HireNinja;

import React from "react";
import JobsCard from "./JobsCard";
import axios from "axios";
import NinjaFilter from "./NinjaFilter";
import JobDetails from "../JobDetails/Index";
import { ContainerAllJobs } from "./StyleHireNinja";

class HireNinja extends React.Component {
  state = {
    jobs: [],
    maxValue: "",
    minValue: "",
    sorting: "title",
    currentPage: "",
    jobId: "",
    query: "",
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

  handleShowDetails = () => {
    if (this.state.currentPage === "jobDetails") {
      return (
        <JobDetails changePage={this.changePage} jobId={this.state.jobId} />
      );
    } else if (this.state.currentPage === "back") {
      return <HireNinja />;
    }
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
          />
        );
      });

    return (
      <>
        <NinjaFilter
          query={this.state.query}
          handleQuery={this.handleQuery}
          maxValue={this.state.maxValue}
          minValue={this.state.minValue}
          handleMaxValue={this.handleMaxValue}
          handleMinValue={this.handleMinValue}
          handleChangeSorting={this.handleChangeSorting}
        />
        <ContainerAllJobs>
          {this.handleShowDetails() || jobsPosted}
        </ContainerAllJobs>
      </>
    );
  }
}

export default HireNinja;

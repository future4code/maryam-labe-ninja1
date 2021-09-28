import React from "react";
import JobsCard from "./JobsCard";
import axios from "axios";
import NinjaFilter from "./NinjaFilter";

class HireNinja extends React.Component {
  state = {
    jobs: [],
    maxValue: "",
    minValue: "",
    sorting: "title",
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
            key={job.title}
            title={job.title}
            price={job.price}
            paymentMethods={job.paymentMethods}
            dueDate={job.dueDate}
          />
        );
      });

    return (
      <>
        <NinjaFilter
          maxValue={this.state.maxValue}
          minValue={this.state.minValue}
          handleMaxValue={this.handleMaxValue}
          handleMinValue={this.handleMinValue}
          handleChangeSorting={this.handleChangeSorting}
        />
        {jobsPosted}
      </>
    );
  }
}

export default HireNinja;

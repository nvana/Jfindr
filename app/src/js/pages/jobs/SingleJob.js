import React from "react";

import * as JobsAction from "../../actions/jobs/JobsAction";
import JobsStore from "../../stores/jobs/JobsStore";
import Job from "../../components/job/job"


export default class SingleJob extends React.Component {
  constructor() {
    super();
    this.getJobs = this.getJobById.bind(this);
    this.state = {
      jobs: JobsStore.getJobById("573723a361db853c2a751d08"),
    };
    console.log(this.state)
  }

  /* Activate listeners of store */
  componentWillMount() {
    JobsStore.on("change", this.getJobById("573723a361db853c2a751d08"));
  }
  componentWillUnmount() {
    JobsStore.removeListener("change", this.getJobById("573723a361db853c2a751d08"));
  }
  /*********************************/

  getJobById() {
    this.setState({
      jobs: JobsStore.getJobById("573723a361db853c2a751d08"),
    });
  }


  render() {
    const { job } = this.state;

    return (
      <div>
        <h1>Job</h1>
        <ul class="collection">
          {job} 
        </ul>
      </div>
    );
  }
}

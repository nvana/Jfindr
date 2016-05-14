import React from "react";

import * as TodoActions from "../../actions/jobs/JobsAction";
import JobsStore from "../../stores/jobs/JobsStore";


export default class Featured extends React.Component {
  constructor() {
    super();
    this.getJobs = this.getJobs.bind(this);
    this.state = {
      jobs: JobsStore.getAll(),
    };
  }

  /* Activate listeners of store */
  componentWillMount() {
    JobsStore.on("change", this.getJobs);
  }
  componentWillUnmount() {
    JobsStore.removeListener("change", this.getJobs);
  }
  /*********************************/

  getJobs() {
    this.setState({
      jobs: JobsStore.getAll(),
    });
  }


  render() {
    const { jobs } = this.state;
    return (
      <div>
        <h1>List of jobs</h1>
        <ul> { JSON.stringify(jobs, null, 2) }</ul>
        <ul class="collection">
          <li class="collection-item">1</li>
          <li class="collection-item">2</li>
          <li class="collection-item">3</li>
          <li class="collection-item">4</li>
        </ul>
      </div>
    );
  }
}

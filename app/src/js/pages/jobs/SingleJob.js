import React from "react";

import * as JobsAction from "../../actions/jobs/JobsAction";
import JobsStore from "../../stores/jobs/JobsStore";
import Job from "../../components/job/job"


export default class SingleJob extends React.Component {
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
  	let { userID } = this.props.params
    let { query } = this.props.location
    console.log(userID)
    console.log(query)
    const { jobs } = this.state;
    const tab = (jobs).map((job)=>{
      return <Job key={job.id} {...job} />
    });

    return (
      <div>
        <h1>List of jobs</h1>
        <ul class="collection">
          {tab} 
        </ul>
      </div>
    );
  }
}

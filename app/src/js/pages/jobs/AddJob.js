import React from "react";

import * as TodoActions from "../../actions/jobs/JobsAction";
import JobsStore from "../../stores/jobs/JobsStore";
import Job from "../../components/job/job"


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
    console.log(jobs)
      const tab = (jobs).map((job)=>{
        return <Job key={job.id} {...job} />
      });
    return (
      <div>
        <h1>Add a new job</h1>
            <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
                <label  class="active" for="first_name">First Name</label>
              </div>
              <div class="input-field col s6">
                <input id="last_name" type="text" class="validate"/>
                <label class="active" for="last_name">Last Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
                <label  class="active" for="first_name">First Name</label>
              </div>
              <div class="input-field col s6">
                <input id="last_name" type="text" class="validate"/>
                <label class="active" for="last_name">Last Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
                <label  class="active" for="first_name">First Name</label>
              </div>
              <div class="input-field col s6">
                <input id="last_name" type="text" class="validate"/>
                <label class="active" for="last_name">Last Name</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

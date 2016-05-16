import React from "react";

import * as JobsAction from "../../actions/jobs/JobsAction";
import JobsStore from "../../stores/jobs/JobsStore";
import Job from "../../components/job/job"


export default class Featured extends React.Component {

  handleSubmit(event) {
    event.preventDefault()
    JobsAction.addJob({
   "libelle" : "Developer web Back-end",
  "company" : "TEST",
  "contractType" : "Alternance",
  "salary" : "1630",
  "level" : "Junior",
  "city" : "Paris",
  "author": "John Doe",
  "date" : "21/10/2016"
})
  }

  render() {
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
              <button onClick={this.handleSubmit.bind(this)} class="btn waves-effect waves-light">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

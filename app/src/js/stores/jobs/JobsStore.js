import { EventEmitter } from "events";
import * as JobsAction from "../../actions/jobs/JobsAction";
import dispatcher from "../../dispatcher";

class JobsStore extends EventEmitter {
  constructor() {
    super()
    this.jobs = [{"libelle":"loading","date":"loading","company":"none"}];
  }

  getAll() {
    return this.jobs;
  }
  getJobById(id) {
    return JobsAction.getJobById(id);
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_JOBS": {
        this.emit("change");
        break;
      }
      case "REMOVE_JOB": {
        this.emit("change");
        break;
      }
      case "RECEIVE_JOBS": {
        this.jobs = action.data;
        this.emit("change");
        break;
      }
      case "RECEIVE_JOBS_BY_ID": {
        this.jobs = action.data;
        this.emit("change");
        console.log(this.jobs)
        break;
      }
    }
  }

}

const jobsStore = new JobsStore;
dispatcher.register(jobsStore.handleActions.bind(jobsStore));

export default jobsStore;

import { EventEmitter } from "events";
import * as JobsAction from "../../actions/jobs/JobsAction";
import dispatcher from "../../dispatcher";

class JobsStore extends EventEmitter {
  constructor() {
    super()
    this.jobs = [{"libelle":"loading","date":"loading","company":"none"}];
  }

  getAll() {
    console.log("store getALL")
    return this.jobs;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_JOBS": {
        this.emit("change");
        break;
      }
      case "REMOVE_JOB": {
        this.emit("change");
        console.log(this.jobs)
        break;
      }
      case "RECEIVE_JOBS": {
        console.log("dispatcher here")
        this.jobs = action.data;
        this.emit("change");
        break;
      }
    }
  }

}

const jobsStore = new JobsStore;
dispatcher.register(jobsStore.handleActions.bind(jobsStore));

export default jobsStore;

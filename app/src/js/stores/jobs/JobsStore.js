import { EventEmitter } from "events";

import dispatcher from "../../dispatcher";

class JobsStore extends EventEmitter {
  constructor() {
    super()
    this.jobs = [{"name":"loading","date":"todfay"}];
  }

  getAll() {
    return this.jobs;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_JOBS": {
        this.createJobs(action.text);
        break;
      }
      case "RECEIVE_JOBS": {
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

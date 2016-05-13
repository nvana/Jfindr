import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.jobs = dispatcher.dispatch({type: "FETCH_JOBS"});
  }

  getAll() {
    //console.log(this.jobs)
    return this.jobs;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_JOBS": {
        this.createTodo(action.text);
        break;
      }
      case "RECEIVE_JOBS": {
        console.log(action)

       //console.log(data)
        this.jobs = action.data;
        this.emit("change");
        break;
      }
    }
  }

}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;

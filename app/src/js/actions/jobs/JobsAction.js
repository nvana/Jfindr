import dispatcher from "../../dispatcher";
 
fetchJobs();

export function fetchJobs() {
    $.ajax({
        url: "http://www.localhost:3000/api/jobs",
        dataType: 'json',
        type: "GET",
        cache: false,
        success: function(data) {
           dispatcher.dispatch({type: "RECEIVE_JOBS", data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error("http://localhost:3000/api/jobs", status, err.toString());
        }.bind(this)
      });
}
export function addJob(data) {
    $.ajax({
        url: "http://www.localhost:3000/api/jobs",
        dataType: 'json',
        type: "POST",
        data : JSON.stringify(data),
        cache: false,
        success: function(data) {
           dispatcher.dispatch({type: "RECEIVE_JOBS", data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error("http://localhost:3000/api/jobs", status, err.toString());
        }.bind(this)
      });
}
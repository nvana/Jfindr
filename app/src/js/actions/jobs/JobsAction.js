import dispatcher from "../../dispatcher";
 
fetchJobs();

export function removeJob(item) {
    $.ajax({
        url: "http://www.localhost:3000/api/jobs/"+item['_id'],
        type: "DELETE",
        cache: false,
        success: function(data) {
           dispatcher.dispatch({type: "RECEIVE_JOBS", data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error("http://localhost:3000/api/jobs", status, err.toString());
        }.bind(this)
      });
}

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
export function addJob(form) {
    $.ajax({
        url: "http://www.localhost:3000/api/jobs",
        data : form,
        dataType: 'json',
        type: "POST",
        cache: false,
        success: function(form) {
           dispatcher.dispatch({type: "CREATE_JOBS", form});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error("http://localhost:3000/api/jobs", status, err.toString());
        }.bind(this)
      });
}
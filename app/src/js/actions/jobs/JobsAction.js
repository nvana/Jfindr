/*import dispatcher from "../../dispatcher";
 

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_JOBS",
    text,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_JOBS",
    id,
  });
}

export function reloadTodos() {
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

$( document ).ready(()=>{
  reloadTodos();
})
*/
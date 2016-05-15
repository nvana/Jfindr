import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Jobs from "./pages/jobs/Jobs";
import AddJob from "./pages/jobs/AddJob";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
    	<IndexRoute component={Layout} />
		<Route path="jobs" component={Jobs}>
	        <Route path="/add" component={AddJob}/>
	    </Route>
    </Route>
  </Router>,
app);
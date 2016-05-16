import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import FetchJob from "./pages/jobs/FetchJob";
import AddJob from "./pages/jobs/AddJob";
import Jobs from "./pages/jobs/Jobs";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
    	<IndexRoute component={Layout} />
		<Route path="jobs" component={Jobs}>
	    	<Route path="add" component={AddJob}></Route>
	    	<Route path="all" component={FetchJob}></Route>
		</Route>
    </Route>
  </Router>,
app);
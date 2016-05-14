import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const jobsClass = location.pathname.match(/^\/jobs/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="purple darken-2">
        <div class="container">
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">Jfindr</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li class={featuredClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Todos</IndexLink>
              </li>
              <li class={jobsClass}>
                <Link to="jobs" onClick={this.toggleCollapse.bind(this)}>Jobs</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

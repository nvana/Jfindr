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
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="blue-grey lighten-1">
        <div class="container">
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">Jfindr</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Todos</IndexLink>
              </li>
              <li>
                <Link to="/jobs/all" onClick={this.toggleCollapse.bind(this)}>Jobs</Link>
              </li>
              <li>
                <Link to="/jobs/add" onClick={this.toggleCollapse.bind(this)}>Add Jobs</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

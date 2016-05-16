import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <div>
        <h1>Oops, page not found</h1>
      </div>

    );
  }
}

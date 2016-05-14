import React from "react";

export default class Job extends React.Component {
  constructor(props) {
    super();
    this.name = "loading"
    this.date = "loading"
  }

  render() {

    return (
      <li class="collection-item">
        <p>Nom du poste : {this.props.name}</p>
        <p>Date de mise en ligne : {this.props.date}</p>
      </li>
    );
  }
}

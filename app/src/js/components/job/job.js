import React from "react";

export default class Job extends React.Component {
  constructor(props) {
    super();
    this.libelle = "loading"
    this.company = "loading"
    this.contractType = "loading"
    this.salary = "loading"
    this.date = "loading"
    this.date = "loading"
    this.date = "loading"
    this.date = "loading"
  }

  render() {

    return (
      <li class="collection-item">
        <h4>{this.props.libelle}</h4>
        <p><b>Entreprise :</b> {this.props.company}</p>
        <p><b>Type de contrat :</b> {this.props.contractType}</p>
        <p><b>Salaire :</b> {this.props.salary}</p>
        <p><b>Niveau :</b> {this.props.level}</p>
        <p><b>Ville :</b> {this.props.city}</p>
        <p><b>Créateur :</b> {this.props.author}</p>
        <p><b>Date de mise en ligne :</b> {this.props.date}</p>
        <a class="waves-effect waves-light btn">Remove</a>
      </li>
    );
  }
}

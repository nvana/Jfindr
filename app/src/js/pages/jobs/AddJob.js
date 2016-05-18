import React from "react";

import * as JobsAction from "../../actions/jobs/JobsAction";
import JobsStore from "../../stores/jobs/JobsStore";
import Job from "../../components/job/job"


export default class Featured extends React.Component {

  handleSubmit(event) {
    event.preventDefault()
    JobsAction.addJob({
      "libelle" : document.getElementById('libelle').value,
      "company" : document.getElementById('company').value,
      "contractType" : document.getElementById('contractType').value,
      "salary" : document.getElementById('salary').value,
      "level" : document.getElementById('level').value,
      "city" : document.getElementById('city').value,
      "author": document.getElementById('author').value,
      "date" : document.getElementById('date').value
    })
    alert(document.getElementById('libelle').value + "à été créé avec succès.")
  }

  render() {
    return (
      <div>
        <h1>Add a new job</h1>
            <div class="row">
          <form class="col s12" onSubmit={this.handleSubmit.bind(this)}>
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Ex : Developer web Back-end" id="libelle" type="text" class="validate"/>
                <label  class="active" for="first_name">Intitulé de poste</label>
              </div>
              <div class="input-field col s6">
                <input placeholder="Ex : Capgemini" id="company" type="text" class="validate"/>
                <label class="active" for="company">Entreprise</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Ex : CDI" id="contractType" type="text" class="validate"/>
                <label class="active" for="contractType">Type de contrat</label>
              </div>
              <div class="input-field col s6">
                <input placeholder="Ex : 30000 - 40000" id="salary" type="text" class="validate"/>
                <label class="active" for="salary">Salaire proposé</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Ex : Junior" id="level" type="text" class="validate"/>
                <label  class="active" for="level">Niveau exigé</label>
              </div>
              <div class="input-field col s6">
                <input placeholder="Ex : Paris" id="city" type="text" class="validate"/>
                <label class="active" for="city">Ville</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Ex : Auteur" id="author" type="text" class="validate"/>
                <label class="active" for="author">Nom de l'auteur</label>
              </div>
              <div class="input-field col s6">
                <input placeholder="Ex : 10/07/2016" id="date" type="text" class="validate"/>
                <label class="active" for="date">Date</label>
              </div>
              <button class="btn waves-effect waves-light">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

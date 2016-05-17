import React from "react";

import * as JobsAction from "../../actions/jobs/JobsAction";
import JobsStore from "../../stores/jobs/JobsStore";
import Job from "../../components/job/job"


export default class Featured extends React.Component {

  handleSubmit(event) {
    event.preventDefault()
    JobsAction.addJob({
   "libelle" : "Developer web Back-end",
  "company" : "TEST",
  "contractType" : "Alternance",
  "salary" : "1630",
  "level" : "Junior",
  "city" : "Paris",
  "author": "John Doe",
  "date" : "21/10/2016"
})
  }

  render() {
    return (
      <div>
        <h1>Add a new job</h1>
            <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Ex : Developer web Back-end" id="first_name" type="text" class="validate"/>
                <label  class="active" for="first_name">Intitulé de poste</label>
              </div>
              <div class="input-field col s6">
                <input placeholder="Ex : Capgemini" id="last_name" type="text" class="validate"/>
                <label class="active" for="last_name">Entreprise</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Ex : CDI" id="first_name" type="text" class="validate"/>
                <label class="active" for="first_name">Type de contrat</label>
              </div>
              <div class="input-field col s6">
                <input placeholder="Ex : 30000 - 40000" id="last_name" type="text" class="validate"/>
                <label class="active" for="last_name">Salaire proposé</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Ex : Junior" id="first_name" type="text" class="validate"/>
                <label  class="active" for="first_name">Niveau exigé</label>
              </div>
              <div class="input-field col s6">
                <input placeholder="Ex : Paris" id="last_name" type="text" class="validate"/>
                <label class="active" for="last_name">Ville</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Ex : Auteur" id="first_name" type="text" class="validate"/>
                <label class="active" for="first_name">Nom de l'auteur</label>
              </div>
              <div class="input-field col s6">
                <input placeholder="Ex : 10/07/2016" id="last_name" type="text" class="validate"/>
                <label class="active" for="last_name">Date</label>
              </div>
              <button onClick={this.handleSubmit.bind(this)} class="btn waves-effect waves-light">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

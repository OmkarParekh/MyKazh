import React, { Component } from 'react'
import '../App.css'
export default class search extends Component {
     render() {
          return (
               <div class='container' id='search'>
                 <div class='row'>
                      <div class='col'>
                    <div class="md-form mr-auto">
                    <i class="fas fa-search prefix"></i>
                    <input type="text" id="inputIconEx2" class="form-control"/>
                    <label for="inputIconEx2">Search</label>
                    <button type="button" class="btn text-dark">MyKash.com</button>
                    <button type="button" class="btn text-dark">Sectors & Company</button>
                    <button type="button" class="btn text-dark">Projects & Products</button>
                    <button type="button" class="btn text-dark">Startups</button>
                    <button type="button" class="btn text-dark">Charity & NGOs</button>
                    <button type="button" class="btn text-dark">Others</button>

                    </div>
                      </div>
                    
                      </div>
               
               </div>
          )
     }
}

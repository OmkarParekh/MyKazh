import React, { Component } from 'react'
import '../App.css'
import logo from './logo.jpg'
export default class search extends Component {
     render() {
          return (
               <div  id='search'>
                 <div class='row'>
                      <div class='col'>
                    <div class="md-form ">
                    <form class="form-inline d-flex justify-content-center md-form form-sm mt-0 mx-auto">
                    <i class="fas fa-search ml-5" aria-hidden="true"></i>
                    <input class="form-control form-control-lg ml-3 w-50 mr-auto" type="text" placeholder="Search"
                    aria-label="Search"/>
                    <h5 class='font-weight-bold mr-5' id='expert'>Expert Advice</h5>
                    </form>
                    
                    <button type="button" class="btn text-dark"><img class='img-fluid' src={logo} alt=''/></button>
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

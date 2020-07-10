import React, { Component } from 'react'

import '../App.css'
export default class Navbar extends Component {
     render() {
          return (
               <div>
          
<nav class="mb-1 navbar  navbar-expand navbar-light font-weigth-bold  ">
     <div  id='conda'>
  <span class="navbar-brand text-white " ></span>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item">
    
        <span class="nav-link " >
         <h5 class='font-weigth-bold'> How Its Working?</h5>
        </span>
      </li>
     
    
    </ul>
    <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <span class="nav-link waves-effect waves-light" >
          Pricing
        </span>
        </li>
    </ul>
    <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <span class="nav-link waves-effect waves-light" >
          Trending
        </span>
        </li>
    </ul>
    <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <span class="nav-link waves-effect waves-light" >
          Rise Money
        </span>
        </li>
    </ul>
    <ul class="navbar-nav ml-auto ">
   
      
     
      <li class="nav-item dropdown">
      <span class="nav-link waves-effect waves-light " ahref='#'>
          Login/Signup
        </span>
      </li>
     
    </ul>
  </div>
  </div>
</nav>
</div>

          )
     }
}

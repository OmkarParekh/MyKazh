import React, { Component } from 'react'

import '../App.css'
export default class Navbar extends Component {
     render() {
          return (
               <div>
          
<nav class="mb-1 navbar fixed-top navbar-expand-lg navbar-dark  ">
     <div class='container' id='conda'>
  <a class="navbar-brand text-white " href="/">Money Growth</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item">
        <a class="nav-link waves-effect waves-light" ahref='#'>
          Trending
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link waves-effect waves-light " ahref='#'>
          Rise Money
        </a>
      </li>
    
    </ul>
    <ul class="navbar-nav ml-auto ">
     
      <li class="nav-item dropdown">
      <a class="nav-link waves-effect waves-light " ahref='#'>
          Login
        </a>
      </li>
      <li class="nav-item dropdown">
      <a class="nav-link waves-effect waves-light " ahref='#'>
          Sign up
        </a>
      </li>
    </ul>
  </div>
  </div>
</nav>
</div>

          )
     }
}

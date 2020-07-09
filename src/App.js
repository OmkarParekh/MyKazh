import React, { Component } from 'react'
import Navbar from './compoents/Navbar'
import Footer from './compoents/Footer'
import Cont from './compoents/Containers'
import Search from './compoents/search'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div class='container' id='con'>
          <Search/>
          <div class='card-deck' >

        <Cont/>
        <Cont/>
        <Cont/>

        <Cont/>
        <Cont/>
        <Cont/>
      </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Navbar from './compoents/Navbar'
import Footer from './compoents/Footer'
import Cont1 from './compoents/Containers1'
import Cont2 from './compoents/Containers2'
import Cont3 from './compoents/Containers3'
import Cont4 from './compoents/Containers4'
import Cont5 from './compoents/Containers5'
import Cont6 from './compoents/Containers6'
import Cont7 from './compoents/Containers7'
import Cont8 from './compoents/Containers8'
import Cont9 from './compoents/Containers9'
import Cont10 from './compoents/Containers10'
import Cont11 from './compoents/Containers11'
import Cont12 from './compoents/Containers12'
import Search from './compoents/search'
export default class App extends Component {
  render() {
    return (
      <div>
       
        <Navbar/>
        <div id='topbox'>
        <Search/>
        </div>
        <div id='con'>
          
          <div class='card-deck' >

        <Cont1/>
        <Cont2/>
        <Cont3/>
        <Cont4/>
        <Cont5/>
        <Cont6/>
        <Cont7/>
        <Cont8/>
        <Cont9/>
        <Cont10/>
        <Cont11/>
        <Cont12/>
      </div>
        </div>
        <div id='footer'>
        <Footer/>
        </div>
      </div>
    )
  }
}

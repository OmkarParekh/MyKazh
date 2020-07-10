import React, { Component } from 'react'
import '../App.css'
export default class Containers extends Component {
     constructor(){
          super()
          this.state={
               value:2700
          }
          this.data = this.data.bind(this);
     }
     data(e){
          const data=e.target.value
          this.setState({
               value:data
          })
     }
     render() {
          return (
               <div>
                   
     <div class="card ">


  <div class="view overlay">
    <img class="card-img-top" src="https://ksr-ugc.imgix.net/assets/029/080/156/9bc2baa16466e38a05a1f6000610826f_original.jpeg?ixlib=rb-2.1.0&crop=faces&w=352&h=198&fit=crop&v=1589441663&auto=format&frame=1&q=92&s=375f4baaadca941f743779a50387c8d4"
      alt=''/>
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

 
  <div class="card-body">

    
    <h4 class="card-title">Neabot Robot Vacuum </h4>
   
    <p class="card-text">Self-Emptying Dustbin | Hands-Free  | Deep Clean for Carpet | Multiple Cleaning Modes | APP Control</p>
    
     <label for="customRange1 ">${this.state.value} Of $250000</label>
     <input type="range" class="custom-range" id="customRange1"  min="0" value="2700"  max="250000" onChange={this.data}/>

  </div>
         
  <div class='card-footer'>
       <small class='text-black-50'>By</small>
       <h6> NeaBot</h6>
  </div>

</div>
</div> 
               
          )
     }
}

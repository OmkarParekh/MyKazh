import React, { Component } from 'react'
import '../App.css'
export default class Containers extends Component {
     constructor(){
          super()
          this.state={
               value:5000
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
    <img class="card-img-top" src="https://ksr-ugc.imgix.net/assets/029/634/387/f50e98251e212b44811c9332670a6436_original.png?ixlib=rb-2.1.0&crop=faces&w=352&h=198&fit=crop&v=1593417004&auto=format&frame=1&q=92&s=9a0c728d534e0ccd7ece51ee220be5b1"
      alt=''/>
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

 
  <div class="card-body">

    
    <h4 class="card-title">JO-E Pack</h4>
   
    <p class="card-text">An Everyday Carry Bag for daily & safety essentials. 12+ Features, FuseFabric, Flex Strap, & Brass Antimicrobial Key Hook Carabiner.</p>
    
     <label for="customRange1 ">${this.state.value} Of $50000</label>
     <input type="range" class="custom-range" id="customRange1"  min="0" value="5000"  max="50000" onChange={this.data}/>

  </div>
         
  <div class='card-footer'>
       <small class='text-black-50'>By</small>
       <h6> SLUGHAUs</h6>
  </div>

</div>
</div> 
               
          )
     }
}

import React, { Component } from 'react'
import '../App.css'
export default class Containers extends Component {
     constructor(){
          super()
          this.state={
               value:3000
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
    <img class="card-img-top" src="https://ksr-ugc.imgix.net/assets/029/652/669/869a13351ebacbb0cde59e82f141bdc2_original.jpg?ixlib=rb-2.1.0&crop=faces&w=352&h=198&fit=crop&v=1593532294&auto=format&frame=1&q=92&s=bb6d5dc3bdd5c32b712a6b41dd4ff250"
      alt=''/>
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

 
  <div class="card-body">

    
    <h4 class="card-title">UVMask</h4>
   
    <p class="card-text">The anti-pollution, antiviral face mask that filters dust, pathogens, and allergens (like pollen & leaf mulch) from the air you breathe</p>
    
     <label for="customRange1 ">${this.state.value} Of $70000</label>
     <input type="range" class="custom-range" id="customRange1"  min="0" value="3000"  max="70000" onChange={this.data}/>

  </div>
         
  <div class='card-footer'>
       <small class='text-black-50'>By</small>
       <h6> UM System</h6>
  </div>

</div>
</div> 
               
          )
     }
}

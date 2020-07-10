import React, { Component } from 'react'
import '../App.css'
export default class Containers extends Component {
     constructor(){
          super()
          this.state={
               value:1000
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
    <img class="card-img-top" src="https://ksr-ugc.imgix.net/assets/029/624/891/8e360186d91592f93097e657f58694ef_original.jpg?ixlib=rb-2.1.0&crop=faces&w=352&h=198&fit=crop&v=1593340193&auto=format&frame=1&q=92&s=cc5ea98b1afdc1902b72d80cc478ad46"
      alt=''/>
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

 
  <div class="card-body">

    
    <h4 class="card-title"> Wireless Charger Phone Stand</h4>
   
    <p class="card-text">Fophie, the Ultimate multi-port USB-C hub + fast wireless charging + convertible phone stand for iPhone & Android.</p>
    
     <label for="customRange1 ">${this.state.value} Of $20000</label>
     <input type="range" class="custom-range" id="customRange1"  min="0" value="1036"  max="20000" onChange={this.data}/>

  </div>
         
  <div class='card-footer'>
       <small class='text-black-50'>By</small>
       <h6> Fophie</h6>
  </div>

</div>
</div> 
               
          )
     }
}

import React, { Component } from 'react'
import '../App.css'
export default class Containers extends Component {
     constructor(){
          super()
          this.state={
               value:2100000
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
    <img class="card-img-top" src="https://d1us95wkqce0jo.cloudfront.net/site/company/featured_image/22392_441186.jpg"
      alt=''/>
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

 
  <div class="card-body">

    
    <h4 class="card-title">DIGITZS</h4>
   
    <p class="card-text">We come from Visa, Apple, and PayPal and we're here to make payments painless for software platforms.</p>
    
     <label for="customRange1 ">Rs{this.state.value} Of Rs2500000</label>
     <input type="range" class="custom-range" id="customRange1"  min="0" value=""  max="2500000" onChange={this.data}/>

  </div>
         
  <div class='card-footer'>
       <small class='text-black-50'>Feature Investor</small>
       <h6> Kavin Harrington</h6>
  </div>

</div>
</div> 
               
          )
     }
}

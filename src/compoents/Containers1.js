import React, { Component } from 'react'
import '../App.css'
export default class Containers extends Component {
     constructor(){
          super()
          this.state={
               value:15000
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
    <img class="card-img-top" src="https://d1us95wkqce0jo.cloudfront.net/site/company/featured_image/38529_955605.jpg"
      alt=''/>
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

 
  <div class="card-body">

    
    <h4 class="card-title">MYCROFT AI</h4>
   
    <p class="card-text">This Private Voice Assistant.For Tens of Thousands of users and Dozens</p>
    
     <label for="customRange1 ">Rs{this.state.value} Of Rs30000</label>
     <input type="range" class="custom-range" id="customRange1"  min="0" value="15000"  max="30000" onChange={this.data}/>

  </div>
         
  <div class='card-footer'>
       <small class='text-black-50'>Feature Investor</small>
       <h6> 500 Startups</h6>
  </div>

</div>
</div> 
               
          )
     }
}

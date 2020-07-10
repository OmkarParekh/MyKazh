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
    <img class="card-img-top" src="https://d1us95wkqce0jo.cloudfront.net/site/company/featured_image/67866_124567.jpg"
      alt=''/>
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

 
  <div class="card-body">

    
    <h4 class="card-title">MGOMEAT SERVICES</h4>
   
    <p class="card-text">The Halal Way. Meet the Meat at your Doorsteps.</p>
    
     <label for="customRange1 ">Rs100000 Offering</label>
    

  </div>
         
  <div class='card-footer'>
       <small class='text-black-50'>Minimum Investment $5000</small>
       <h6> 
          $12 Billion Halal Meat Market in USA Only      </h6>
  </div>

</div>
</div> 
               
          )
     }
}

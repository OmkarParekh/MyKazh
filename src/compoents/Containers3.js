import React, { Component } from 'react'
import '../App.css'
export default class Containers extends Component {
     constructor(){
          super()
          this.state={
               value:1785000
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
    <img class="card-img-top" src="https://d1us95wkqce0jo.cloudfront.net/site/company/featured_image/68157_223066.jpg"
      alt=''/>
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

 
  <div class="card-body">

    
    <h4 class="card-title">LIFE PACK ORANICS</h4>
   
    <p class="card-text">Life Pack Organics will change your life "One Life Pack at a Time"</p>
    
     <label for="customRange1 ">Rs{this.state.value} Of Rs400000</label>
     <input type="range" class="custom-range" id="customRange1"  min="0" value="15000"  max="400000" onChange={this.data}/>

  </div>
         
  <div class='card-footer'>
       <small class='text-black-50'>LPO has created the CBD Version of Emergen-C with 1000mg of VitaminC</small>
       
  </div>

</div>
</div> 
               
          )
     }
}

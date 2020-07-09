import React, { Component } from 'react'
import '../App.css'
export default class Containers extends Component {
     constructor(){
          super()
          this.state={
               value:0
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
    <img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
      alt="Card image cap"/>
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

 
  <div class="card-body">

    
    <h4 class="card-title">Card title</h4>
   
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
      content.</p>
    
     <label for="customRange1 ">${this.state.value} Of $30000</label>
     <input type="range" class="custom-range" id="customRange1"  min="0"  max="30000" onChange={this.data}/>

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

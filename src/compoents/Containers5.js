import React, { Component } from 'react'
import '../App.css'
export default class Containers extends Component {
     constructor(){
          super()
          this.state={
               value:1100000
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
    <img class="card-img-top" src="https://d2aq6dqxahe4ka.cloudfront.net/assets/uploads/campaigns_gallery/thumb_medium/help-golak-bihari-mallick-apl159428763851451.jpg"
      alt=''/>
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

 
  <div class="card-body">

    
    <h4 class="card-title">Please help me to raise funds for my father's Brain stroke treatment</h4>
   
    
    
     <label for="customRange1 ">Rs{this.state.value} Of Rs5000000</label>
     <input type="range" class="custom-range" id="customRange1"  min="0" value="1100000"  max="5000000" onChange={this.data}/>

  </div>
         
  <div class='card-footer'>
       <small class='text-black-50'>By</small>
       <h6> Prabal malik</h6>
  </div>

</div>
</div> 
               
          )
     }
}

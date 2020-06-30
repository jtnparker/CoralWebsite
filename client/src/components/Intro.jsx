import React from 'react';
import css from '../../dist/style.css';
  
const Intro = (props) => {
   return(
    <div className = "coral-main">
    <div className = "coral-title">
      Coral
    </div>

    <div className = "coral-b">
      <div className = "coral-p"></div>
      <div className = "coral-padding"></div>
      <div className = "coral-i">
        <div className = "coral-i-col-1">Trusted, Easy, Personalized</div>
        <div className = "coral-i-col-2">Introducing a new way to shop online using values that matter most to you</div>
        <div className = "coral-i-col-3">Add to Chrome, its free!</div>
      </div>

    </div>
    <div className = "coral-divider"> </div>
    <div className = "coral-grey"> 
        <div className = "coral-grey-p"></div>
    </div>
    <div className = "coral-divider"></div>
    <div className = "coral-bh" >What People are Saying</div>
    <div className = "coral-bh-c">
      <div className = "coral-bh-row-1">
        <div className = "coral-bh-row-1-col-1">“It’s hard to cut through the noise and see if a company is the real deal. Coral does it for me every time.”</div>
        <div className = "coral-bh-row-1-col-2">— Lindsay E,  coral user since April, 2020</div>
      </div>

      <div className = "coral-bh-row-2">
      <div className = "coral-bh-row-2-col-1">“Awesome. I’m can’t take the time to think about values for every purchase I make but I am trying to be more conscious of it.”</div>
        <div className = "coral-bh-row-2-col-2">— Aliy B, coral user since May 2020</div>
      </div>
    </div>
    <div className = "coral-divider"></div>
    <button className = "coral-privacy-button" onClick = {props.togglePrivacy}> Privacy Policy</button>
    {/* <GoodBuyInstall handleInputChange = {this.handleInputChange} 
    hrcToggle = {this.state.hrcToggle} 
    petaToggle ={this.state.petaToggle} 
    fairtradeToggle = {this.state.fairtradeToggle}/>
    {this.state.product.map((product) => (
      <ProductList product = {product}/>
      
    ))} */}
   
  
      </div>


    )
}

export default Intro

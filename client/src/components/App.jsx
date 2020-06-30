/* global chrome */

import React from 'react';
import css from '../../dist/style.css';

import axios from 'axios';
import Intro from './Intro.jsx'
import Privacy from './Privacy.jsx'
// import ReviewList from './ReviewList.jsx'
// import GoodBuyInstall from './GoodBuyInstall.jsx';
// import ProductList from './ProductList.jsx';

class App extends React.Component {
    constructor(props){
      super(props);
      // this.reviewRef = React.createRef();
      this.state = {
        product: [],
        privacy: true
        
    }
    this.togglePrivacy = this.togglePrivacy.bind(this);
    // this.getList = this.getList.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.getPreferences = this.getPreferences.bind(this);
    // this.next = this.next.bind(this);
    // this.newestList = this.newestList.bind(this);
    // this.popularList = this.popularList.bind(this);
    // this.previous = this.previous.bind(this);
    // this.first = this.first.bind(this);
    // this.scrollToRef = this.scrollToRef.bind(this);
  //   this.itemClickSelection = this.itemClickSelection.bind(this);
  //   this.postItem = this.postItem.bind(this);
  //   this.updateItem = this.updateItem.bind(this);
    
}
componentDidMount() {
     
    };
    
     
   
togglePrivacy() {
  this.setState(prevState => ({
    privacy: !prevState.privacy
  }));
}
    
    // this.reviewRef.current.focus();
  

// handleInputChange(event) {
//   const target = event.target;
//   var value;
//   if (target.name ==='hrcToggle' || 'petaToggle' || 'fairtradeToggle') {
//     value = target.checked;
//   }
//   else {
//     value = target.value;
//   }
  
//   const name = target.name;

//   this.setState({
//     [name]: value
//   });
// }
handleInputChange(event) {
  
  
  

  
}

  render() {
    return(
      <div>
        {this.state.privacy ? <Intro togglePrivacy = {this.togglePrivacy}/> : <Privacy togglePrivacy = {this.togglePrivacy}/>}

      </div>
       
    )
  }
}
export default App;
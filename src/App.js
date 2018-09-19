import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import axios from 'axios';
import firebase from './firebase';
import scrollToElement from 'scroll-to-element';

// COMPONENTS
import ScopeChoices from './ScopeChoices';
import FinalDestination from './FinalDestination';

const dbRef = firebase.database().ref();

const DivComponent = () => {
  return <div ref={this.divRef}></div>
}

class App extends Component {
  constructor(){
    console.log('constructor was called');
    super();

    this.state = {
      places: [],
    }
    this.divRef = React.createRef();
    this.sectionRef = React.createRef();
    this.pullDestination = this.pullDestination.bind(this);
  }
  componentDidMount(){
    
    // - When your app.js loads this is grabbing a 'snapshot' of all the data you have in firebase
    // - it is then passing in the values of that snapshot to your destinations function, that is setting // - the state with those values.

    // dbRef.on('value', (snapshot) => {
    //   this.destinations(snapshot.val());
    // });

  }

  formatPlaces = (locationObject) => {
    // taking the location (local or Global) object from firebase and formatting the values into an array
    // we are then setting the state of the app with that array
    const places = Object.entries(locationObject)
    .map((item) => {
      return {
        name: item[0],
        description: item[1].description,
        url: item[1].url
      };
    });
    this.setState({ places }); 
  }

  pullDestination = (choice) => {
    console.log(typeof choice, choice);
    // 1. use "choice" to get back a list of destinations at "choice" (Local or Global)
    dbRef.child(choice)
      .once('value', (snapshot) => {
        const places = snapshot.val();
    // 2. set state of places to be the list of destinations chosen (calling formatPlaces which sets state in the function )
        this.formatPlaces(places);
      }).then(() => {
        let section = document.querySelector('.destinationDescription')
        scrollToElement(section);
      })

      


    
  }



  

  render() {

    
    return (
      <div className="App">
        <ScopeChoices pullDestination={this.pullDestination} sectionRef={this.places} />
        <FinalDestination places={this.state.places} setRef={this.sectionRef} />
        <DivComponent />
      </div>

    );
  }
}


export default App;

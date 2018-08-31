import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import axios from 'axios';
import firebase from './firebase';

// COMPONENTS
import ScopeChoices from './ScopeChoices';
import FinalDestination from './FinalDestination';

const dbRef = firebase.database().ref();

class App extends Component {
  constructor(){
    console.log('constructor was called');
    super();

    this.state = {
      places: [],
    }

    this.pullDestination = this.pullDestination.bind(this);
  }
  componentDidMount(){
    console.log('component did mount was called');
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
      })
    
  }

  render() {
    console.log('render was called');
    return (
      <div className="App">
        <ScopeChoices pullDestination={this.pullDestination} />
        <FinalDestination places={this.state.places} />
      </div>
    );
  }
}

export default App;

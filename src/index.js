import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Accesses Geolocation API built into most modern browsers
class App extends Component {
  //Intalizes state - called before everything, not React specific
  constructor(props){
    //Calls the "Componet" constructor function - needs to be done every time
    super(props);
    //Initalizes state - the ONLY time we mutate it directly
    this.state = {
      lat: null,
      errorMessage: ''
    };
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //Updates state
        this.setState(
          {lat: position.coords.latitude}
        );
      },
      err => {
        this.setState({errorMessage: err.message})
      }
    );
  }

  //Required by React for components
  render(){
    if(this.state.errorMessage && !this.state.lat){
      return <div> Error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat){
      return <div> Latitude: {this.state.lat}</div>
    }

    if(!this.state.errorMessage && !this.state.lat){
      return <div> Loading</div>
    }
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

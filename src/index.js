import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.js';

//Accesses Geolocation API built into most modern browsers
class App extends Component {
  //Intalizes state - called before everything, not React specific
  state = {
    lat: null,
    errorMessage: ''
  };
  //Gets user location and updates state - after component has mounted
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState(
          {lat: position.coords.latitude}
        );
      },
      err => {
        this.setState({errorMessage: err.message})
      }
    );
  }

  componentDidUpdate() {
    console.log('Component had been updated - it rerendered');
  }

  //Required by React for components
  render(){
    if(this.state.errorMessage && !this.state.lat){
      return <div> Error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>
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

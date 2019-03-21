import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.js';
import Spinner from './Spinner';

//Accesses Geolocation API built into most modern browsers
class App extends Component {
  //Intalizes state - called before everything, not React specific
  state = {
    lat: null,
    errorMessage: ''
  };
  //Gets user latitude and longitude - after component has mounted, sets state
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

  //Renders component - Required for React
  render(){
    if(this.state.errorMessage && !this.state.lat){
      return <div> Error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>
    }

    if(!this.state.errorMessage && !this.state.lat){
      return <Spinner />
    }
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

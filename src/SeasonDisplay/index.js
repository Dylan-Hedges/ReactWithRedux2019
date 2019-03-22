import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.js';
import Spinner from './Spinner';


class App extends Component {
  //Intalizes state - called before everything, not React specific
  state = {
    lat: null,
    errorMessage: ''
  };

  //Gets user latitude and longitude - after component has mounted, sets state, Accesses Geolocation API built into most modern browsers
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

  //Decides what is displayed on screen - conditional rendering, best practice is to not put this logic directly in render()
  renderContent(){
    if(this.state.errorMessage && !this.state.lat){
      return <div> Error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>
    }

    if(!this.state.errorMessage && !this.state.lat){
      return <Spinner message="Please accept location request"/>
    }
  }

  //Renders component - Required for React
  render(){
    return(
      <div className="border-red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

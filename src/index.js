// Imports the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


//Creates a React component
const App = () => {
  const buttonText = { text: 'Click me'};
  const labelText = 'Enter Name: '
  return (
  <div>
    <label className="labelName" htmlFor="name">{labelText}</label>
    <input id="name" type="text"/>
    <button style={{backgroundColor: 'blue', color: 'white'}}> {buttonText.text} </button>
  </div>
  )
};

//Shows React component on screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

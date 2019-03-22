import React from 'react';

//Displays Semantic UI spinner
const Spinner = (props) => {
  return(
      <div className="ui active dimmer">
        <div className="ui text loader">{props.message}</div>
      </div>
  );
};

//If props arent passed down it will assign the below default to props.message
Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;

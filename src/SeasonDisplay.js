import React from 'react';
//Function determines if its winter or summer
const getSeason = (lat, month) => {
  if (month > 2 && month < 9){
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}
const SeasonDisplay = (props) => {
  //Passes lat and month (number) into function
  const season = getSeason(props.lat, new Date().getMonth());
  return <div>SeasonDisplay</div>
};

export default SeasonDisplay;

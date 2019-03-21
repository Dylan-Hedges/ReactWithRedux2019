import React from 'react';

//Stores on screen text and icon classes
const seasonConfig ={
  summer: {
    text: "Lets hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "Burr its cold",
    iconName: "snowflake"
  }
}
//Function that determines if its winter or summer
const getSeason = (lat, month) => {
  if (month > 2 && month < 9){
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}
const SeasonDisplay = (props) => {
  //Executes function and stores if it is winter or summer- Passes lat and month (number) into getSeason function
  const season = getSeason(props.lat, new Date().getMonth());
  //Stores season text and icon class - e.g winter.text & winter.iconName
  const { text, iconName } = seasonConfig[season];
  return (
    <div>
      <i className={`massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;

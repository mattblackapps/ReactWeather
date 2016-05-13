var React = require('react');

var WeatherMessage = ({cityName, temp}) => {
  return (
    <div>
      <p>It's {temp} degrees in {cityName}</p>
    </div>
  );
};

module.exports = WeatherMessage;

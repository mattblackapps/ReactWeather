var React = require('react');

var WeatherMessage = ({cityName, temp}) => {
  return (
    <div>
      <h3 className="text-center">It's {temp} degrees in {cityName}</h3>
    </div>
  );
};

module.exports = WeatherMessage;

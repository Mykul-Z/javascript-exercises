const convertToCelsius = function(fahrenheit) {

  celsius = fahrenheit - 32
  celsius = celsius * 5
  celsius = celsius / 9

  celsius = Math.round(celsius * 10)/10

  return celsius


};

const convertToFahrenheit = function(celsius) {

fahrenheit = celsius * 9
fahrenheit = fahrenheit / 5
fahrenheit = fahrenheit + 32

fahrenheit = Math.round(fahrenheit *10)/10

return fahrenheit


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

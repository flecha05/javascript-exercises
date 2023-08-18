const convertToCelsius = function(f) {
  let celsius;
  celsius= ((f-32)*(5/9));
  return Math.round(celsius*10)/10;
};

const convertToFahrenheit = function(c) {
  let fahr;
  fahr=((c*(9/5))+32);
  return Math.round(fahr*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

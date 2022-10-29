const randomTemperature = require('./../utilities/randomTemperature')

module.exports = (req, res) => {
  const maxValue = 15;
  const minValue = 7;

  return res.json({
    status: "Successfully",
    data: randomTemperature(maxValue, minValue),
  });
};

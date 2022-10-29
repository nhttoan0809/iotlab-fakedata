const sensorModel = require("../models/sensor.model");
const randomTemperature = require("../utilities/randomTemperature");

module.exports = (req, res) => {
  // Get id_station
  const id_station = req.id_station;

  sensorModel.find(
    {
      station_id: id_station,
    },
    (err, sensors) => {
      if (err) {
        return res.json({
          status: "Failure",
        });
      } else {
        if (sensors) {
          return res.json({
            status: "Successfully",
            data: sensors.map((sensor) => (
              {
                sensor_id: sensor._id,
                data: randomTemperature()
              }
            )),
          });
        } else {
          return res.json({
            status: "Failure",
          });
        }
      }
    }
  );
};

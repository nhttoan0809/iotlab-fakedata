const sensorModel = require("../models/sensor.model")

module.exports = (req, res, next) => {
    // get id_station
    const id_station = req.id_station

    // get params: id_sensor
    const id_sensor = req.params['id_sensor']

    sensorModel.findOne({
        _id: id_sensor,
        station_id: id_station
    }, (err, station) => {
        if(err){
            return res.json({
                status: "Failure"
            })
        }else{
            if(station){
                req.id_sensor = id_sensor
                console.log('\n\t\t\tMiddleware. id_sensor = ', id_sensor);
                next();
            }else{
                return res.json({
                    status: "Failure"
                })
            }
        }
    })
}
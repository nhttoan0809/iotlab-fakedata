const stationModel = require("../models/station.model")

module.exports = (req, res, next) => {
    // get id_account
    const id_account = req.id_account

    // get params: id_station
    const id_station = req.params['id_station']

    stationModel.findOne({
        _id: id_station,
        account_id: id_account
    }, (err, station) => {
        if(err){
            return res.json({
                status: "Failure"
            })
        }else{
            if(station){
                req.id_station = id_station
                console.log('\n\t\t\tMiddleware. id_station = ', id_station);
                next();
            }else{
                return res.json({
                    status: "Failure"
                })
            }
        }
    })
}
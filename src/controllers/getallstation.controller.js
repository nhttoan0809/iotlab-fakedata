const stationModel = require("../models/station.model")

module.exports = (req, res) => {

    // get id_account
    const id_account = req.id_account

    stationModel.find({
        account_id: id_account
    }, (err, stations) => {
        if(err){
            return res.json({
                status: "Failure"
            })
        }else{
            if(stations){
                return res.json({
                    status: "Successfully",
                    data: stations.map(station => (
                        {
                            station_id: station._id,
                            name: station.name
                        }
                    ))
                })
            }else{
                return res.json({
                    status: "Failure"
                })
            }
        }
    })
}
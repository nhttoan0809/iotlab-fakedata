const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Sensor = new Schema({
    _id: {type: mongoose.Types.ObjectId},
    data: {type: mongoose.Types.Decimal128},
    station_id: {type: mongoose.Types.ObjectId}
})

module.exports = mongoose.model('Sensors', Sensor)
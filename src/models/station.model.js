const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Station = new Schema({
    _id: {type: mongoose.Types.ObjectId},
    name: {type: String},
    account_id: {type: mongoose.Types.ObjectId}
})

module.exports = mongoose.model('Stations', Station)
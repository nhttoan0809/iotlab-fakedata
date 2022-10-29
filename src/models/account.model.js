const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Account = new Schema({
    _id: {type: mongoose.Types.ObjectId},
    username: {type: String},
    password: {type: String},
    token: {type: Array}
})

module.exports = mongoose.model('Accounts', Account)
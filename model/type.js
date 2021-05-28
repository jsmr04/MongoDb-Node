const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Type = mongoose.model('Type', new Schema({
    name: { type: String, require: true },
}, {
    timestamps:true
}))

module.exports = Type
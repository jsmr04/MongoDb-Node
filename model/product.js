const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = mongoose.model('Product', new Schema({
    code: { type: String, require: true, length: 4, unique: true },
    name: { type: String, require: true },
    quantity: Number,
    price: Number,
    active: { type: Boolean, default: true },
    images: [{ name:String, url: String }],
    typeId: { type: Schema.Types.ObjectId, ref: 'Type' },
}, {
    timestamps:true
}))

module.exports = Product
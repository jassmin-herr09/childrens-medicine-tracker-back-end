const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
    medicine: String,
    level: String
}, { timestamps: true});

module.exports = mongoose.model('Medicine', medicineSchema);
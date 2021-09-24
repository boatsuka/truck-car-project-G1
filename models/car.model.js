const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    carId: {type: String, required: true},
    menberId: {type: String, required: true},
    status: {type: Boolean, required: true},
    inbound: {type: Date},
    outbound: {type: Date}
});

const car = mongoose.model('Car', schema);

module.exports = car;
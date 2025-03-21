const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A service must have a name'],
        unique: true,
    },
    address: {
        type: String,
        required: [true, 'A service must have a address'],
    },
    manager: {
        type: String,
        required: [true, 'A service must have a price']
    },
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
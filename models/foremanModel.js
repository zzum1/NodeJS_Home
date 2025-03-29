const mongoose = require('mongoose');

const foremanSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'A foreman must have a first name'],
        unique: true,
    },
    lastName: {
        type: String,
        required: [true, 'A foreman must have a last name'],
        unique: true,
    },
    specialization: {
        type: String,
        required: [true, 'A foreman must have an specialization'],
    },
    photo: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: [true, 'A foreman must have a phone city'],
    },
    serviceAssigned: {
        type: String,
        required: [true, 'A foreman must have a service assigned'],
    },
});

const Foreman = mongoose.model('Foreman', foremanSchema);

module.exports = Foreman;


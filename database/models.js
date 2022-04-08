const mongoose = require('mongoose');

const gigSchema = new mongoose.Schema({
    business: Map,
    geolocation: Map,
    address: Map,
    contact: Map,
    title: String,
    description: String,
    payRate: Number,
    startTime: Date,
    endTime: Date,
    vehicleRequired: Boolean
},
    {timestamps: true});
const Gig = mongoose.model('Gig', gigSchema);

module.exports = { Gig };
var mongoose = require('mongoose');

var ReservationSchema = new mongoose.Schema({
    name: String,
    departure_city: String,
    arrival_city: String,
    departure_date: Date,
    return_date: Date,
    class: String,
    seat: String,
    updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Reservation', ReservationSchema);
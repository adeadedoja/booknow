var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Reservation = require('../models/Reservation.js');

/* GET ALL RESVERVATIONS */
router.get('/', function (req, res, next) {
    Reservation.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE RESVERVATION BY ID */
router.get('/:id', function (req, res, next) {
    Reservation.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE RESVERVATION */
router.post('/', function (req, res, next) {
    Reservation.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE RESVERVATION */
router.put('/:id', function (req, res, next) {
    Reservation.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE RESVERVATION */
router.delete('/:id', function (req, res, next) {
    Reservation.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

const UserCtrl = require('../controllers/user');
const BookingCtrl = require('../controllers/booking');

router.post('', UserCtrl.authMiddleware, BookingCtrl.createBooking) 
/*
router.get('', function(req, res) {
    Rental.find({}, function(err, foundRentals) {
        res.json(foundRentals);
    });
});

router.get('/:id', function(req, res) {
  const bookingId = req.params.id;
  Booking.findById(bookingId, function(err, foundRental) {
      if(err) {
          res.status(422).send({errors: [{title: 'Booking Error', detail: 'Could not find booking'}] });
      }
     res.json(foundRental);
  });
});*/

module.exports = router;
const Booking = require("../models/Booking");


const createBooking = async (req, res) => {
    let booking = await Booking.create({
        userId: req.body.userId,
        showingId: req.body.showingId,
        tickets: req.body.tickets
    });

    res.send(booking);
}


const getBookingById = async (req, res) => { //id for testing 60a7ab00b8587950bc6595aa

    Booking.findById(req.params.bookingid).exec((err, booking) => {
        // Checks for thrown errors from the method itself.
        if (err) {
            res.status(400).json({ error: "Something went wrong" });
            return;
        }

        // If no match is found in the DB.
        if (!booking) {
            res
                .status(404)
                .json({ error: `Booking with id ${req.params.bookingid} does not exist` });
            return;
        }

        res.json(booking);
    });
}


module.exports = {
    createBooking,
    getBookingById,
};


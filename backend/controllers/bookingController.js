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

const deleteBooking = async (req, res) => {
    try {
        let exists = await Booking.exists({ _id: req.params.bookingid });
        if (exists) {
            await Booking.deleteOne({ _id: req.params.bookingid }).exec();
            res.json({
                message: `Booking with id ${req.params.bookingid} has been deleted.`
            });
            return;
        }
    } catch (error) {
        res
            .status(404)
            .json({ error: `Booking with id ${req.query.bookingid} does not exist.` });
        return;
    }
}

module.exports = {
    getBookingById,
    createBooking,
    deleteBooking
};


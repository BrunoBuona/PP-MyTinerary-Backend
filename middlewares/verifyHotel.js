const { hotelFound, notHotel } = require("../config/responses");

const verifyHotel = (model) => [
    async (req, res, next) => {
        let hotel = await model.findOne({ _id: req.params.id });
        if (hotel) {
            if (hotel.userId.equals(req.user.id)) {
                return next();
            }
            return hotelFound(req, res);
        }
        return notHotel(req, res);
    },
];

module.exports = verifyHotel;
const { itineraryFound, notItinerary } = require("../config/responses");

const verifyItinerary = (model) => [
    async (req, res, next) => {
        let itinerary = await model.findOne({ _id: req.params.id });
        if (itinerary) {
            if (itinerary.userId.equals(req.user.id)) {
                return next();
            }
            return itineraryFound(req, res);
        }
        return notItinerary(req, res);
    },
];

module.exports = verifyItinerary;
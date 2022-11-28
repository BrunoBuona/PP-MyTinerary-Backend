const { cityFound, notCity } = require("../config/responses");

const verifyCity = (model) => [
    async (req, res, next) => {
        let city = await model.findOne({ _id: req.params.id });
        if (city) {
            if (city.userId.equals(req.user.id)) {
                return next();
            }
            return cityFound(req, res);
        }
        return notCity(req, res);
    },
];

module.exports = verifyCity;
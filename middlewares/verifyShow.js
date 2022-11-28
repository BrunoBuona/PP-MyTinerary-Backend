const { showFound, notShow } = require("../config/responses");

const verifyShow = (model) => [
    async (req, res, next) => {
        let show = await model.findOne({ _id: req.params.id });
        if (show) {
            if (show.userId.equals(req.user.id)) {
                return next();
            }
            return showFound(req, res);
        }
        return notShow(req, res);
    },
];

module.exports = verifyShow;
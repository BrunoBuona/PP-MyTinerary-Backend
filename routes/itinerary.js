let router = require('express').Router();
let { create,update,destroy,readItineraries} = require('../controllers/itinerary');
const schema = require('../schemas/itinerary')
const validator = require('../middlewares/validator')
const passport = require ('../config/passport')
const modelItinerary = require('../models/Itinerary')
const verifyItinerary = require('../middlewares/verifyItinerary')


router.post('/',validator(schema),create);
router.put('/:id',passport.authenticate("jwt", { session: false }),verifyItinerary(modelItinerary), update)
router.delete('/:id',passport.authenticate("jwt", { session: false }),verifyItinerary(schema), destroy)
router.get('/',readItineraries);

module.exports = router;

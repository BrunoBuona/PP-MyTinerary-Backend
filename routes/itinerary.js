let router = require('express').Router();
let schema = require ('../schemas/itinerary')
let { create,update,destroy,readItineraries} = require('../controllers/itinerary');
const validator = require('../middlewares/validator')
const passport = require ('../config/passport')
const modelItinerary = require('../models/Itinerary')
const verifyItinerary = require('../middlewares/verifyItinerary')


router.post('/',validator(schema),create);
router.put('/:id',passport.authenticate("jwt", { session: false }),verifyItinerary(modelItinerary), update)
router.delete('/:id',passport.authenticate("jwt", { session: false }),verifyItinerary(modelItinerary), destroy)
router.get('/',readItineraries);

module.exports = router;
let router = require('express').Router();
const schema = require('../schemas/itinerary')
const validator = require('../middlewares/validator')


let { create,update,destroy,readItineraries} = require('../controllers/itinerary');
const validator = require('../middlewares/validator')
const passport = require ('../config/passport')
const modelItinerary = require('../models/Itinerary')
const verifyItinerary = require('../middlewares/verifyItinerary')


router.post('/',validator(schema),create);
router.put('/:id', update);
router.delete('/:id',destroy);
router.get('/',readItineraries);

module.exports = router;
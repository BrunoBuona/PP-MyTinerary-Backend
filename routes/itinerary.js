let router = require('express').Router();

let { create,update,destroy,readItineraries} = require('../controllers/itinerary');

router.post('/', create);
router.put('/:id', update);
router.delete('/:id',destroy);
router.get('/',readItineraries);

module.exports = router;
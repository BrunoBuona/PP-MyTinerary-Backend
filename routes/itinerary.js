let router = require('express').Router();

let { create,update,destroy,readItinerariesByCity } = require('../controllers/itinerary');

router.post('/', create);
router.put('/:id', update);
router.delete('/:id',destroy);
router.get('/api/itineraries/:id',readItinerariesByCity)

module.exports = router;
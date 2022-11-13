let router = require('express').Router()
let user = require('./users')
let hotel = require('./hotels')
let city = require('./city')
let shows = require('./show')
let itinerary = require('./itinerary')

router.use('/api/users',user)
router.use('/api/hotels', hotel)
router.use('/api/cities',city)
router.use('/api/shows',shows)
router.use('/api/itineraries',itinerary)

module.exports = router;
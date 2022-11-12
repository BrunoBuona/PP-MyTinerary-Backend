let router = require('express').Router()
let user = require('./users')
let hotel = require('./hotels')

router.use('/api/users',user)
router.use('/api/hotels', hotel)

module.exports = router;
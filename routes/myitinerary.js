let router = require('express').Router()

let { readCI } = require('../controllers/myItinerary')

router.get('/', readCI )

module.exports = router
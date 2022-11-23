let router = require('express').Router()

let { readCI } = require('../controllers/myCities')

router.get('/', readCI)

module.exports = router
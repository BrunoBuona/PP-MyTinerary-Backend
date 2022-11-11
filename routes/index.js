let router = require('express').Router()
let user = require('./users')

router.use('/api/users',user)

module.exports = router;
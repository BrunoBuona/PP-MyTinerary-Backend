var router = require('express').Router()

let {create} = require('../controllers/show')

router.post('/create',create);

module.exports = router;

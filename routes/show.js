var router = require('express').Router()

let {create, update} = require('../controllers/show')

router.post('/create',create);
router.patch('/:id',update);

module.exports = router;

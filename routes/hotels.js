var router = require('express').Router()

let {create,update,destroy} = require('../controllers/hotel')

router.post('/create',create);
router.patch('/:id',update);
router.delete('/:id', destroy);

module.exports = router;

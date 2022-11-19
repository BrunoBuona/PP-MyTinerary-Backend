var router = require('express').Router()

let {create,update,destroy,read, readOne} = require('../controllers/hotel')

router.post('/',create);
router.patch('/:id',update);
router.delete('/:id', destroy);
router.get('/:id', readOne);
router.get('/', read);

module.exports = router;

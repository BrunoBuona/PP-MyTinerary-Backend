var router = require('express').Router()
const schema = require('../schemas/hotels')
const validator = require ('../middlewares/validator')

let {create,update,destroy,read, readOne} = require('../controllers/hotel')

router.post('/',validator(schema),create);
router.patch('/:id',update);
router.delete('/:id', destroy);
router.get('/:id', readOne);
router.get('/', read);

module.exports = router;

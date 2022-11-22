let router = require('express').Router();
const schema = require('../schemas/city')
const validator = require('../middlewares/validator')

let { create,update,destroy,read,readOne} = require('../controllers/city');

router.post('/',validator(schema),create);
router.put('/:id', update);
router.delete('/:id',destroy);
router.get('/',read);
router.get('/:id',readOne);

module.exports = router;
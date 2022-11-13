let router = require('express').Router();

let { create,update,destroy,read} = require('../controllers/city');

router.post('/', create);
router.put('/:id', update);
router.delete('/:id',destroy);
router.get('/',read)

module.exports = router;
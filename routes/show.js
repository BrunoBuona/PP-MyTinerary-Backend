var router = require('express').Router()

let {create, update, destroy, readShows} = require('../controllers/show')

router.post('/create',create);
router.patch('/:id',update);
router.delete('/:id',destroy);
router.get('/', readShows)

module.exports = router;

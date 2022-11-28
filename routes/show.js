var router = require('express').Router()
const validator = require('../middlewares/validator')
const schemashow = require('../schemas/shows')

let {create, update, destroy, readShows} = require('../controllers/show')

router.post('/create',validator(schemashow),create);
router.patch('/:id',update);
router.delete('/:id',destroy);
router.get('/', readShows)

module.exports = router;

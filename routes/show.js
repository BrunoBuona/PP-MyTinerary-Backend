var router = require('express').Router()
const validator = require('../middlewares/validator')
const schemashow = require('../schemas/shows')
const passport = require ('../config/passport')
const model = require('../models/Hotel')
const verifyShow = require('../middlewares/verifyShow')
let {create, update, destroy, readShows} = require('../controllers/show')

router.post('/create',validator(schemashow),create);
router.patch('/:id',passport.authenticate("jwt", { session: false }),verifyShow(model), update);
router.delete('/:id',passport.authenticate("jwt", { session: false }),verifyShow(model),destroy);
router.get('/', readShows)

module.exports = router;

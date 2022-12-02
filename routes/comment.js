var router = require('express').Router()
const schema = require('../schemas/comments')
const validator = require('../middlewares/validator')
const passport = require('../config/passport')
const model = require('../models/Comment')
let { create, read, update, destroy} = require('../controllers/comment')
const verify = require('../middlewares/verifyComment')

router.post('/', passport.authenticate("jwt", { session: false }), validator(schema), create);
router.get('/', read);
router.put('/:id',passport.authenticate("jwt", { session: false }),verify(model), update);
router.delete('/:id',passport.authenticate("jwt", { session: false }),verify(model), destroy);


module.exports = router;
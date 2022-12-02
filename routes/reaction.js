let router = require('express').Router()
const { create,updateReaction,read } = require('../controllers/reaction')
const passport = require('../config/passport')
const validator = require('../middlewares/validator')
const schema = require('../schemas/reaction')


router.post('/',passport.authenticate("jwt", { session: false }),validator(schema),create);
router.put('/',passport.authenticate("jwt", { session: false }),updateReaction)
router.get('/',read)

module.exports = router;
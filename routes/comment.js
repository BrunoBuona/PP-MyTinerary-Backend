var router = require('express').Router()
const schema = require('../schemas/comments')
const validator = require('../middlewares/validator')
const passport = require('../config/passport')
let { create, read } = require('../controllers/comment')

router.post('/', passport.authenticate("jwt", { session: false }), validator(schema), create);
router.get('/:id', read);

module.exports = router;
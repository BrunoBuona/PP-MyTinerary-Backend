let router = require('express').Router()
let {registrar, verificar, unlogin} = require('../controllers/user')
const accountExistsSignUp = require('../middlewares/accountExistsSignUp')
const schema = require('../schemas/user')
const validator = require('../middlewares/validator')
const passport = require('../config/passport')

router.post('/singup',validator(schema),accountExistsSignUp,registrar)
router.get('/verify/:code',verificar)
router.put('/sign-out', passport.authenticate('jwt', { session:false }), unlogin)

module.exports = router;

let router = require('express').Router()
let {registrar, verificar} = require('../controllers/user')
const accountExistsSignUp = require('../middlewares/accountExistsSignUp')
const schema = require('../schemas/user')
const validator = require('../middlewares/validator')

router.post('/singup',validator(schema),accountExistsSignUp,registrar)
router.get('/verify/:code',verificar)

module.exports = router;

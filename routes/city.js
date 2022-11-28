let router = require('express').Router();
let { create,update,destroy,read,readOne} = require('../controllers/city');
const schema = require('../schemas/city')
const validator = require('../middlewares/validator')
const verifyCity = require('../middlewares/verifyCity')
const model = require('../models/City')
const passport = require ('../config/passport')



router.post('/',validator(schema),create);
router.put('/:id',passport.authenticate("jwt", { session: false }),verifyCity(model), update)
router.delete('/:id',passport.authenticate("jwt", { session: false }),verifyCity(model), destroy)
router.get('/',read);
router.get('/:id',readOne);

module.exports = router;
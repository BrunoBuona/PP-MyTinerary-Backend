var router = require('express').Router()
const schema = require('../schemas/hotels')
const validator = require ('../middlewares/validator')
const passport = require ('../config/passport')
const model = require('../models/Hotel')
const verifyHotel = require('../middlewares/verifyHotel')
let {create,update,destroy,read, readOne} = require('../controllers/hotel')

router.post('/',validator(schema),create);
router.patch('/:id',passport.authenticate("jwt", { session: false }),verifyHotel(model),update);
router.delete('/:id',passport.authenticate("jwt", { session: false }),verifyHotel(model), destroy);
router.get('/:id', readOne);
router.get('/', read);

module.exports = router;

let router = require('express').Router()
const { create,updateReaction,read,destroy } =require('../controllers/reaction')
const passport=require('../config/passport')
const validator=require('../middlewares/validator') 
const schema=require('../schemas/reaction')
const activityUser=require('../middlewares/activityUser')
const Reaction=require('../models/Reactions')


router.post('/',passport.authenticate("jwt", { session: false }),validator(schema),create);
router.put('/',passport.authenticate("jwt", { session: false }),updateReaction)
router.get('/',read)
router.put('/:id',passport.authenticate("jwt", { session: false }),activityUser(Reaction),destroy)

module.exports = router;
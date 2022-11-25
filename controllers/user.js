const User = require('../models/User')
const bcryptsjs = require('bcryptjs')
const crypto = require('crypto')
const accountVerificationEmail = require('../config/accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse } = require('../config/responses')

const controller = {

    registrar: async (req, res, next) => {
        let { name, lastName, role, photo, age, email, password } = req.body
        let verified = false
        let logged = false
        let code = crypto.randomBytes(10).toString('hex')
        password = bcryptsjs.hashSync(password, 10)
        try {
            await User.create({ name, lastName, role, photo, age, email, password, verified, logged, code })
            await accountVerificationEmail(email, code)
            return userSignedUpResponse(req, res)
        } catch (error) {
            next(error)
        }
    },

    verificar: async (req, res, next) => {
        const {code} = req.params
        try {
            let user = await User.findOneAndUpdate({code:code},{verified:true},{new:true})
            if (user) {
                return res.redirect('http://localhost:3000')
            }
            return userNotFoundResponse(req,res)
        } catch (error) {
            next(error);
        }
    },

};
module.exports = controller;
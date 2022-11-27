const User = require('../models/User')
const bcryptsjs = require('bcryptjs')
const crypto = require('crypto')
const accountVerificationEmail = require('../config/accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse, invalidCredentialsResponse} = require('../config/responses')
const jwt = require('jsonwebtoken')

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

    signin: async (req, res, next) => {
        const { password } = req.body;
        const { user } = req;
        try {
          const checkPassword = bcryptsjs.compareSync(password, user.password);
          if (checkPassword) {
            const userDB = await User.findOneAndUpdate({ _id: user.id }, { logged: true }, {new:true});
            const token = jwt.sign(
              {
                id: userDB._id,
                name: userDB.name,
                photo: userDB.photo,
                logged: userDB.logged,
              },
              process.env.KEY_JWT,
              { expiresIn: 60 * 60 * 99 }
            );
            return res.status(200).json({
              response: { user, token },
              success: true,
              message: "Welcome" + user.name,
            });
          }
          return invalidCredentialsResponse(req, res);
        } catch (error) {
          next(error);
        }
      },
    
      loginWithToken: async (req, res, next) => {
        let { user } = req;
        try {
          console.log(user.logged)
          return res.json({
            response: {
              user: {
                name: user.name,
                photo: user.photo,
                logged: user.logged,
                role: user.role,
              },
            },
            success: true,
            message: "Welcome !" + user.name,
          });
        } catch (error) {
          next(error);
        }
      },
    
      salir: async (req, res, next) => {
        try {
        } catch (error) {
          next(error);
        }
      },
    };


module.exports = controller;
const UserModel = require('../model/user.model.js')

const bcrypt = require('bcrypt')
const checkBody = require('express-validator/check')

module.exports.signup = (req, res, next) => {
  req.checkBody('username', 'username is required').notEmpty()
  req.checkBody('username', 'username must to email').isEmail()
  req.checkBody('password', 'password is required').notEmpty()
  req.checkBody('password', 'must be at least 5 chars long').isLength({
    min: 5
  })
  var errors = req.validationErrors({
    mapped: true
  })
  if (errors) {
    res.json(errors)
  } else {
    // check email exist
    UserModel.countDocuments({
      username: req.body.username
    }, function (err, numberDuplicate) {
      if (err) {
        throw err
      } else {
        if (numberDuplicate !== 0) {
          res.json({
            errors: 'email is exist'
          })
        } else {
          // encrypt password
          bcrypt.hash(req.body.password, 10, function (err, hash) {
            if (!err) {
              try {
                req.body.password = hash
                let newUser = new UserModel(req.body)
                newUser.save((err, user) => {
                  if (err) {
                    console.log(err)
                    res.json(err)
                  } else {
                    res.json({
                      message: 'Register successfully!'
                    })
                  }
                })
              } catch (err) {
                console.log(err)
                res.json(err)
              }
            } else res.json(err)
          })
        }
      }
    })
  }
}

module.exports.signin = async (req, res, next) => {
  req.checkBody('username', 'user name is require').notEmpty()
  req.checkBody('password', 'password is require').notEmpty()
  var errors = req.validationErrors()
  if (errors) {
    res.json(errors)
  } else {
    UserModel.findOne({
      username: req.body.username
    }).then(user => {
      if (!user) {
        res.json({
          message: 'Email is incorrect'
        })
      } else {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (!err) {
            if (result === true) {
              res.json({
                message: 'Login successfully'
              })
            } else {
              res.json({
                message: 'Username or password is incorrect'
              })
            }
          } else {
            throw err
          }
        })
      }
    })
  }
}

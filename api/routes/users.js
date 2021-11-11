const router = require('express').Router()

const {getOneUser} = require('../controllers/users')

router.get("/", getOneUser)

module.exports = router
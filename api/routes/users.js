const router = require('express').Router()
const {getOneUser, createUser} = require('../controllers/users')

// Middlewares
const schemaValidator = require('../middleware/schemaValidator')

//schemas
const {create: createUserSchema} = require('../schemas/users')

//routes
router.get("/", getOneUser)
router.post("/", schemaValidator(createUserSchema,"body"), createUser)

module.exports = router
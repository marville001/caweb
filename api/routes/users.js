const router = require('express').Router()
const {getOneUser, getAllUsers} = require('../controllers/users')
const {register, login} = require('../controllers/auth')

// Middlewares
const schemaValidator = require('../middleware/schemaValidator')

//schemas
const {create: createUserSchema} = require('../schemas/users')

//routes
router.post("/auth/register", schemaValidator(createUserSchema,"body"), register)
router.post("/auth/login", login)
router.get("/", getAllUsers)
router.get("/id", getOneUser)

module.exports = router
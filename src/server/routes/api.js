const express = require('express')
const router = express.Router()
const usersController = require('../controllers/index')

router.get('/', usersController.testRoute)
router.get('/users', usersController.getUsers)
router.get('/users/:name', usersController.getUser)
router.post('/users/add', usersController.addUser)

module.exports = router
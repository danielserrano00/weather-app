const express = require('express')
const router = express.Router()
const STATIC_PATH = require('../server')
const path = require('path')

router.get('*', (req, res) => res.sendFile(path.join(STATIC_PATH), 'index.html'))

module.exports = router


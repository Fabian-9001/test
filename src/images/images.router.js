const imagesControllers = require('./images.controllers')
const router = require('express').Router()

router.get('/:type/:image', imagesControllers.findImage)

module.exports = router
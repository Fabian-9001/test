const charactersServices = require('./characters.services')
const router = require('express').Router()

router.route('/')
    .get(charactersServices.getAllCharacters)
    .post(charactersServices.createCharacter)

router.route('/:name')
    .get(charactersServices.getCharacter)

module.exports = router
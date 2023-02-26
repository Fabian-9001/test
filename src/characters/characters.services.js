const charactersControllers = require('./characters.controllers')

const getAllCharacters = (req, res) => {
    charactersControllers.getAllCharacters()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const getCharacter = (req, res) => {
    const name = req.params.name
    charactersControllers.getCharacter(name)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const createCharacter = (req, res) => {
    const { name, imgType } = req.body
    charactersControllers.createCharacter({ name, imgType })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

module.exports = {
    getAllCharacters,
    getCharacter,
    createCharacter
}
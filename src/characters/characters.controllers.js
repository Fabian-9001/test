const Characters = require('../models/characters.models')
const uuid = require('uuid')
const config = require('../../config')


const getAllCharacters = async () => {
    const data = Characters.findAll()
    return data
}

const getCharacter = async (name) => {
    const data = Characters.findOne({
        where: {
            name: name
        }
    })
    return data
}

const createCharacter = async (obj) => {
    const data = await Characters.create({
        id: uuid.v4(),
        name: obj.name,
        img_url: `${config.api.host}/api/v1/images/${obj.imgType}/${obj.name}.jpg`
    })
    return data
}

module.exports = {
    getAllCharacters,
    getCharacter,
    createCharacter
}
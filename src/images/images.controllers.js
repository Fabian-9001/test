const path = require('path')
const fs = require('fs')

const getImage = {
    async findImage(req, res) {
        const type = req.params.type
        const image = req.params.image
        const pathImage = path.resolve(__dirname, `../uploads/${type}/${image}`)
        if (await fs.existsSync(pathImage)) {
            res.sendFile(pathImage)
        } else {
            const pathNoImage = path.resolve(__dirname, '../uploads/electro.png')
            res.sendFile(pathNoImage)
        }
    }

}

module.exports = getImage
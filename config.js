require('dotenv').config()

module.exports = {
    api: {
        host: process.env.API_HOST || 'http://localhost:9001',
        port: process.env.API_PORT
    },
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME
    }
}
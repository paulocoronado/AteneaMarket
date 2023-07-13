const path = require('path')
const dotenv = require('dotenv')

const envPath = path.resolve(__dirname, 'L:/todoas a la U/certificacion git hub/AteneaMarket/.env')
const envConfig = dotenv.config({ path: envPath })

if (envConfig.error) {
  throw new Error(`No se pudo cargar el archivo .env: ${envConfig.error}`)
}

module.exports = envConfig.parsed

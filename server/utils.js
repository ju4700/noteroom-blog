const { config } = require("dotenv")
const { join } = require("path")

config({ path: join(__dirname, "../.env") })

function env(key, default_=null) {
    const value = process.env[key]
    if (value) {
        return value
    } else {
        if (default_ || default_ === null) {
            return default_
        } else {
            throw new Error(`Env key ${key} not found`)
        }
    }
}

module.exports = { env }

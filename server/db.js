const { Sequelize } = require("sequelize")
const { config } = require("dotenv")
const { join } = require("path")

config({ path: join(__dirname, "../.env") })

const db_name = process.env.DATABASE_NAME
const db_user = process.env.DATABASE_USER
const db_password = process.env.DATABASE_PASSWORD


const sequelize = new Sequelize(db_name, db_user, db_password, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports.sequelize = sequelize

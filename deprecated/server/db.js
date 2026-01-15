const { Sequelize } = require("sequelize")
const { env } = require("./utils")


const db_name = env("DATABASE_NAME")
const db_user = env("DATABASE_USER")
const db_password = env("DATABASE_PASSWORD")


const sequelize = new Sequelize(db_name, db_user, db_password, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports.sequelize = sequelize

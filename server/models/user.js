const { sequelize } = require("../db.js")
const { DataTypes } = require("sequelize")

const User = sequelize.define('users_waitlist', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true }
})

module.exports = User

'use strict'

const {Sequelize, DataTypes} = require('sequelize');

const POSTGRES_URI = process.env.NODE_ENV="test" ?'sqlite:memory' :'postgres://localhost:5432/lab06';
const Users = require('./user');
// config for prod
const sequelize = new Sequelize(POSTGRES_URI, {});




// lets define our Schema
module.exports = {
   
    db: sequelize,
    Users:Users(sequelize, DataTypes)

}
'use strict'


const Users =(sequelize, DataTypes)=>sequelize.define('lab6_user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports=Users
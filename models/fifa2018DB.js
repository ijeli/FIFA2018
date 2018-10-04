var Sequelize = require("sequelize");
var sequelize = require("../config/connection");

var fifa2018DB = sequelize.define("userProfile",
{
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            len: [1,50]
        }
    },
    teamName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            len: [1,50]
        }
    }
},
{
    freezeTableName: true,
    timestamps: false   
});

fifa2018DB.sync();

module.exports = fifa2018DB;


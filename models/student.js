"use strict"
module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define(
        "students",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                unique: true,
            },
            age: {
                type: DataTypes.INTEGER
            },
            city: {
                type: DataTypes.STRING
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            user_id: {
                type: DataTypes.INTEGER,
                references: { model: 'users', key: 'id' }
            }
        },
        { timestamps: false },
    );
    Student.associate = function (models) {
        // associations can be defined here
    };
    return Student;
}
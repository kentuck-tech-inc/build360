'use strict'

module.exports = (sequelize, DataTypes) => {
    const Blueprints = sequelize.define('blueprintEntity', {
        id:{
            field: 'ID',
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        bedrooms: DataTypes.INTEGER,
        bathrooms:DataTypes.FLOAT,
        floors: DataTypes.INTEGER,
        totalSqFeet: DataTypes.INTEGER,
        imageUrl: {
            field: 'image_url',
            type: DataTypes.STRING
        },
        thumbnailUrl: {
            field: 'thumbnail_url',
            type:DataTypes.STRING
        },
        style: DataTypes.INTEGER
    },
    {
        freezeTableName: true,
        primaryKey: true,
        timestamps: false
    });

    return Blueprints;
};
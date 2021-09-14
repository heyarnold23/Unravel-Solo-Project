'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define(
    'Song',
    {
    artistName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    albumName: {
      type: DataTypes.STRING,
      allowNull:false
    },
    albumUrl: {
      type: DataTypes.STRING,
      allowNull:false
    },
    backgroundArtUrl: {
      type: DataTypes.STRING,
      allowNull:false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull:false
    },
  }, {});
  Song.associate = function(models) {
      //song has foreign keys on annotations
      //song has foreign keys on comments
      Song.hasMany(models.Comment, {foreignKey:'songId'})
  };
  return Song;
};

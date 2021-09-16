'use strict';
module.exports = (sequelize, DataTypes) => {
  const Annotation = sequelize.define('Annotation', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    songId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    startPos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    endPos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  Annotation.associate = function(models) {
    // associations can be defined here
    Annotation.belongsTo(models.User, {foreignKey:'userId'});
    Annotation.belongsTo(models.Song, {foreignKey:'songId'});
  };
  return Annotation;
};

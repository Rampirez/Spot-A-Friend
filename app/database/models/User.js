'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    profileUrl: {
      type: DataTypes.STRING,
    },
    musicAnswer: {
      type: DataTypes.STRING,
    },
    sex: {
      type: DataTypes.BOOLEAN,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'users',
    underscored: true,
  });

  User.associate = function(models) {
    // associations can be defined here
  };

  return User;
};

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: DataTypes.STRING,
    password: DataTypes.BOOLEAN
  });
  return Users;
};

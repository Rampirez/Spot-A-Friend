module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    bio: DataTypes.TEXT,
  });
  
  return Users;
};

module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      text: DataTypes.TEXT,
      userID: DataTypes.INTEGER
    });
    return Post;
  };
  
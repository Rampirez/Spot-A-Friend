module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      text: DataTypes.TEXT,
      username: DataTypes.STRING
    });
    return Post;
  };
  
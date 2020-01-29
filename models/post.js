module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      text: DataTypes.TEXT,
      spotifyURL: DataTypes.STRING,
      username: DataTypes.STRING
    });
    return Post;
  };
  
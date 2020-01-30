module.exports = function(sequelize, DataTypes) {
    var quizAnswers = sequelize.define("quizAnswers", {
      username: DataTypes.STRING,
      Question1: DataTypes.STRING,
      Question2: DataTypes.STRING,
      Question3: DataTypes.STRING,
      Question4: DataTypes.STRING,
      Question5: DataTypes.STRING,
      Question6: DataTypes.STRING,
      Question7: DataTypes.STRING,
      Question8: DataTypes.STRING,
      Question9: DataTypes.STRING,
      Question10: DataTypes.STRING,
      Question11: DataTypes.STRING,
      Question12: DataTypes.STRING
    });
    return quizAnswers;
  };
  
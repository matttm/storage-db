const { DataTypes } = require("@sequelize/core");
module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "User",
    {
      alcoholFlag: {
        columnName: "ALCOHOL_FLAG",
        type: DataTypes.UUID,
      },
      drugFlag: {
        columnName: "DRUG_FLAG",
        type: DataTypes.INTEGER,
      },
      cigarettesFlag: {
        columnName: "CIGARETTES_FLAG",
        type: DataTypes.INTEGER,
      },
      heightRangeMin: {
        columnName: "HEIGHT_RANGE_MIN",
        type: DataTypes.INTEGER,
      },
      heightRangeMax: {
        columnName: "HEIGHT_RANGE_MAX",
        type: DataTypes.INTEGER,
      },
      bodyType: {
        columnName: "BODY_TYPE",
        type: DataTypes.INTEGER,
      },
      createdAt: {
        columnName: "CREATED_AT",
        type: "TIMESTAMP",
        allowNull: true,
      },
      updatedAt: {
        columnName: "UPDATED_AT",
        type: "TIMESTAMP",
        allowNull: true,
      },
    },
    {
      tableName: "USER_MATCH_PREFERENCE",
    }
  );
};

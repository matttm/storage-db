const { DataTypes } = require("@sequelize/core");
module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "User",
    {
      userId: {
        columnName: "USER_ID",
        type: DataTypes.UUID,
        primaryKey: true,
      },
      firstName: {
        columnName: "FIRST_NAME",
        type: DataTypes.STRING,
      },
      lastName: {
        columnName: "LAST_NAME",
        type: DataTypes.STRING,
      },
      email: {
        columnName: "EMAIL",
        type: DataTypes.STRING,
        allowNull: true,
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
      tableName: "USER",
    }
  );
};

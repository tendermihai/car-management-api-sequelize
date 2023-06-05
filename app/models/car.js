import { Sequelize } from "sequelize";

export default (sequelize) => {
  class Car extends Sequelize.Model {}

  Car.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      maker: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Provide a maker",
          },
          notEmpty: {
            msg: "Provide a maker",
          },
        },
      },

      model: {
        type: Sequelize.STRING,
        allowNull: false,
        notNull: {
          msg: "Provide a model",
        },
        notEmpty: {
          msg: "Provide a model",
        },
      },

      year: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Provide a registration date",
          },
          notEmpty: {
            msg: "Provide a registration date",
          },
        },
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Provide a price",
          },
          notEmpty: {
            msg: "Provide a price",
          },
        },
      },

      color: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Provide a color",
          },
          notEmpty: {
            msg: "Provide a color",
          },
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );

  return Car;
};

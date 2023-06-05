import { Sequelize } from "sequelize";

import Car from "../models/car.js";

const connectDb = () => {
  try {
    let sequelize = new Sequelize("car_management_db", "root", "password95", {
      host: "localhost",
      dialect: "mysql",
    });
    let db = {
      models: {},
    };

    db.Sequelize = Sequelize;

    db.sequelize = sequelize;

    db.models.Car = Car(sequelize);

    return db;
  } catch (error) {
    console.log(error);
  }
};

let db = connectDb();
export default db;

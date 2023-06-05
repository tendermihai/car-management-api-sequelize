import express, { json, request, response } from "express";
import db from "./config/db.js";
import { Sequelize } from "sequelize";
import Car from "./models/car.js";
import cors from "cors";
import route from "./routes/car-route.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1/cars", route);

// app.listen(5050, () => {
//   console.log("express is listening on 5050");
// });

db.sequelize.sync().then((result) => {
  app.listen(5050, () => {
    console.log("listening on 5050");
  });
});

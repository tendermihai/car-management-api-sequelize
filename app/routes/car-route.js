import express from "express";
import db from "../config/db.js";

const app = express.Router();

function asyncHandler(cb) {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}

app.get(
  "/all",
  asyncHandler(async (request, reseponse) => {
    let data = await db.models.Car.findAll();
    reseponse.status(200).json(data);
  })
);

app.post(
  "/add",
  asyncHandler(async (request, response) => {
    let newCar = {
      maker: request.body.maker,
      model: request.body.model,
      year: request.body.year,
      price: request.body.price,
      color: request.body.color,
    };

    await db.models.Car.create(newCar);
    response.status(200).json("Car has been successfully added.");
  })
);

app.delete(
  `/delete/:id`,
  asyncHandler(async (request, response) => {
    let id = request.params.id;
    console.log(id, "asta e id");
    const car = await db.models.Car.findByPk(id);

    if (car != null) {
      await car.destroy();

      response.status(200).json("Car has been successfully deleted.");
    } else {
      response.status(200).json(`There is no car with id ${id}`);
    }
  })
);

app.put(
  `/update/:id`,
  asyncHandler(async (request, response) => {
    let { id } = request.params;
    console.log(id);
    const car = await db.models.Car.findByPk(id);

    let obj = request.body.Car;
    console.log(obj);

    await db.models.Car.update(obj, {
      where: { id },
    });

    response.status(200).json("Car Successfully edited");
  })
);

export default app;

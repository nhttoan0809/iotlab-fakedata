const express = require("express");
const getTokenController = require("./../controllers/gettoken.controller");
const getAllStationController = require("./../controllers/getallstation.controller");
const getAllSensorController = require("./../controllers/getallsensor.controller");
const getDataController = require("./../controllers/getdata.controller");

const checkTokenMiddleware = require("./../middlewares/checkToken.middleware");
const getUserIdMiddleware = require("./../middlewares/getUserId.middleware");
const validateStationMiddleware = require("./../middlewares/validateStation.middleware");
const validateSensorMiddleware = require("./../middlewares/validateSensor.middleware");

const route = (app) => {
  app.use(express.json()); // for parsing application/json
  app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  app.post("/api/authen/token", getTokenController);
  app.get(
    "/api/station/get_all",
    checkTokenMiddleware,
    getUserIdMiddleware,
    getAllStationController
  );
  app.get(
    "/api/station/:id_station/sensor/get_all",
    checkTokenMiddleware,
    getUserIdMiddleware,
    validateStationMiddleware,
    getAllSensorController
  );
  app.get(
    "/api/station/:id_station/sensor/:id_sensor/get_data",
    checkTokenMiddleware,
    getUserIdMiddleware,
    validateStationMiddleware,
    validateSensorMiddleware,
    getDataController
  );
};

module.exports = route;
